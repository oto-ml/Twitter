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


    test("3. Update username", () => {
        const user = UserService.create(1,"rubenotoniel","Oto")
        UserService.updateUserUserName(user, "rubeno")
        expect(user.username).toBe("rubeno")

    })

    test("4. Given a list of users give the list of usernames", () => {
        const user1 = UserService.create (1, "rubenotoniel1", "Oto")
        const user2 = UserService.create (2, "rubenotoniel2", "Oto")
        const user3 = UserService.create (3, "rubenotoniel3", "Oto")
        const usernames = UserService.getAllUserNames([user1, user2, user3])
        expect(usernames).toContain("rubenotoniel1")
        expect(usernames).toContain("rubenotoniel2")
        expect(usernames).toContain("rubenotoniel3")

    })