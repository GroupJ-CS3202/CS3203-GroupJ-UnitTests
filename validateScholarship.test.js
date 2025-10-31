const  validateScholarship  = require('./validateScholarhship');

test("Valid input", () => {
    expect(validateScholarship("exampletitle", "exampledescription", "https://www.google.com")).toBe(true);
});
test("Invalid Title", () => {
    expect(validateScholarship("", "exampledescription", "https://www.google.com")).toBe(false);
    maxedOutTitleString = "abc".repeat(50)
    expect(validateScholarship(maxedOutTitleString, "exampledescription", "https://www.google.com")).toBe(false);
});
test("Invalid Description", () => {
    expect(validateScholarship("title", "", "https://www.google.com")).toBe(false);
    maxedOutDescriptionString = "abc".repeat(1250)
    expect(validateScholarship("title", maxedOutDescriptionString, "https://www.google.com")).toBe(false);
});
test("Invalid URL", () => {
    expect(validateScholarship("title", "exampledescription", "")).toBe(false);
    expect(validateScholarship("title", "exampledescription", "thisisnotalink")).toBe(false);
});