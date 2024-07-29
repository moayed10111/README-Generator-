import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// An array of questions for user input

const questions = [
  inquirer
    .prompt([
      {
        type: "input",
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
        type: "input",
        name: "install",
        message: "What are the steps required to install your project?",
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
      {
        type: "input",
        name: "email",
        message: "Please enter your email"
      },{
        type:"input",
        name:"gitHub",
        message:"Please add your gitHub Username"
      },
      {
        type: "list",
        name: "badge",
        message:
          "Please enter the name of the programing language you used for this project",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "Mozilla", "None"],
      },
    ])
    .then((readmeContent) => {
      fs.writeFile(
        "./README/README.md",
        generateMarkdown(readmeContent),
        (err) => (err ? console.error(err) : console.log("saved"))
      );
    }),
];

