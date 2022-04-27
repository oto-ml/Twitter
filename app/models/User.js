class User {
    constructor(id, username, name, bio, dateCreated, lastUpdated){
        this.id = id
        this.username = username
        this.name = name 
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    get getUserName() {
        return this.username
    }

    get getBio() {
        return this.bio
    }

    get getDateCreated() {
        return this.dateCreated
    }

    get getLastUpdated() {
        return this.lastUpdated
    }

    set setUsername(newUsername) {
        this.username = newUsername
    }

    set setBio(NewBio) {
        this.bio = NewBio    }
}

module.exports = User 