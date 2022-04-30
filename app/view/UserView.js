const User = require('./../services/UserService')

class UserView {
    static createUser(payload) {
        var objMessage = {}

        if (payload === null) {
            return objMessage = {error:"payload no existe"}
        }

        else if(typeof payload.username !== 'string' || typeof payload.name !=='string' || typeof payload.id !=='number'){
            return objMessage = {error:"necesitan un valor valido"}
        }
    }
}

module.exports = UserView