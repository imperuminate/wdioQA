const basePage = require('../basePage')

class bookStoreBasePage extends basePage {

    get userNameLabel() { return $('#userName-value') }
    get LogoutButton() { return $('button=Log out') }

}