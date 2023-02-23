const Person = require('./06-person');

describe('test for person', () => {
  test('should return down', () => {
    const person = new Person('Michael', '60', 1.9);

    const imc = person.calcIMC();

    expect(imc).toBe('down');
  });
});
