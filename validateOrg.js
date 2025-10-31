function validateOrg(name, description, president) {
    nameString = typeof name === "string";
    descString = typeof description === "string";
    presidentString = typeof president === "string";

    if (!nameString || !descString || !presidentString) {
        return false;
    }

    const maxNameSize = 100;
    const maxDescSize = 1000;
    const maxPresNameSize = 50;

    if (maxNameSize < name.length || name.length < 1 || name.includes("-")) {
        return false;
    }

    if (maxDescSize < description.length || description.length < 1) {
        return false;
    }

    if (maxPresNameSize < president.length || president.length < 1) {
        return false;
    }

    if (president.includes('-') || president.includes('/')) {
        return false;
    }

    return true;
}
module.exports = validateOrg;