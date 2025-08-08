// Pruebas unitarias simplificadas para demostrar los conceptos de TDD
// Autor: Estudiante Hernández
// Aplicando las 3 As: Arrange, Act, Assert

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

describe('AppComponent - Pruebas Simplificadas', () => {
  let component: AppComponent;
  let fixture: any;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
  });

  // === CASO DE PRUEBA 1: PROPIEDADES BÁSICAS DEL COMPONENTE ===
  describe('Caso de Prueba 1: Propiedades básicas del componente', () => {
    it('should create the component', () => {
      // ARRANGE & ACT: El componente ya se crea en beforeEach
      
      // ASSERT: Verificar que el componente existe
      expect(component).toBeTruthy();
    });

    it('should have correct initial property values', () => {
      // ARRANGE: Los valores ya están establecidos
      
      // ACT: No necesitamos hacer nada, solo verificar los valores
      
      // ASSERT: Verificar que las propiedades tienen los valores correctos
      expect(component.title).toBe('proyectoTestingHernandez');
      expect(component.estudiante).toBe('Estudiante Hernández');
      expect(component.curso).toBe('Programación Web');
      expect(component.isVisible).toBe(true);
      expect(component.contador).toBe(0);
      expect(component.listaNumeros).toEqual([1, 2, 3, 4, 5]);
    });
  });

  // === CASO DE PRUEBA 2: MÉTODOS DEL COMPONENTE ===
  describe('Caso de Prueba 2: Métodos del componente', () => {
    it('should increment counter correctly', () => {
      // ARRANGE: Establecer estado inicial
      component.contador = 5;
      
      // ACT: Ejecutar el método
      component.incrementarContador();
      
      // ASSERT: Verificar el resultado
      expect(component.contador).toBe(6);
    });

    it('should decrement counter correctly', () => {
      // ARRANGE
      component.contador = 5;
      
      // ACT
      component.decrementarContador();
      
      // ASSERT
      expect(component.contador).toBe(4);
    });

    it('should reset counter to zero', () => {
      // ARRANGE
      component.contador = 10;
      
      // ACT
      component.resetearContador();
      
      // ASSERT
      expect(component.contador).toBe(0);
    });

    it('should toggle visibility correctly', () => {
      // ARRANGE
      const initialState = component.isVisible;
      
      // ACT
      component.toggleVisibility();
      
      // ASSERT
      expect(component.isVisible).toBe(!initialState);
    });

    it('should return correct greeting message', () => {
      // ARRANGE: Los valores ya están establecidos
      
      // ACT
      const greeting = component.obtenerSaludo();
      
      // ASSERT
      expect(greeting).toBe('Hola, Estudiante Hernández!');
    });
  });

  // === CASO DE PRUEBA 3: RENDERIZADO BÁSICO DE TEMPLATE ===
  describe('Caso de Prueba 3: Renderizado básico del template', () => {
    it('should render the title in the template', () => {
      // ARRANGE
      fixture.detectChanges();
      
      // ACT
      const titleElement = compiled.querySelector('h1');
      
      // ASSERT
      expect(titleElement).toBeTruthy();
      expect(titleElement.textContent.trim()).toBe('proyectoTestingHernandez');
    });

    it('should render student information', () => {
      // ARRANGE
      fixture.detectChanges();
      
      // ACT
      const estudianteElement = compiled.querySelector('h2');
      
      // ASSERT
      expect(estudianteElement).toBeTruthy();
      expect(estudianteElement.textContent).toContain('Estudiante Hernández');
    });

    it('should render course information', () => {
      // ARRANGE
      fixture.detectChanges();
      
      // ACT
      const cursoElement = compiled.querySelector('.curso');
      
      // ASSERT
      expect(cursoElement).toBeTruthy();
      expect(cursoElement.textContent).toContain('Programación Web');
    });
  });

  // === CASO DE PRUEBA 4: DIRECTIVAS ESTRUCTURALES (*ngIf) ===
  describe('Caso de Prueba 4: Directivas estructurales (*ngIf)', () => {
    it('should show conditional element when isVisible is true', () => {
      // ARRANGE
      component.isVisible = true;
      fixture.detectChanges();
      
      // ACT
      const conditionalElement = compiled.querySelector('.elemento-condicional');
      
      // ASSERT
      expect(conditionalElement).toBeTruthy();
    });

    it('should hide conditional element when isVisible is false', () => {
      // ARRANGE
      component.isVisible = false;
      fixture.detectChanges();
      
      // ACT
      const conditionalElement = compiled.querySelector('.elemento-condicional');
      
      // ASSERT
      expect(conditionalElement).toBeFalsy();
    });
  });

  // === CASO DE PRUEBA 5: DIRECTIVAS ESTRUCTURALES (*ngFor) ===
  describe('Caso de Prueba 5: Directivas estructurales (*ngFor)', () => {
    it('should render list items using *ngFor', () => {
      // ARRANGE
      fixture.detectChanges();
      
      // ACT
      const listItems = compiled.querySelectorAll('.numero-item');
      
      // ASSERT
      expect(listItems.length).toBe(5);
    });

    it('should update list when array changes', () => {
      // ARRANGE
      component.listaNumeros = [10, 20, 30];
      fixture.detectChanges();
      
      // ACT
      const listItems = compiled.querySelectorAll('.numero-item');
      
      // ASSERT
      expect(listItems.length).toBe(3);
    });
  });

  // === DEMOSTRANDO MATCHERS ADICIONALES DE JASMINE ===
  describe('Demostrando matchers adicionales de Jasmine', () => {
    it('should demonstrate various Jasmine matchers', () => {
      // ARRANGE
      const numeroTest = 42;
      const textoTest = 'Angular Testing';
      const arrayTest = [1, 2, 3];
      const objetoTest = { nombre: 'test', valor: 100 };
      
      // ACT & ASSERT: Demostrando diferentes matchers
      
      // Matchers básicos
      expect(numeroTest).toBe(42);
      expect(numeroTest).toEqual(42);
      expect(numeroTest).not.toBe(41);
      
      // Matchers para strings
      expect(textoTest).toContain('Angular');
      expect(textoTest).toMatch(/Testing$/);
      
      // Matchers para arrays
      expect(arrayTest).toContain(2);
      expect(arrayTest.length).toBeGreaterThan(2);
      expect(arrayTest.length).toBeLessThanOrEqual(3);
      
      // Matchers para objetos
      expect(objetoTest).toBeDefined();
      expect(objetoTest).not.toBeNull();
      expect(objetoTest.nombre).toBeTruthy();
      
      // Matchers para tipos
      expect(numeroTest).toBeInstanceOf(Number);
      expect(typeof textoTest).toBe('string');
      
      // Matchers para números
      expect(numeroTest).toBeCloseTo(42.1, 0);
      expect(numeroTest).toBeGreaterThanOrEqual(42);
    });

    it('should demonstrate async testing concepts', (done) => {
      // ARRANGE
      const testPromise = new Promise((resolve) => {
        setTimeout(() => resolve('completed'), 100);
      });
      
      // ACT & ASSERT
      testPromise.then((result) => {
        expect(result).toBe('completed');
        done();
      });
    });
  });
});
