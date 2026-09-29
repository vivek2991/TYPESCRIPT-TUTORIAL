var UserNameSpace;
(function (UserNameSpace) {
    class Auth {
        login() {
            console.log('User Login Function');
        }
    }
    UserNameSpace.Auth = Auth;
    function getList() {
        console.log('List of Users');
    }
    UserNameSpace.getList = getList;
})(UserNameSpace || (UserNameSpace = {}));
var AdminNameSpace;
(function (AdminNameSpace) {
    class Auth {
        login() {
            console.log('User Login Function');
        }
    }
    AdminNameSpace.Auth = Auth;
    function getList() {
        console.log('List of Users');
    }
    AdminNameSpace.getList = getList;
    const apiURL = 'www.com';
})(AdminNameSpace || (AdminNameSpace = {}));
var user = new UserNameSpace.Auth();
user.login();
UserNameSpace.getList();
export {};
