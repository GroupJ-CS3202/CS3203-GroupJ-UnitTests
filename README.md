# CS3203-GroupJ-UnitTests

This project demonstrates a unit test using 'Node.js' and 'Jest'

---

##Overview

- CalenderEvent.js - main class definition
- CalendarEvent.test.js - Jest test suite verifying functionality 
- package.json - config for scripts and such

---

##Prerequisites

Before running these tests we need to ensure two things are installed: Node.js and Npm

Node.js can be installed here: https://nodejs.org/

Verify within the directory path that both npm and Node.js are present with:

node -v

npm -v

NOTE: AFTER INSTALLING Node.js PLEASE RESTART VS CODE(or your equivalent editor)
--- 

Next, clone the repo:

Use the command: git clone https://github.com/GroupJ-CS3202/CS3203-GroupJ-UnitTests/tree/Cayden's-unit-test

---

After cloning the repo onto your machine, we need to ensure npm is initialized within the project directory.

npm init -y

Also ensure Jest is properly installed:

npm install jest --save-dev

---

Next, go into the package.json, and ensure the following line exist:

"scripts": {
  "test": "jest"
}

---

Finally, to execute all test use: 

npm test

##Troubleshooting

ISSUE 1: On Windows, if you get the error "Running scripts is disabled on this system"

Run this as an admin in your powershell window: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Then retry: npm test
