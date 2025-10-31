# CS3203-GroupJ-UnitTests

## Welcome to Group J's Unit Tests!
To validate unit tests, navigate to the correct branch and clone the repository.

## What code is in this branch
The code included in this branch consists of a function, validateScholarship, which ensures that a scholarship with a given title, description, and url contains a non-empty title, description, and url. The title has a character limit of 50 and the description has a characater limit of 1250 (250 words). The url also must be a valid url as this would be the url students use to apply to the scholarship. This function has a corresponding unit tests which test that this function returns true for valid input, and false if given an invalid title, description, or url.


## Dependencies
Our unit tests are written in JavaScript, so you will need to download the following to run them:
- Node.js (https://nodejs.org/en/download)
- Jest (https://jestjs.io/docs/getting-started)

## To run tests:
- Select correct branch
- git clone repository
- cd into the proper directory in terminal
- install Node.js/npm and Jest
    - follow steps in above link to Node.js downloads page to properly install Node.js on your system
    - once npm is installed, type "npm install --save-dev jest" into your terminal
- run jest tests by typing "npm test" into terminal
- verify test results


### Before Testing:
- Download required dependencies
- Make sure you are on the correct branch
- Ensure that jest and node.js/npm are both working
