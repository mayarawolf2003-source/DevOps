const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

test('Soma de 5 + 5 deve ser 10', () => {
    expect(somar(5, 5)).toBe(10);
});

test('Subtração de 20 - 8 deve ser 12', () => {
    expect(subtrair(20, 8)).toBe(12);
});

test('Multiplicação de 4 * 5 deve ser 20', () => {
    expect(multiplicar(4, 5)).toBe(20);
});

test('Divisão de 100 por 4 deve ser 25', () => {
    expect(dividir(100, 4)).toBe(25);
});

test('Divisão por zero deve ser tratada ou retornar Infinito', () => {
    expect(dividir(10, 0)).toBe(Infinity);
});
