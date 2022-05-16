const Intern = require("../lib/Intern");

test("checks to see if school is set in object", () => {
    const testSchool = "School";
    const newIntern = new Intern("test", 10, "test@test.com", testSchool, "Intern");
    expect(newIntern.school).toBe(testSchool);
});

test("getSchool() gets intern's school", () => {
    const testSchool = "College";
    const newIntern = new Intern("TestName", 12, "test@test.test", testSchool, "Intern");
    expect(newIntern.getSchool()).toBe("College");
})