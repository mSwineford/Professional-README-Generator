// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the projects name?",
        name: "projects name"
    },
    {
        type: "input",
        message: "Give the README file a discription",
        name: "projcet description"
    },
    {
        type: "input",
        message: "Provide intallation instructions.",
        name: "installation instructions"
    },
    {
        type: "input",
        message: "Provide the usage instructions",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Provide instructions for testing.",
        name: "test"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
