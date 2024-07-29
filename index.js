// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
// TODO: Create an array of questions for user input

const questions = [
  inquirer
    .prompt([
      {
        type: "",
        name: "title",
        message: "What is the name of your project ?",
      },
      {
        type: "input",
        name: "motivation",
        message: "What was your motivation?",
      },
      {
        type: "input",
        name: "reason",
        message: "Why did you build this project?",
      },
      {
        type: "input",
        name: "solved",
        message: "What problem does it solve?",
      },
      {
        type: "input",
        name: "learn",
        message: "What did you learn?",
      },
      {
        type:"input",
        name: "install",
        message:"What are the steps required to install your project?"
      },
      {
        type: "input",
        name: "usage",
        message: "What is the Usage of your project?",
      },
      {
        type: "input",
        name: "features",
        message: "what are the features you use for this project?",
      },
      {
        type: "input",
        name: "credits",
        message:
          "list the name of the collaborators with link to thier GitHub profiles",
      },
    ])
    .then((readmeContent) => {
      let readMe = `
# ${readmeContent.title}
    
## Description
 ${readmeContent.motivation},${readmeContent.reason},${readmeContent.solved},${readmeContent.learn}

 ## Installation 
 ${readmeContent.install}

## Usage
 ${readmeContent.usage}

## Features
${readmeContent.features}

## Credits
${readmeContent.credits}`;

      fs.writeFile("./README/README.md", readMe, (err) =>
        err ? console.error(err) : console.log("saved")
      );
    }),
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // questions();
  // writeToFile();
}

// Function call to initialize app

init();
