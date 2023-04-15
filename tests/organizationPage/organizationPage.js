import { Selector } from 'testcafe'

class homePage {
    constructor () {
        this.btnLogInEmailPassword = Selector('button').withAttribute('data-qa-id', 'log-in-with-email-and-password')
    }
}

export default new homePage()
