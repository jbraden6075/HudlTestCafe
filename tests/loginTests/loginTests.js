import { ClientFunction } from 'testcafe'
import homePage from '../homePage/homePage'
import loginPage from '../loginPage/loginPage'

fixture('loginPage')

test('User can successfully login', async t => {
    // Defining data needed for the test
    let email = 'jbraden@protonmail.com'
    let password = 'techInterview1'
    let homePageURL = 'https://www.hudl.com/home'
    let userName = 'Justin B'

    // Calling login method from loginPage
    await loginPage.login(email, password)

    // Getting Home Page's URL
    const getURL = ClientFunction(() => document.location.href)

    // Getting the Home Page's user name's innerText
    let userNameInnerText = await homePage.userName.innerText

    // Asserting the URL is correct and the correct user is logged in
    await t
        .expect(getURL()).eql(homePageURL)
        .expect(userNameInnerText).eql(userName)
})
