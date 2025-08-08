// Pruebas unitarias con Jasmine y Karma para la clase Calculator
// Autor: Estudiante Hernández
// Aplicando el patrón AAA (Arrange, Act, Assert)

import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  // Configuración inicial usando beforeEach()
  beforeEach(() => {
    // ARRANGE: Preparar el objeto para las pruebas
    calculator = new Calculator();
  });

  // Prueba básica de creación de instancia
  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });

  // === PRUEBAS PARA EL MÉTODO MULTIPLY ===
  describe('multiply method', () => {
    it('should multiply two positive numbers correctly', () => {
      // ARRANGE: Los datos ya están preparados en beforeEach
      const a = 5;
      const b = 3;
      const expected = 15;

      // ACT: Ejecutar el método a probar
      const result = calculator.multiply(a, b);

      // ASSERT: Verificar el resultado
      expect(result).toBe(expected);
      expect(result).toEqual(15);
    });

    it('should handle multiplication by zero', () => {
      // ARRANGE
      const a = 7;
      const b = 0;
      const expected = 0;

      // ACT
      const result = calculator.multiply(a, b);

      // ASSERT
      expect(result).toBe(expected);
    });

    it('should handle negative numbers', () => {
      // ARRANGE
      const a = -4;
      const b = 6;
      const expected = -24;

      // ACT
      const result = calculator.multiply(a, b);

      // ASSERT
      expect(result).toBe(expected);
    });

    it('should handle decimal numbers', () => {
      // ARRANGE
      const a = 2.5;
      const b = 4;
      const expected = 10;

      // ACT
      const result = calculator.multiply(a, b);

      // ASSERT
      expect(result).toBeCloseTo(expected);
    });
  });

  // === PRUEBAS PARA EL MÉTODO DIVIDE ===
  describe('divide method', () => {
    it('should divide two numbers correctly', () => {
      // ARRANGE
      const a = 10;
      const b = 2;
      const expected = 5;

      // ACT
      const result = calculator.divide(a, b);

      // ASSERT
      expect(result).toBe(expected);
    });

    it('should return null when dividing by zero', () => {
      // ARRANGE
      const a = 10;
      const b = 0;

      // ACT
      const result = calculator.divide(a, b);

      // ASSERT - Usando diferentes matchers de Jasmine
      expect(result).toBeNull();
      expect(result).not.toBeUndefined(); // null está definido, pero no es undefined
      expect(result).toBeFalsy();
    });

    it('should handle negative division', () => {
      // ARRANGE
      const a = -15;
      const b = 3;
      const expected = -5;

      // ACT
      const result = calculator.divide(a, b);

      // ASSERT
      expect(result).toBe(expected);
    });

    it('should handle decimal division', () => {
      // ARRANGE
      const a = 7;
      const b = 3;

      // ACT
      const result = calculator.divide(a, b);

      // ASSERT
      expect(result).toBeCloseTo(2.333, 2);
    });
  });

  // === PRUEBAS PARA EL MÉTODO ADD ===
  describe('add method', () => {
    it('should add two positive numbers', () => {
      // ARRANGE
      const a = 8;
      const b = 7;
      const expected = 15;

      // ACT
      const result = calculator.add(a, b);

      // ASSERT
      expect(result).toBe(expected);
      expect(result).toBeGreaterThan(14);
      expect(result).toBeLessThan(16);
    });

    it('should handle negative numbers addition', () => {
      // ARRANGE
      const a = -5;
      const b = 3;
      const expected = -2;

      // ACT
      const result = calculator.add(a, b);

      // ASSERT
      expect(result).toBe(expected);
    });
  });

  // === PRUEBAS PARA EL MÉTODO SUBTRACT ===
  describe('subtract method', () => {
    it('should subtract two numbers correctly', () => {
      // ARRANGE
      const a = 15;
      const b = 6;
      const expected = 9;

      // ACT
      const result = calculator.subtract(a, b);

      // ASSERT
      expect(result).toBe(expected);
    });

    it('should handle negative result', () => {
      // ARRANGE
      const a = 5;
      const b = 10;
      const expected = -5;

      // ACT
      const result = calculator.subtract(a, b);

      // ASSERT
      expect(result).toBe(expected);
      expect(result).toBeLessThan(0);
    });
  });

  // === PRUEBAS PARA CASOS EDGE Y MATCHERS ADICIONALES ===
  describe('Edge cases and additional matchers', () => {
    it('should demonstrate various Jasmine matchers', () => {
      // ARRANGE
      const result = calculator.add(5, 5);

      // ASSERT - Demostrando diferentes matchers de Jasmine
      expect(result).toBeDefined();
      expect(result).not.toBeNull();
      expect(result).not.toBeUndefined();
      expect(result).toBeTruthy();
      expect(result).toEqual(10);
      expect(result).toBeInstanceOf(Number);
      expect(typeof result).toBe('number');
    });

    it('should handle very large numbers', () => {
      // ARRANGE
      const a = 999999999;
      const b = 2;

      // ACT
      const result = calculator.multiply(a, b);

      // ASSERT
      expect(result).toBe(1999999998);
      expect(result).toBeGreaterThan(1000000000);
    });

    it('should handle floating point precision', () => {
      // ARRANGE
      const a = 0.1;
      const b = 0.2;

      // ACT
      const result = calculator.add(a, b);

      // ASSERT - Usando toBeCloseTo para números con punto flotante
      expect(result).toBeCloseTo(0.3, 1);
    });
  });
});
