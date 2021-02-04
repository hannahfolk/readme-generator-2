const renderLicenseBadge = (license) => {
  if (license === "None") {
    return "";
  } else {
    return encodeURIComponent(
      `https://img.shields.io/badge/License-${license}-green`
    );
  }
};

const renderLicenseLink = (license) => {
  let link = "";
  switch (license) {
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "APACHE 2.0":
      link = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "GPL 3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "BSD 3":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      link = "";
  }
  return link;
};

const renderLicenseSection = (license) => {
  return `This project uses the following license: [${license}](${renderLicenseLink(
    license
  )}).`;
};

const generateMarkdown = (data) => {
  return `# ${data.title}

![${data.license} License](${renderLicenseBadge(data.license)})

## Table of Contents

* [About The Project](#about-the-project)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)
* [License](#license)

## About the Project

${data.description}

## Installation

To install ${data.title}, follow these steps:

\`\`\`
${data.installation}
\`\`\`

## Usage

To use ${data.title}, follow these steps:

${data.usage}

## Contributing

To contribute to ${data.title}, follow these steps:

${data.contributing}

## Tests

To run tests, follow these steps:

\`\`\`
${data.tests}
\`\`\`

## Contact

If you want to contact me you can reach me at ${data.email}.

## License

${renderLicenseSection(data.license)}

`;
};

module.exports = generateMarkdown;
