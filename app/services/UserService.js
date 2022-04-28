const User = require('./../models/User')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, user="Sin bio"]
    }  

    static updateUserUserName (user, newUsername) {
        return user.username = newUsername
    }

    static getAllUserNames (users) {
        const userNames = users.map(user => user.username)
        return userNames 
    }
        

}

module.exports = UserService 