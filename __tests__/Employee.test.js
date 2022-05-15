const Employee = require("../lib/Employee");

// tests if constructor creates object
test('creates an Employee object', () => {
    const newEmployee = new Employee();
    expect(typeof (newEmployee)).toBe("object");
});

// test for setting employee name
test("adds name to Employee object", () => {
    const name = "Test";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
});

// test for setting Employee id
test("adds id to object", () => {
    const testId = 20;
    const newEmployee = new Employee("Test", testId);
    expect(newEmployee.id).toBe(testId);
});

