import {describe, it, expect} from 'vitest';
import {fibonacci} from '../src/funciones.js';

describe('Función fibonacci', () => {
    it('Si n es menor o igual a 0 se lanzará una excepción RangeError', () => {
        expect(fibonacci(-1)).toThrow(RangeError);
    });

    it('Si n es igual a 0 debe devolver 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('Si n es igual a 1 debe devolver 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('Para n >= 2 f(n) = f(n - 1) + f(n - 2)', () => {
        expect(fibonacci(2)).toBe(1);
        expect(fibonacci(3)).toBe(2);
        expect(fibonacci(4)).toBe(3);
        expect(fibonacci(5)).toBe(5);
        expect(fibonacci(6)).toBe(8);
    });
})