function validateScholarship(title, description, url) {
    titleIsString = typeof title === "string";
    descriptionIsString = typeof description === "string";
    urlIsString = typeof url === "string";

    if (!titleIsString || !descriptionIsString || !urlIsString) {
        return false;
    }
    // Variables to measure character limits
    const maxTitleLength = 50;
    const maxDescriptionLength = 1250;
    // Check that title and description are filled in and not over the character limits
    if(title.length < 1 || title.length > maxTitleLength || description.length < 1 || description.length > maxDescriptionLength) {
        return false;
    }

    // Check if url is valid this is the final check
    try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
    
}
module.exports = validateScholarship;