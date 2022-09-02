//require technology for the code
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const jest = require("jest");

//require arrays
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");