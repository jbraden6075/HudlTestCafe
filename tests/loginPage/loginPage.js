import { Selector, t } from 'testcafe'


class loginPage {
    constructor () {
        this.txtfldEmail = Selector('#email')
        this.txtfldPassword = Selector('#password')
        this.btnLogIn = Selector('#logIn')
        this.svgHudlLogo = Selector('svg').withAttribute('data-qa-id', 'hudl-logo')
        this.linkLeftArrow = Selector('.styles_backIconContainer_MhkioW9m8rx70X7CIGuws')
        this.linkNeedHelp = Selector('a').withAttribute('data-qa-id', 'need-help-link')
        this.linkInvalidLogInNeedHelp = Selector('a').withText('Need help?')
        this.btnLogInWithOrganization = Selector('button').withAttribute('data-qa-id', 'log-in-with-organization-btn')
        this.linkSignUp = Selector('a').withText('Sign up')
        this.txtErrorMessage = Selector('p').withAttribute('data-qa-id', 'error-display')
    }

    async login(email, password) {
        await t
            .typeText(this.txtfldEmail, email, { replace: true, paste: true })
            .typeText(this.txtfldPassword, password, { replace: true, paste: true })
            .click(this.btnLogIn)
    }

    async clickHudlLogo() {
        await t
            .click(this.svgHudlLogo)
    }

    async clickLeftArrow() {
        await t
            .click(this.linkLeftArrow)
    }

    async clickNeedHelp() {
        await t
            .click(this.linkNeedHelp)
    }

    async clickLogIn() {
        await t
            .click(this.btnLogIn)
    }

    async clickInvalidLogInNeedHelp() {
        await t
            .click(this.linkInvalidLogInNeedHelp)
    }

    async clickLogInWithOrganization() {
        await t
            .click(this.btnLogInWithOrganization)
    }

    async clickSignUp() {
        await t
            .click(this.linkSignUp)
    }
}

export default new loginPage()
