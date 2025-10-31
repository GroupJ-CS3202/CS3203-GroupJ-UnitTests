const validateOrg = require('./validateOrg');

test("Valid Call", () =>{   
    expect(validateOrg("OU Robotics", "We make robots", "John Smith")).toBe(true);
});

test("Invalid Org Name", () => {
    expect(validateOrg("", "testDescription", "John")).toBe(false);
    overflowName = "a".repeat(101);
    expect(validateOrg(overflowName, "testDescription", "John")).toBe(false);
});

test("Invalid Org Description", () => {
    expect(validateOrg("testName", "", "John")).toBe(false);
    overflowDesc = "a".repeat(1001);
    expect(validateOrg("testName", overflowDesc, "John")).toBe(false);
});

test("Invalid Org President Name", () => {
    expect(validateOrg("testName", "testDescription", "")).toBe(false);
    overflowPres = "a".repeat(51);
    expect(validateOrg("testName", "testDescription", overflowPres)).toBe(false);
    expect(validateOrg("testName", "testDescription", "John-Smith")).toBe(false);
    expect(validateOrg("testName", "testDescription", "John/Smith")).toBe(false);
});

