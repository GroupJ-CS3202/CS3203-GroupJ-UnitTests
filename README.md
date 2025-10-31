# CS3203-ChihYu-UnitTests
This branch contains the unit tests for the GroupJ project. The unit tested here represents a financial part of the project, focusing only on the components we want to verify. The tests ensure the correctness of financial calculations, data tracking, and React component rendering. And Node.js and Jest are used for the test. 

# Folder Description
This folder corresponds to the financial page of the project. It allows users to:  
- Modify income, budget, and expenses as input
- Track total expenses and remaining budget  
The main goal of this module is to help users monitor their financial situation effectively.

# Unit Test Overview
The unit tests are designed to verify the correctness of following :  
1. React Compenent(App)
- Dashboard renders key elements correctly: TotalExpense, totalIncome, totalLeft
- Add button (+) is visible
3. Financial Tracker  
- Initialization: Correct budget, spending, and income arrays
- Mathematical functions (e.g., totalSpent, remainingBudget)
- Tracking and updating financial records

# Getting start
## Dependencies and prequisites
Node.js (comes with npm) or Yarn (https://nodejs.org/en/download)  
React Naive CLI (https://reactnative.dev/docs/getting-started)   
- If you need to install above dependencies, restart VS Code (or your editor) to ensure everything is detected properly.
- Verify Node.js and npm:
```bash
node -v
npm -v
```
Both commands should print version numbers.

## Installation
1. Clone the Repository  
```bash 
git clone https://github.com/GroupJ-CS3202/CS3203-GroupJ-UnitTests
cd CS3203-GroupJ-UnitTests/financial-tracker
```

2. (Optional) Use VS Code as the development and testing platform
3. Initialize npm (if not already initialized)
```bash
npm init -y
```
4. Install dependencies
```bash
npm install
```
4. Install Jest for testing
```bash
npm install jest --save-dev
```


## Running Tests
Step 1: Navigate to the correct folder in the terminal  
         Go to \financial-tracker folder in terminal  
Step 2: Run following commands  
```bash
npm test
```
Step 3: Follow instruction  
         - press 'a' to run all test  
         - press 'q' to quit mode    

## (optional) Run the react-native web page
Note: This is not required for the unit test assignment and may not be fully functional.  
Step 1:  Make sure in the correct folder   
         Go to \financial-tracker folder in terminal  
Step 2:　Start the web page by running the following commands
```bash
npm start
```
- New page pop up (but it may not working now casue it is not the part of assignment)
Step 3: Stops the React server completely  
        Press Ctrl + C in the terminal  



Author: ChihYu
Course: Software Engineering Unit Testing Project
