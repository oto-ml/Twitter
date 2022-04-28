const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "rubenotoniel", "Oto")
        expect(user.username).toBe("rubenotoniel")
        expect(user.name).toBe("Oto")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

})

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1,"rubenotoniel","Oto")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("rubenotoniel")
        expect(userInfoInList[2]).toBe("Oto")
        expect(userInfoInList[3]).toBe("Sin bio")
    })