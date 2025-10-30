function validateUsername(username) 
{
  // Check length
  if (username.length < 4 || username.length > 16) 
    {
    return false;
  }

  // Disallow starting with special character
  if (!/^[A-Za-z0-9]/.test(username)) 
    {
    return false;
  }

  // Disallow hyphens
  if (username.includes('-')) 
    {
    return false;
  }

  // Allow letters, numbers, and other special characters except '-'
  // (We already handled start and '-')
  if (!/^[A-Za-z0-9][A-Za-z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~]*$/.test(username)) 
    {
    return false;
  }

  return true;
}

module.exports = validateUsername;
