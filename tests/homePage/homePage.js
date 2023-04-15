import { Selector } from 'testcafe'

class homePage {
    constructor () {
        this.txtUserName = Selector('.hui-globaluseritem__display-name')
    }
}

export default new homePage()
