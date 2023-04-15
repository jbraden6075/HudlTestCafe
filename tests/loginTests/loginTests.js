import { ClientFunction } from 'testcafe'
import helpPage from '../helpPage/helpPage'
import homePage from '../homePage/homePage'
import loginPage from '../loginPage/loginPage'
import mainPage from '../mainPage/mainPage'
import organizationPage from '../organizationPage/organizationPage'
import signUpPage from '../signUpPage/signUpPage'

fixture('loginPage')

test
    .meta('testID', 't-0001')
    .meta({ scope: 'regression', severity: 'critial', author: 'Justin Braden', creationDate: '04/15/2023' })
    ('User can successfully login', async t => {
        // Defining data needed for the test
        let email = 'jbraden@protonmail.com'
        let password = '' //Add password value here
        let homePageURL = 'https://www.hudl.com/home'
        let userName = 'Justin B'

        // Calling login method from loginPage
        await loginPage.login(email, password)

        // Getting Home Page's URL
        const getURL = ClientFunction(() => document.location.href)

        // Getting the Home Page's user name's innerText
        let userNameInnerText = await homePage.txtUserName.innerText

        // Asserting the URL is correct and the correct user is logged in
        await t
            .expect(getURL()).eql(homePageURL)
            .expect(userNameInnerText).eql(userName)
    })

test
    .meta('testID', 't-0002')
    .meta({ scope: 'regression', severity: 'low', author: 'Justin Braden', creationDate: '04/15/2023' })
    ('Clicking the Hudl logo will go to the main page', async t => {
        let mainPageURL = 'https://www.hudl.com/'

        await loginPage.clickHudlLogo()

        const getURL = ClientFunction(() => document.location.href)

        await t
            .expect(getURL()).eql(mainPageURL)
            .expect(mainPage.btnLogIn.visible).ok()
    })

test
    .meta('testID', 't-0003')
    .meta({ scope: 'regression', severity: 'low', author: 'Justin Braden', creationDate: '04/15/2023' })
    ('Clicking the left arrow will go to the main page', async t => {
        let mainPageURL = 'https://www.hudl.com/'

        await loginPage.clickLeftArrow()

        const getURL = ClientFunction(() => document.location.href)

        await t
            .expect(getURL()).eql(mainPageURL)
            .expect(mainPage.btnLogIn.visible).ok()
    })

test
    .meta('testID', 't-0004')
    .meta({ scope: 'regression', severity: 'medium', author: 'Justin Braden', creationDate: '04/15/2023' })
    ('Clicking the need nelp link will go to the help page', async t => {
        let helpPageURL = 'https://www.hudl.com/login/help#'

        await loginPage.clickNeedHelp()

        const getURL = ClientFunction(() => document.location.href)

        await t
            .expect(getURL()).eql(helpPageURL)
            .expect(helpPage.btnPasswordReset.visible).ok()
    })

test
    .meta('testID', 't-0005')
    .meta({ scope: 'regression', severity: 'medium', author: 'Justin Braden', creationDate: '04/15/2023' })
    ('Clicking the invalid login need nelp link will go to the help page', async t => {
        let helpPageURL = 'https://www.hudl.com/login/help'

        await loginPage.clickLogIn()
        await loginPage.clickInvalidLogInNeedHelp()

        const getURL = ClientFunction(() => document.location.href)

        await t
            .expect(getURL()).eql(helpPageURL)
            .expect(helpPage.btnPasswordReset.visible).ok()
    })

test
    .meta('testID', 't-0006')
    .meta({ scope: 'regression', severity: 'high', author: 'Justin Braden', creationDate: '04/15/2023' })
    ('Clicking Log In with an Organization goes to the Organization page', async t => {
        let organizationPageURL = 'https://www.hudl.com/app/auth/login/organization'

        await loginPage.clickLogInWithOrganization()

        const getURL = ClientFunction(() => document.location.href)

        await t
            .expect(getURL()).eql(organizationPageURL)
            .expect(organizationPage.btnLogInEmailPassword.visible).ok()
    })

test
    .meta('testID', 't-0007')
    .meta({ scope: 'regression', severity: 'critical', author: 'Justin Braden', creationDate: '04/15/2023' })
    ('Clicking Sign Up goes to the Sign Up page', async t => {
        let signUpPageURL = 'https://www.hudl.com/register/signup'

        await loginPage.clickSignUp()

        const getURL = ClientFunction(() => document.location.href)

        await t
            .expect(getURL()).eql(signUpPageURL)
            .expect(signUpPage.btnHighSchools.visible).ok()
    })

test
    .meta('testID', 't-0008')
    .meta({ scope: 'regression', severity: 'critical', author: 'Justin Braden', creationDate: '04/15/2023' })
    ('Invalid login will display message', async t => {
        let loginPageURL = 'https://www.hudl.com/login'

        await loginPage.clickLogIn()

        const getURL = ClientFunction(() => document.location.href)

        await t
            .expect(getURL()).eql(loginPageURL)
            .expect(loginPage.txtErrorMessage.visible).ok()
    })
