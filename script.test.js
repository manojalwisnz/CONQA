const subTotal = require('./script');

test('Multiplies 100 * 5 to equal 500', () => {
    expect(subTotal(100,5)).toBe(500);
})

test('Multiplies 10 * 5 to equal 50', () => {
    expect(subTotal(10,5)).toBe(50);
})

test('Multiplies 50 * 5 to equal 200', () => {
    expect(subTotal(50,5)).toBe(200);
})