import { Selector } from 'testcafe'

class helpPage {
    constructor () {
        this.btnPasswordReset = Selector('button').withAttribute('data-qa-id', 'password-reset-submit-btn')
    }
}

export default new helpPage()
