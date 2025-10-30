# CS3203-GroupJ-UnitTests

# Username Validation Unit Test (JavaScript + Jest)
Hello and welcome to the unit test I have created with the "slight" help of ChatGPT. Basically, what this test, well, tests is a simple JavaScript function that validates usernames according to specific rules, using Jest-based unit test. 

## Prerequisites/Installation
So for the unlucky person that got me as their peer review thing, you have to make sure you have:

- [Node.js] (https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node)

and you can check if they're installed by running (For both windows and mac):

**node -v**

**npm -v**

After you gotten them both, clone or download this project. I'm pretty sure the structure of the files should be unchanged, but just incase, the 3 important files should be structured like this:

**project/**

**├── validateUsername.js**

**├── tests/**

**│     └── validateUsername.test.js**

**└── package.json**

But for the last bits of installing, you need to run the following to install the dependencies:

**npm install**

**npm install --save-dev jest**

and then add this to the package.json (if not already there):

**"scripts": {**

  **"test": "jest"**

**}**

And now it's ready to run :D

## Running the test
So now that you installed everything (I hope), you just have to open the terminal and just type in:

**npm test**

and I hope you can see that the test passed :p