import { ClientFunction, Selector } from 'testcafe'

class homePage {
    constructor () {
        this.userName = Selector('.hui-globaluseritem__display-name')
    }
}

export default new homePage()
