import { Selector, t } from 'testcafe'


class loginPage {
    constructor () {
        this.txtfldEmail = Selector('#email')
        this.txtfldPassword = Selector('#password')
        this.btnLogIn = Selector('#logIn')
        this.svgHudlLogo = Selector('svg').withAttribute('data-qa-id', 'hudl-logo')
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
}

export default new loginPage()
