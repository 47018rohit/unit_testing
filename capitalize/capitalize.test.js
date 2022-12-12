const capitalise = require("./capitalize")

test('capitalise the string', () => {

    expect(capitalise('hello')).toBe('Hello');
})