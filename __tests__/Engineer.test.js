const Engineer = require("../lib/Engineer");

test("Sets GitHub account in object", () => {
    const username = "testUserName";
    const newEmployee = new Engineer("test", 1, "test@test.test", username, "Engineer");
    expect(newEmployee.github).toBe(username);
});