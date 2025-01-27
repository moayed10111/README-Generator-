//Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

    default:
      return "";
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";

    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";

    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";

    case "Mozilla":
      return "https://opensource.org/licenses/MPL-2.0";

    // Add more cases for other licenses as needed
    default:
      return "";
  }
}

//Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License
  This project it licensed under [${license}](${renderLicenseLink(license)}).
  `;
}

// Function the render the license option in the table of content
function tableOfContent(license) {
  if (license === "None") {
    return "";
  }
  return `- [License](#license)`;
}
//Function that returns the Credits section of README
function renderCreditsSection(credits){
  if (credits === "" || "None"){
    return " "
  }
  return `${readmeContent.credits}`
}
// Function the render the Credits option in the table of content
function tableContentCredits(credits){
  if (credits === " " || "None"){
    return ""
  }
  return "[Credits](#credits)"
}


// Function to generate markdown for README
function generateMarkdown(data) {
  let readmeContent = data;

  return `# ${data.title}
  ${renderLicenseBadge(readmeContent.badge)}

  ## Description
 ${readmeContent.motivation}. ${readmeContent.reason}. 
 ${readmeContent.solved}. ${readmeContent.learn}.

  ## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
${tableContentCredits(readmeContent.credits)}
${tableOfContent(readmeContent.badge)}

 ## Installation 
 ${readmeContent.install}

## Usage
 ${readmeContent.usage}

## Features
${readmeContent.features}

${renderCreditsSection(readmeContent.credits)}

${renderLicenseSection(readmeContent.badge)}

## Questions
If you have any questions or would like to git in touch, please feel free to contact
me via email or visit my GitHub profile.

-Email: ${readmeContent.email}

-GitHub: https://github.com/${readmeContent.gitHub}
`;
}

export default generateMarkdown;
