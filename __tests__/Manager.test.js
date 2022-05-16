const Manager = require("../lib/Manager");

test("sets office number in Manager object", () => {
    const testNumber = 13;
    const newManager = new Manager("test", 11, "test@test.com", testNumber, "Manager");
    expect(newManager.officeNumber).toBe(testNumber);
});

test("getRole() returns 'Manager'", () => {
    const testRole = "Manager";
    const newManager = new Manager("test", 11, "test@test.test", 10, testRole);
    expect(newManager.getRole()).toBe("Manager");
});

test("getOfficeNumber() returns office number", () => {
    const testNumber = 13;
    const newManager = new Manager("test", 123, "test@test.test", testNumber, "Manager");
    expect(newManager.getOfficeNumber()).toBe(13);
})