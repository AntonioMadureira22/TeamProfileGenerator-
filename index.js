const inquirer = require("inquirer");

const pageTemplate = require("");
const {
  generateManager,
  generateEngineer,
  generateIntern,
} = require("./src/card.js");

const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/employee");
const Intern = require("./lib/intern");


const employeeCards = [];

const manager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager?",
        //manager.name input to cards
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "office",
        message: "What is their office number?",
      },
    ])
    .then((managerData) => {
      const managerCard = generateManager(managerData);
      employeeCards.push(managerCard);
      // console.log(employeeCards);
    });
};

const promptEmployee = () => {
  console.log(`
        ===============
        Add an Employee
        ===============
    `);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Is this person an Engineer or an Intern?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of this employee?",
      },
      {
        type: "number",
        name: "id",
        message: "What is their employee id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is their GitHub account name?",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What school are they attending?",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another employee?",
        default: false,
      },
    ])
    .then((teamData) => {
      const { name, id, email, role, github, school, confirmAddEmployee } =
        teamData;

      if (role === "Engineer") {
        engineerData = new Engineer(name, id, email, github);
        engineerCard = generateEngineer(engineerData);
        employeeCards.push(engineerCard);
        // console.log(engineerCard);
      } else if (role === "Intern") {
        internData = new Intern(name, id, email, school);
        internCard = generateIntern(internData);
        employeeCards.push(internCard);
        // console.log(internCard);
      }

      if (confirmAddEmployee) {
        return promptEmployee(employeeCards);
      } else {
        return employeeCards;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team page has been created!");
    }
  });
};

manager()
  .then(promptEmployee)
  .then((employeeCards) => {
    return pageTemplate(employeeCards);
  })
  .then((generateTeamPage) => {
    return writeFile(generateTeamPage);
  })
  .catch((err) => {
    console.log(err);
  });