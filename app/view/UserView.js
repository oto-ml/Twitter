const User = require('./../services/UserService')

class UserView {
    static createUser(payload) {
        var objMessage = {}

        if (payload === null) {
            return objMessage = {error:"payload no existe"}
        }
    }
}

module.exports = UserView