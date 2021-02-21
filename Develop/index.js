// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a description of your project:',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide usage information for your project:',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose license for your project:',
        choices: [
            {name: 'MIT', value: 'MIT'}, 
            {name: 'ApacheLicense2.0'},
            {name: 'TheUnlicense'}, 
            {name: 'GNUGPLv3'}, 
            {name: 'CCO1.0'}, 
            {name: 'None'},
        ],
    },
    {
        name: 'confirm',
        type: 'list',
        message: 'Please, confirm your license choice.',
        choices: [
            {name: 'MIT', value: 'MIT'}, 
            {name: 'ApacheLicense2.0', value: 'apache-2.0'},
            {name: 'TheUnlicense', value: 'unlicense'}, 
            {name: 'GNUGPLv3', value: 'gpl-3.0'}, 
            {name: 'CCO1.0', value: 'cc0-1.0'}, 
            {name: 'No License', value: 'None'},
        ],
    },
    {
        name: 'contributors',
        type: 'input',
        message: 'List contributors for this project:',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'What are your testing instructions?',
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(file, data) {
    fs.writeFileSync(file, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        let markdown = generateMarkdown(answers)
        writeToFile("newreadme.md", markdown)
    })
}

// Function call to initialize app
init();