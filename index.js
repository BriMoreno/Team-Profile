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

function validId(value){
    if (!/^[0-9]*$/.test(value)) {
        return "Please enter an integer";
    } else {
        return true;
    }
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
         return true;
    } else{
        return "Please enter a valid email."
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
            validate:validId,
            },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter your manager's email: ",
            validate:validateEmail,       

         },
         {
            type: "input",
            name: "office",
            message: "Enter the number of your manager' office: ",
            validate: function officeNum(num) {
                if(Number.isInteger(num)) {
                    return "Please enter an integer";
                } else {
                    return true;
                }
            }
         }
         
        ])
        //pushing answers to a variable 
        .then((userInput) => {
            const managerInfo = new manager (
                userInput.manager,
                userInput.managerId,
                userInput.managerEmail,
                userInput.office,
            );
            team.push(managerInfo);
            id.push(userInput.managerId);
            add2Roster();
        });
    }
    function add2Roster() {
        inquirer.prompt([ {
            type:"list",
            name:"roleChoice",
            message: "who would you like to add to your team's roster: ",
            choices: [
                "Intern",
                "Engineer",
                "I'm finished making the roster."
            ],
        },
     ])
     .then((choiceMade) =>{
        switch(choiceMade.roleChoice) {
            case "Intern":
                internEntry();
                break;
            case "Engineer":
                engineerEntry();
                break;
            default:
                renderPage();
        }
     });
    }
    function internEntry() {
        inquirer.prompt([{
            type:"input",
            name:"internName",
            message:"Enter the name of the intern: ",
            validate: validData,
        },
        {
            type:"input",
            name:"internId",
            message:"The intern's ID: ",
            validate: validId,
        },
        {
            type:"input",
            name:"internEmail",
            message:"Enter intern's email: ",
            validate: validateEmail,
        },
        {
            type:"input",
            name:"school",
            message:"What school is the intern attending: ",
            validate: validData,
        },
        ])
        .then((userInput) => {
            const internInfo = new intern (
                userInput.internName,
                userInput.internId,
                userInput.internEmail,
                userInput.school,
            );
            team.push(internInfo);
            id.push(userInput.internId);
            add2Roster();
        });
    }
    function engineerEntry(){
        inquirer.prompt([ 
        {
            type:"input",
            name:"engName",
            message:"Enter the engineer's name: ",
            validate: validData,
        },
        {
            type:"input",
            name:"engId",
            message:"Enter the engineer's ID: ",
            validate: validId,
        },
        {
            type:"input",
            name:"engEmail",
            message:"Enter the engineer's Email: ",
            validate: validateEmail,
        },
        {
            type:"input",
            name:"gitHub",
            message:"Enter the engineer's GitHub: ",
            validate: validData,
        }
        ])
        .then((userInput) => {
            const engineerInfo = new engineer (
                userInput.engnName,
                userInput.engId,
                userInput.engEmail,
                userInput.gitHub,
            );
            team.push(engineerInfo);
            id.push(userInput.engId);
            add2Roster();
        });
    }
    function renderPage() {
        if(!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        console.log("Producing team roster.");

        fs.writeFileSync(outputPath, render(team),"utf8");
        console.log("Your webpage is in the dist folder")
    }
    
    managerEntry();
}

init();