// Pruebas unitarias manuales con JavaScript siguiendo TDD
// Autor: Estudiante Hernández

import { Calculator } from './calculator';

// PASO 1 TDD: Crear la prueba (RED)
console.log('=== PRUEBAS MANUALES TDD - CALCULATOR ===');

// Crear una instancia de la clase Calculator
const calculator = new Calculator();

// === PRUEBA 1: Método multiply() ===
console.log('\n--- PRUEBA 1: Método multiply() ---');

// Test 1.1: Multiplicación básica
const resultadoMultiply = calculator.multiply(5, 3);
console.log(`Resultado de 5 * 3: ${resultadoMultiply}`);

// Verificación manual usando condicionales
if (resultadoMultiply === 15) {
  console.log('✅ PRUEBA PASADA: La multiplicación 5 * 3 = 15 es correcta');
} else {
  console.log('❌ PRUEBA FALLIDA: La multiplicación 5 * 3 no es igual a 15');
}

// Test 1.2: Multiplicación por cero
const multiplyPorCero = calculator.multiply(7, 0);
if (multiplyPorCero === 0) {
  console.log('✅ PRUEBA PASADA: La multiplicación por cero es correcta');
} else {
  console.log('❌ PRUEBA FALLIDA: La multiplicación por cero no es correcta');
}

// === PRUEBA 2: Método divide() ===
console.log('\n--- PRUEBA 2: Método divide() ---');

// Test 2.1: División básica
const resultadoDivide = calculator.divide(10, 2);
console.log(`Resultado de 10 / 2: ${resultadoDivide}`);

if (resultadoDivide === 5) {
  console.log('✅ PRUEBA PASADA: La división 10 / 2 = 5 es correcta');
} else {
  console.log('❌ PRUEBA FALLIDA: La división 10 / 2 no es igual a 5');
}

// Test 2.2: División por cero (REFACTORIZACIÓN TDD)
const divisionPorCero = calculator.divide(10, 0);
console.log(`Resultado de 10 / 0: ${divisionPorCero}`);

if (divisionPorCero === null) {
  console.log('✅ PRUEBA PASADA: La división por cero retorna null correctamente');
} else {
  console.log('❌ PRUEBA FALLIDA: La división por cero no maneja el error correctamente');
}

// === PRUEBA 3: Método add() ===
console.log('\n--- PRUEBA 3: Método add() ---');

const resultadoAdd = calculator.add(8, 7);
console.log(`Resultado de 8 + 7: ${resultadoAdd}`);

if (resultadoAdd === 15) {
  console.log('✅ PRUEBA PASADA: La suma 8 + 7 = 15 es correcta');
} else {
  console.log('❌ PRUEBA FALLIDA: La suma 8 + 7 no es igual a 15');
}

// === PRUEBA 4: Método subtract() ===
console.log('\n--- PRUEBA 4: Método subtract() ---');

const resultadoSubtract = calculator.subtract(15, 6);
console.log(`Resultado de 15 - 6: ${resultadoSubtract}`);

if (resultadoSubtract === 9) {
  console.log('✅ PRUEBA PASADA: La resta 15 - 6 = 9 es correcta');
} else {
  console.log('❌ PRUEBA FALLIDA: La resta 15 - 6 no es igual a 9');
}

// === RESUMEN DE PRUEBAS ===
console.log('\n=== RESUMEN DE PRUEBAS MANUALES ===');
console.log('Siguiendo el ciclo TDD (Test-Driven Development):');
console.log('1. RED: Escribir pruebas que fallan');
console.log('2. GREEN: Escribir el mínimo código para que pasen');
console.log('3. REFACTOR: Mejorar el código manteniendo las pruebas');
console.log('');
console.log('✅ Implementación del mantra de las 3 As:');
console.log('   - ARRANGE: Preparar los datos y objetos necesarios');
console.log('   - ACT: Ejecutar el método que se está probando');
console.log('   - ASSERT: Verificar que el resultado es el esperado');
