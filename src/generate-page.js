const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const addEmployee = () => {
    let employeesArr = [];
    const information = 4;
    for (i = 0; i < information; i++) {
        if (title === "Manager") {
            this.employee = new Manager(name, id, email, officeNumber, title);
            employeesArr.push(employee);
        } else if (title === "Intern") {
            this.employee = new Intern(name, id, email, school, title);
            employeesArr.push(employee);
        } else if (title === "Engineer") {
            this.employee = new Engineer(name, id, email, github, title);
            employeesArr.push(employee);
        }
    }
}

// const addEmployee = employeeInformation => {
//     let employeeCard = '';

//     employeeInformation.forEach(employee => {

//         const { name, id, role } = employee;
//         let newEmployee = '';
//         let extraInformation = '';

//         switch (role) {
//             case "Engineer":
//                 newEmployee = new Engineer(name, id, employee.github);
//                 extraInformation = newEmployee.getGitHub();
//                 break;
//             case "Intern":
//                 newEmployee = new Intern(name, id, employee.school);
//                 extraInformation = newEmployee.getSchool();
//                 break;
//             case "Manager":
//                 newEmployee = new Manager(name, id, employee.officeNumber);
//                 extraInformation = newEmployee.getOfficeNumber();
//                 break;
//         };

//         employeeCard += `
// <article>
//         <div class="card">
//             <div class="card-title">
//                 <h2>${newEmployee.getName()}</h2>
//                 <h3>${newEmployee.getRole()}</h3>
//             </div>
//             <div class="card-content">
//                 <p>${newEmployee.getId()}</p>
//                 <p>${newEmployee.getEmail()}</p>
//                 <p>${extraInformation}</p>
//             </div>
//         </div>
//  </article>       
//         `
//     });
//     return employeeCard;
// }

const generatePage = data => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <section class="hero">
        <h1>Team Profile</h1>
    </section>
    <main>
        <section class="employees-container">
            ${addEmployee(data)}
        </section>
    </main>
</body>
</html>
`
}

module.exports = generatePage