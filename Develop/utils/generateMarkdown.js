// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  
  return `# ${answers.title}
  ![badge](https://img.shields.io/badge/license-${answers.license}-informational)

  ## Description: 
  ${answers.description}

  ## Table of Contents: 
  * ### [Installation](#installation)
  * ### [Usage](#usage)
  * ### [Contributors](#contributors)
  * ### [Tests](#tests)
  * ### [Questions](#questions)

---

  ## Installation:
  #### ${answers.installation}

  ## Usage:
  #### ${answers.usage}

  ## Contributors:
  #### ${answers.contributors}

  ## Tests:
  #### ${answers.tests}

  ## License:
  #### More on the ${answers.license}
  https://choosealicense.com/licenses/${answers.confirm}

  ---

  ## Questions:

  ### GitHub: 
  #### [GitHub Page](https://github.com/${answers.github})

  ### Contact Me:
  #### Reach me at ${answers.email}
`;
}

module.exports = generateMarkdown;
