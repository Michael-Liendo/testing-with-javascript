test('test obj', () => {
  const data = {
    name: 'Michael',
  };

  data.lastName = 'Liendo';

  expect(data).toEqual({ name: 'Michael', lastName: 'Liendo' });
});

test('null ', () => {
  const data = null;

  expect(data).toBeNull();
  expect(data).toBeDefined();
});
