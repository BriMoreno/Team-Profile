//require technology for the code
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const jest = require("jest");

//require classes
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

//where the data is going
const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");

//how it is going to be rendered
const render = require("./src/layout.js");

//placeholders for arrays
const team = [];
const id = [];

//function to validate data entered
function validData(value) {
    if(value !== "") {
        return true;
    } else {
        return "Enter a valid response";
    }
}

//starts the app and asks users questions
function init() {
    function managerEntry() {
        console.log("Input your team's information");
        //manager data entry
        inquirer.prompt([ {
            type: "input",
            name: "manager",
            message: "Enter your manager's name: ",
            validate: validData,
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter your manager's ID: ",
            validate: function(value) {
                if (!/^[0-9]*$/.test(value)) {
                    alert("Please enter an integer: ");
                } else {
                    return true;
                }
                },
            },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter your manager's email: ",
            validate: function ValidateEmail(mail) 
            {
             if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
              {
                return (true)
              }
                alert("You have entered an invalid email address!")
                return (false)
            }            

         },
         
        ])
    }
}

init();