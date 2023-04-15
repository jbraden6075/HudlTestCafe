import { Selector } from 'testcafe'

class signUpPage {
    constructor () {
        this.btnHighSchools = Selector('#register_demo')
    }
}

export default new signUpPage()
