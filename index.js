const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/generate-page.js");
const employeesArr = [];


const questions = [
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    },

    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the employee's ID number?"
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        when: ({ role }) => {
            if (role === "Manager") {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        when: ({ role }) => {
            if (role === "Engineer") {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        when: ({ role }) => {
            if (role === "Intern") {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        default: true,
    }
];

const promptUser = () => {
    inquirer.prompt(questions)
    .then(userResponse => {
        employeesArr.push(userResponse);

        if (userResponse.addEmployee) {
            return promptUser();
        } else {
            return employeesArr;
        };
    })
    .then(data => generatePage(data))
    .then(htmlContent => createPage(htmlContent))
    .catch(err => console.log(err));
};

const createPage = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log("Page created successfully!");
    })
};



promptUser();