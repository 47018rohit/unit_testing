const calculator = require('./calculator');

test('add two numbers', () => {
    expect(calculator().add(3,5)).toBe(8);
})
test('subtract two numbers', () => {
    expect(calculator().subtract(5,55)).toBe(-50);
})
test('multiply two numbers', () => {
    expect(calculator().multiply(10,5)).toBe(50);
})
test('divide two numbers', () => {
    expect(calculator().divide(60,5)).toBe(12);
})