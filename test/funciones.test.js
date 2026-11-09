import {describe, it, expect} from 'vitest';
import {fibonacci, esPinValido} from '../src/funciones.js';

describe('Función fibonacci', () => {
    it('Si n es menor o igual a 0 se lanzará una excepción RangeError', () => {
        expect( () => fibonacci(-1)).toThrow(RangeError);
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

describe('Función esPinValido', () => {
    it('No debe ser null ni undefined', () => {
        expect(esPinValido(null)).toBe(false);
        expect(esPinValido(undefined)).toBe(false);
    });
    it('No debe estar vacío', () => {
        expect(esPinValido(' ')).toBe(false);
    });
    it('Solo debe contener dígitos', () => {
        expect(esPinValido('12ab')).toBe(false);
        expect(esPinValido('abcd')).toBe(false);
        expect(esPinValido(' 123')).toBe(false);
    });
    it('No pueden ser todos los números iguales', () => {
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('222222')).toBe(false);
    });
    it('Está formado por dígitos diferentes y cumple con la longitud', () => {
        expect(esPinValido('1234')).toBe(false);
        expect(esPinValido('123456')).toBe(false);
    });
})