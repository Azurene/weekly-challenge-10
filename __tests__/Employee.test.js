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

// test for setting Employee email
test("adds email to object", () => {
    const email = "test@test.com";
    const newEmployee = new Employee("Bob", 2, email);
    expect(newEmployee.email).toBe(email);
})

// test for getting name via getName()
test("getName() gets Employee name", () => {
    const name = "TestName";
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
});

// test for getting ID via getId()
test("getId() gets Employee ID", () => {
    const testId = 30;
    const newEmployee = new Employee("TestName", testId);
    expect(newEmployee.getId()).toBe(testId);
});

// test for getting email via getEmail()
test("getEmail() gets Employee email", () => {
    const email = "test@test.test"
    const newEmployee = new Employee("Bob", 2, email);
    expect(newEmployee.getEmail()).toBe(email);
});

test("getRole() gets Employee role and should return 'Employee'", () => {
    const testRole = "Employee";
    const newEmployee = new Employee("Test", 3, "test@test.test", "Employee");
    expect(newEmployee.getRole()).toBe(testRole);
})