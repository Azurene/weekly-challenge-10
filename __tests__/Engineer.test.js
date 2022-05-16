const Engineer = require("../lib/Engineer");

test("Sets GitHub account in object", () => {
    const username = "testUserName";
    const newEngineer = new Engineer("test", 1, "test@test.test", username, "Engineer");
    expect(newEngineer.github).toBe("testUserName");
});

test("getGitHub() gets the Engineer's GitHub username", () => {
    const username = "testUserName";
    const newEngineer = new Engineer("bob", 3, "test@test.com", username, "Engineer");
    expect(newEngineer.getGitHub()).toBe("testUserName");
})

test("getRole() gets the Engineer's role", () => {
    const role = "Engineer";
    const newEngineer = new Engineer("test", 1, "test@test.test", "testUserName", role);
    expect(newEngineer.getRole()).toBe("Engineer");
});