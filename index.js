const inquirer = require("inquirer");
const emailValidator = require("email-validator");
/*const createPage */
const log = ("console.log");

/*empty array*/
const group = [];

/*Start to prompt of questions*/
function questions() {
log("Welcome to the Team Profile Generator")
}
return inquirer
.prompt([
    {
        type:"input",
        name:"name",
        message:"What is the team manager's name?",
        validate: name => {
            if (name) {
                return true;
            }
            else {
                return "A manger's name needs to be entered!";
            }
        }

    },

    {
        type: "input",
        name: "id",
        message:"Enter the team manager's ID number",
        validate: id => {
            const pass = !isNaN(id);
            if (id && pass) {
                return true;
            }
            else{
                return "A valid ID number needs to be entered";
            }
        }
    },
    
    {
        type: 'input',
        name: 'email',
        message: "What is your team manager's email address?",
        validate: email => {
            if (emailvalidator.validate(email) == true) {
                return true;
            } else {
                return 'Enter a valid email address.';
            }
        }
    },

    {
        type: 'input',
        name: 'office',
        message: "What is your team manager's office number?",
        validate: office => {
            const pass = !isNaN(office)
            if (office && pass) {
              return true;
            } else {
              return 'Please enter a valid office number';
            }
          }
        }
])