
# CS3203-GroupJ-UnitTests

This project demonstrates a simple **unit test** using **Node.js** and **Jest**.

---

## Overview

- **CalendarEvent.js** — main class definition  
- **CalendarEvent.test.js** — Jest test suite verifying functionality  
- **package.json** — configuration file for scripts and dependencies  

---

## Prerequisites

Before running the tests, make sure you have **Node.js** and **npm** installed.

- Download and install Node.js here:  
   [https://nodejs.org/]

After installation, **restart VS Code** (or your editor) to ensure everything is detected properly.

Verify Node.js and npm are available by running:
```bash
node -v
npm -v
````

Both commands should print version numbers.

---

## Cloning the Repository

Clone the repository onto your local machine:

```bash
git clone https://github.com/GroupJ-CS3202/CS3203-GroupJ-UnitTests/tree/Cayden's-unit-test
```
Then navigate into the project folder:

```bash
cd CS3203-GroupJ-UnitTests
```

---

## Setup

Initialize npm (if not already initialized):

```bash
npm init -y
```

Install **Jest**:

```bash
npm install jest --save-dev
```

---

## Configure package.json

Open your `package.json` and make sure it includes this script:

```json
"scripts": {
  "test": "jest"
}
```

---

## Running Tests

To execute all tests, run:

```bash
npm test
```

You should see output similar to:

```
PASS  ./CalendarEvent.test.js
✓ should create a CalendarEvent object correctly
✓ should calculate duration in days
✓ should return true if event is ongoing
✓ should return false if event is not ongoing
✓ should validate date intervals correctly
```

---

## Troubleshooting

### Windows PowerShell Error

If you see:

```
Running scripts is disabled on this system
```

Run this command **in PowerShell as Administrator**:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Then re-run:

```bash
npm test
```

**Author:** Cayden Sargent
**Course:** Software Engineering Unit Testing Project

