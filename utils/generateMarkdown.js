const licenseArray = [ 
  "Apache 2.0 License", 
  "Boost Software License 1.0", 
  "BSD 3-Clause License", 
  "BSD 2-Clause License", 
  "CC0", 
  "Attribution 4.0 International", 
  "Attribution-ShareAlike 4.0 International", 
  "Eclipse Public License 1.0", 
  "GNU GPL v3", 
  "The Hippocratic License 3.0", 
  "IBM Public License Version 1.0", 
  "The MIT License", 
  "Mozilla",
  "The Perl License", 
  "The Artistic License 2.0", 
  "SIL Open Font License 1.1",
  "The Unlicense",
  "The Do What the F*** You Want to Public License",
  "Zlib"];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArray[0]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === licenseArray[1]) {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === licenseArray[2]) {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === licenseArray[3]) {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else if (license === licenseArray[4]) {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license === licenseArray[5]) {
    return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"
  } else if (license === licenseArray[6]) {
    return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)"
  } else if (license === licenseArray[7]) {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (license === licenseArray[8]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === licenseArray[9]) {
    return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
  } else if (license === licenseArray[10]) {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } else if (license === licenseArray[11]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === licenseArray[12]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license === licenseArray[13]) {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  } else if (license === licenseArray[14]) {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  } else if (license === licenseArray[15]) {
    return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
  } else if (license === licenseArray[16]) {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else if (license === licenseArray[17]) {
    return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  } else if (license === licenseArray[18]) {
    return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArray[0]) {
    return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === licenseArray[1]) {
    return `[${licenseArray[1]}](https://www.boost.org/LICENSE_1_0.txt)`
  }
  else if (license === licenseArray[2]) {
    return `[${licenseArray[2]}](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license === licenseArray[3]) {
    return `[${licenseArray[3]}](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === licenseArray[4]) {
    return `[${licenseArray[4]}](http://creativecommons.org/publicdomain/zero/1.0/)`
  }
  else if (license === licenseArray[5]) {
    return `[${licenseArray[5]}](https://creativecommons.org/licenses/by/4.0/)`
  }
  else if (license === licenseArray[6]) {
    return `[${licenseArray[6]}](https://creativecommons.org/licenses/by-sa/4.0/)`
  }
  else if (license === licenseArray[7]) {
    return `[${licenseArray[7]}](https://opensource.org/licenses/EPL-1.0)`
  }
  else if (license === licenseArray[8]) {
    return `[${licenseArray[8]}](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === licenseArray[9]) {
    return `[${licenseArray[9]}](https://firstdonoharm.dev)`
  }
  else if (license === licenseArray[10]) {
    return `[${licenseArray[10]}](https://opensource.org/licenses/IPL-1.0)`
  }
  else if (license === licenseArray[11]) {
    return `[${licenseArray[11]}](https://opensource.org/licenses/MIT)`
  }
  else if (license === licenseArray[12]) {
    return `[${licenseArray[12]}](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === licenseArray[13]) {
    return `[${licenseArray[13]}](https://opensource.org/licenses/Artistic-2.0)`
  }
  else if (license === licenseArray[14]) {
    return `[${licenseArray[14]}](https://opensource.org/licenses/Artistic-2.0)`
  }
  else if (license === licenseArray[15]) {
    return `[${licenseArray[15]}](https://opensource.org/licenses/OFL-1.1)`
  }
  else if (license === licenseArray[16]) {
    return `[${licenseArray[16]}](http://unlicense.org/)`
  }
  else if (license === licenseArray[17]) {
    return `[${licenseArray[17]}](http://www.wtfpl.net/about/)`
  } 
  else if (license === licenseArray[18]) {
    return `[${licenseArray[18]}]((https://opensource.org/licenses/Zlib)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArray[0]) {
    return `Click here to read ${licenseArray[0]}`
  } 
  else if (license === licenseArray[1]) {
    return `Click here to read ${licenseArray[1]}`
  }
  else if (license === licenseArray[2]) {
    return `Click here to read ${licenseArray[2]}`
  }
  else if (license === licenseArray[3]) {
    return `Click here to read ${licenseArray[3]}`
  }
  else if (license === licenseArray[4]) {
    return `Click here to read ${licenseArray[4]}`
  }
  else if (license === licenseArray[5]) {
    return `Click here to read ${licenseArray[5]}`
  }
  else if (license === licenseArray[6]) {
    return `Click here to read ${licenseArray[6]}`
  }
  else if (license === licenseArray[7]) {
    return `Click here to read ${licenseArray[7]}`
  }
  else if (license === licenseArray[8]) {
    return `Click here to read ${licenseArray[8]}`
  }
  else if (license === licenseArray[9]) {
    return `Click here to read ${licenseArray[9]}`
  }
  else if (license === licenseArray[10]) {
    return `Click here to read ${licenseArray[10]}`
  }
  else if (license === licenseArray[11]) {
    return `Click here to read ${licenseArray[11]}`
  }
  else if (license === licenseArray[12]) {
    return `Click here to read ${licenseArray[12]}`
  }
  else if (license === licenseArray[13]) {
    return `Click here to read ${licenseArray[13]}`
  }
  else if (license === licenseArray[14]) {
    return `Click here to read ${licenseArray[14]}`
  }
  else if (license === licenseArray[15]) {
    return `Click here to read ${licenseArray[15]}`
  }
  else if (license === licenseArray[16]) {
    return `Click here to read ${licenseArray[16]}`
  }
  else if (license === licenseArray[17]) {
    return `Click here to read ${licenseArray[17]}`
  }
  else if (license === licenseArray[18]) {
    return `Click here to read ${licenseArray[18]}`
  }
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.license)}<br />
  To read more on the license, ${renderLicenseLink(data.license)}

  ## Tests
  ${data.tests}
  
  # Questions

  ## GitHub: 
  Account Name: ${data.githubUsername}<br /> 
  Link: ${data.githubLink}

  ## Email Address: 
  ${data.email}


`;
}

module.exports = generateMarkdown;
