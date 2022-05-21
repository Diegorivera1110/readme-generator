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
        validate: projectTitle => {
            if (projectTitle) {
              return true;
            } else {
              console.log('Please enter your Project Title.');
              return false;
            }
          }
    }, 
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub username?",
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
              return true;
            } else {
              console.log('Please enter your GitHub Username.');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "githubLink",
        message: "What is the link to your GitHub?",
        validate: githubLinkInput => {
            if (githubLinkInput) {
              return true;
            } else {
              console.log('Please enter your GitHub profile link.');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email.');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "description",
        message: "What's the description of your project?",
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter your project description.');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to installing your project?",
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please enter installation steps.');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "usage",
        message: "What is your project used for?",
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please explain what your project is used for.');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "credits",
        message: "Who is everyone that contributed?",
        validate: creditsInput => {
            if (creditsInput) {
              return true;
            } else {
              console.log('Please enter who helped develop this project.');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "tests",
        message: "Enter some tests for using your code. (Optional)"
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