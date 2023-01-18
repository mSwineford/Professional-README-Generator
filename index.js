// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the projects title?",
        name: "title"
    },
    {
        type: "input",
        message: "Give the README file a discription",
        name: "description"
    },
    {
        type: "input",
        message: "Provide intallation instructions.",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide the usage instructions",
        name: "usage"
    },
    {
        type: "input",
        message: "Pick a license",
        name: "license"
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
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, error => {
            if (error){
                reject (error);
                return;
            }
            resolve({
                yes: true,
                message: "New file created"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        return generateMarkdown(answers);
    })
    .then(pageMarkdown => {
        writeToFile("./dist/README.md", pageMarkdown);
        console.log("README written.")
    })
    .catch((error) => {
        console.log(error);
    });
}

// Function call to initialize app
init();
