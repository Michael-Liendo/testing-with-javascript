describe('set', () => {
  test('case (it serves for have a set of test)', () => {
    expect(1 + 1).toBe(2);
  });

  beforeAll(() => {
    console.log('I run after of run all test');
  });
});

/*
beforeAll(): se ejecuta antes de todas las pruebas.
beforeEach(): se ejecuta antes de cada prueba.
afterEach(): se ejecuta después de cada prueba.
afterAll(): se ejecuta después de todas las pruebas
Nota:
Todas estas funciones se ejecutan dentro del alcance del scope.
 */
