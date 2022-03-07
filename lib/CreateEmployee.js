const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const writeFile = require('./writeFile');
const generatePage = require('../src/page-template');

function CreateEmployee() {
    this.associates = [];
}

CreateEmployee.prototype.getManger = function() {
    inquirer.prompt([
        {
            // get manager's name, employee ID, email address and office number
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter their name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team manager's employee ID: ",
            validate: IDinput => {
                if (IDinput) {
                    return true;
                } else {
                    console.log('Please enter their employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team manager's email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter their email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the team manager's office number: ",
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Please enter their office number.');
                    return false;
                }
            }
        },
        
    ])
    .then(({ name, id, email, officeNumber }) => {
        // create manager and add to associates array
        const manager = new Manager(name, id, email, officeNumber);
        this.associates.push(manager);

        this.addEmployee();
    });
};

CreateEmployee.prototype.addEmployee = function() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add info for another employee or build your team now? Enter Y for another Employee, N to build your team now',
            default: false
        },
        {
            type: 'list',
            name: 'employee',
            message: 'Which type of employee would you like to add?',
            choices: ['Engineer', 'Intern'],
            when: ({ confirmEmployee }) => {
                if (confirmEmployee) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(response => {
        if (!response.confirmEmployee) {
            console.log(this.associates);
            return generatePage(this.associates);
        } else {
            if (response.employee === 'Engineer') {
                this.addEngineer();
            } else {
                this.addIntern();
            }
        }
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    }).catch(err => {
        console.log(err);
    });
};


CreateEmployee.prototype.addEngineer = function() {
    inquirer.prompt([
        // get Engineer's name, ID, email and GitHub username
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter their name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's employee ID: ",
            validate: IDinput => {
                if (IDinput) {
                    return true;
                } else {
                    console.log('Please enter their employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter their email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's GitHub username: ",
            validate: githubinput => {
                if (githubinput) {
                    return true;
                } else {
                    console.log('Please enter their GitHub username.');
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, github }) => {
        // create new engineer and push to associates array
        const engineer = new Engineer(name, id, email, github);
        this.associates.push(engineer);

        this.addEmployee();
    });
};


CreateEmployee.prototype.addIntern = function() {
    // get Interns name, ID, email and school
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name: ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter their name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID: ",
        validate: IDinput => {
            if (IDinput) {
                return true;
            } else {
                console.log('Please enter their employee ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email: ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter their email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school: ",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter their school.');
                return false;
            }
        }
    }
    ])
    .then(({ name, id, email, school }) => {
        // make new intern and push to associates array
        const intern = new Intern(name, id, email, school);
        this.associates.push(intern);
        this.addEmployee();
    });
}

module.exports = CreateEmployee;