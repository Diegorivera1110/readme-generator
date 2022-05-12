// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    }, 
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "description",
        message: "What's the description of your project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, function(error) {
        if (error) {
            throw error
        } 
        console.log("File created");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers)
        // console.log(answers.email)

        var readmeTemplate = generateMarkdown(answers)
        console.log(readmeTemplate);

        writeToFile(readmeTemplate)
    })
}

// Function call to initialize app
init();


// creating a list in inquire