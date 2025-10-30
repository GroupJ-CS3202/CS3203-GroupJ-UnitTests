const validateUsername = require('../validateUsername');

describe('validateUsername', () => 
    {
  test('valid usernames', () => 
    {
    expect(validateUsername('User123')).toBe(true);
    expect(validateUsername('aB3_!name')).toBe(true);
    expect(validateUsername('John.Doe12')).toBe(true);
    expect(validateUsername('cool_user')).toBe(true);
  });

  test('invalid due to length', () => 
    {
    expect(validateUsername('abc')).toBe(false); // too short
    expect(validateUsername('thisUsernameIsWayTooLong123')).toBe(false);
  });

  test('invalid starting with special character', () => 
    {
    expect(validateUsername('_User')).toBe(false);
    expect(validateUsername('.name')).toBe(false);
    expect(validateUsername('!hello')).toBe(false);
  });

  test('invalid because it contains a hyphen', () => 
    {
    expect(validateUsername('user-name')).toBe(false);
  });

  test('invalid due to completely invalid characters', () => 
    {
    expect(validateUsername('user name')).toBe(false); // space not allowed
  });
});
