namespace UserNameSpace {
    export class Auth {
        login() {
            console.log('User Login Function');
        }
    }

    export function getList() {
        console.log('List of Users');
    }
}

namespace AdminNameSpace {
    export class Auth {
        login() {
            console.log('User Login Function');
        }
    }

    export function getList() {
        console.log('List of Users');
    }

    const apiURL = 'www.com'
}

var user = new UserNameSpace.Auth()
user.login();
UserNameSpace.getList()