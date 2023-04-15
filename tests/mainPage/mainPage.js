import { Selector } from 'testcafe'

class mainPage {
    constructor () {
        this.btnLogIn = Selector('a').withAttribute('data-qa-id', 'login-select')
    }
}

export default new mainPage()
