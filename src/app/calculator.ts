// Clase Calculator para realizar operaciones matemáticas básicas
// Autor: Estudiante Hernández
export class Calculator {
  
  /**
   * Método para multiplicar dos números
   * @param a - Primer número a multiplicar
   * @param b - Segundo número a multiplicar
   * @returns El resultado de la multiplicación
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Método para dividir dos números
   * @param a - Dividendo
   * @param b - Divisor
   * @returns El resultado de la división o null si el divisor es 0
   */
  divide(a: number, b: number): number | null {
    // Manejo del caso especial de división por cero
    if (b === 0) {
      return null;
    }
    return a / b;
  }

  /**
   * Método para sumar dos números
   * @param a - Primer número a sumar
   * @param b - Segundo número a sumar
   * @returns El resultado de la suma
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Método para restar dos números
   * @param a - Minuendo
   * @param b - Sustraendo
   * @returns El resultado de la resta
   */
  subtract(a: number, b: number): number {
    return a - b;
  }
}
