import { Selector, t } from 'testcafe'


class loginPage {
    constructor () {
        this.txtfldEmail = Selector('#email')
        this.txtfldPassword = Selector('#password')
        this.btnLogIn = Selector('#logIn')
    }

    async login(email, password) {
        await t
            .typeText('#email', email, { replace: true, paste: true })
            .typeText('#password', password, { replace: true, paste: true })
            .click('#logIn')
    }
}

export default new loginPage()
