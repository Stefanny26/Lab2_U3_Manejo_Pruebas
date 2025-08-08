// Pruebas unitarias para componentes Angular con elementos HTML
// Autor: Estudiante Hernández
// Siguiendo las mejores prácticas de Jasmine para testing de componentes

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges(); // Detectar cambios una vez para que el template se renderice
  });

  // === PRUEBAS BÁSICAS DEL COMPONENTE ===
  describe('Configuración básica del componente', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should have correct initial values', () => {
      expect(component.title).toEqual('proyectoTestingHernandez');
      expect(component.estudiante).toEqual('Estudiante Hernández');
      expect(component.curso).toEqual('Programación Web');
      expect(component.isVisible).toBe(true);
      expect(component.contador).toBe(0);
    });
  });

  // === CASO DE PRUEBA 1: ELEMENTOS DE TEXTO E INTERPOLACIÓN ===
  describe('Caso de Prueba 1: Renderizado de texto e interpolación', () => {
    it('should render title in h1 element', () => {
      // ARRANGE: Detectar cambios para actualizar el DOM
      fixture.detectChanges();

      // ACT: Buscar el elemento h1 por ID
      const h1Element = compiled.querySelector('#titulo-principal');

      // ASSERT: Verificar que el título se renderice correctamente
      expect(h1Element).toBeTruthy();
      expect(h1Element?.textContent).toBe('proyectoTestingHernandez');
    });

    it('should display student name and course information', () => {
      // ARRANGE
      fixture.detectChanges();

      // ACT
      const estudianteElement = compiled.querySelector('.estudiante');
      const cursoElement = compiled.querySelector('.curso');

      // ASSERT
      expect(estudianteElement?.textContent).toContain('Estudiante Hernández');
      expect(cursoElement?.textContent).toContain('Programación Web');
    });

    it('should render personalized greeting using method interpolation', () => {
      // ARRANGE
      fixture.detectChanges();

      // ACT
      const saludoElement = compiled.querySelector('[data-testid="saludo-personalizado"]');

      // ASSERT
      expect(saludoElement?.textContent).toBe('Hola, Estudiante Hernández!');
    });
  });

  // === CASO DE PRUEBA 2: ELEMENTOS CONDICIONALES (*ngIf) ===
  describe('Caso de Prueba 2: Renderizado condicional con *ngIf', () => {
    it('should show element when isVisible is true', () => {
      // ARRANGE
      component.isVisible = true;
      fixture.detectChanges();

      // ACT
      const elementoCondicional = compiled.querySelector('[data-testid="elemento-condicional"]');

      // ASSERT
      expect(elementoCondicional).toBeTruthy();
      expect(elementoCondicional?.textContent).toContain('Este elemento es visible cuando isVisible es true');
    });

    it('should hide element when isVisible is false', () => {
      // ARRANGE
      component.isVisible = false;
      fixture.detectChanges();

      // ACT
      const elementoCondicional = compiled.querySelector('[data-testid="elemento-condicional"]');

      // ASSERT
      expect(elementoCondicional).toBeFalsy();
    });

    it('should toggle button text based on visibility state', () => {
      // ARRANGE & ACT & ASSERT para estado inicial (visible)
      component.isVisible = true;
      fixture.detectChanges();
      let btnToggle = compiled.querySelector('[data-testid="btn-toggle"]');
      expect(btnToggle?.textContent?.trim()).toBe('Ocultar Elemento');

      // ARRANGE & ACT & ASSERT para estado oculto
      component.isVisible = false;
      fixture.detectChanges();
      btnToggle = compiled.querySelector('[data-testid="btn-toggle"]');
      expect(btnToggle?.textContent?.trim()).toBe('Mostrar Elemento');
    });
  });

  // === CASO DE PRUEBA 3: EVENTOS DE CLICK Y MÉTODOS DEL COMPONENTE ===
  describe('Caso de Prueba 3: Eventos de click y interacciones', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should increment counter when clicking increment button', () => {
      // ARRANGE
      const btnIncrementar = compiled.querySelector('[data-testid="btn-incrementar"]') as HTMLButtonElement;
      const valorInicial = component.contador;

      // ACT
      btnIncrementar.click();
      fixture.detectChanges();

      // ASSERT
      expect(component.contador).toBe(valorInicial + 1);
      const contadorDisplay = compiled.querySelector('#valor-contador');
      expect(contadorDisplay?.textContent).toBe('1');
    });

    it('should decrement counter when clicking decrement button', () => {
      // ARRANGE
      component.contador = 5;
      fixture.detectChanges();
      const btnDecrementar = compiled.querySelector('[data-testid="btn-decrementar"]') as HTMLButtonElement;

      // ACT
      btnDecrementar.click();
      fixture.detectChanges();

      // ASSERT
      expect(component.contador).toBe(4);
      const contadorDisplay = compiled.querySelector('#valor-contador');
      expect(contadorDisplay?.textContent).toBe('4');
    });

    it('should reset counter when clicking reset button', () => {
      // ARRANGE
      component.contador = 10;
      fixture.detectChanges();
      const btnReset = compiled.querySelector('[data-testid="btn-reset"]') as HTMLButtonElement;

      // ACT
      btnReset.click();
      fixture.detectChanges();

      // ASSERT
      expect(component.contador).toBe(0);
      const contadorDisplay = compiled.querySelector('#valor-contador');
      expect(contadorDisplay?.textContent).toBe('0');
    });

    it('should toggle visibility when clicking toggle button', () => {
      // ARRANGE
      const estadoInicial = component.isVisible;
      const btnToggle = compiled.querySelector('[data-testid="btn-toggle"]') as HTMLButtonElement;

      // ACT
      btnToggle.click();
      fixture.detectChanges();

      // ASSERT
      expect(component.isVisible).toBe(!estadoInicial);
    });
  });

  // === CASO DE PRUEBA 4: LISTAS Y DIRECTIVA *ngFor ===
  describe('Caso de Prueba 4: Renderizado de listas con *ngFor', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should render all numbers in the list', () => {
      // ARRANGE: Los datos ya están en component.listaNumeros

      // ACT
      const listaNumeros = compiled.querySelector('[data-testid="lista-numeros"]');
      const items = compiled.querySelectorAll('.item-numero');

      // ASSERT
      expect(listaNumeros).toBeTruthy();
      expect(items.length).toBe(component.listaNumeros.length);
      expect(items.length).toBe(5);
    });

    it('should render correct content for each list item', () => {
      // ARRANGE: Verificar cada elemento de la lista

      // ACT & ASSERT
      component.listaNumeros.forEach((numero, index) => {
        const item = compiled.querySelector(`[data-testid="item-${index}"]`);
        expect(item).toBeTruthy();
        expect(item?.textContent).toContain(`Número: ${numero}`);
      });
    });

    it('should update list when listaNumeros array changes', () => {
      // ARRANGE
      component.listaNumeros = [10, 20, 30];
      fixture.detectChanges();

      // ACT
      const items = compiled.querySelectorAll('.item-numero');

      // ASSERT
      expect(items.length).toBe(3);
      expect(items[0].textContent).toContain('Número: 10');
      expect(items[1].textContent).toContain('Número: 20');
      expect(items[2].textContent).toContain('Número: 30');
    });
  });

  // === CASO DE PRUEBA 5: CLASES CSS DINÁMICAS Y ESTILOS ===
  describe('Caso de Prueba 5: Clases CSS dinámicas y binding de estilos', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should apply "activo" class when isVisible is true', () => {
      // ARRANGE
      component.isVisible = true;
      fixture.detectChanges();

      // ACT
      const elementoConClases = compiled.querySelector('[data-testid="elemento-con-clases"]');

      // ASSERT
      expect(elementoConClases).toBeTruthy();
      expect(elementoConClases?.classList.contains('activo')).toBe(true);
      expect(elementoConClases?.classList.contains('inactivo')).toBe(false);
    });

    it('should apply "inactivo" class when isVisible is false', () => {
      // ARRANGE
      component.isVisible = false;
      fixture.detectChanges();

      // ACT
      const elementoConClases = compiled.querySelector('[data-testid="elemento-con-clases"]');

      // ASSERT
      expect(elementoConClases?.classList.contains('activo')).toBe(false);
      expect(elementoConClases?.classList.contains('inactivo')).toBe(true);
    });

    it('should have correct CSS classes structure', () => {
      // ARRANGE
      fixture.detectChanges();

      // ACT
      const container = compiled.querySelector('.container');
      const header = compiled.querySelector('header');
      const footer = compiled.querySelector('.pie-pagina');

      // ASSERT
      expect(container).toBeTruthy();
      expect(header).toBeTruthy();
      expect(footer).toBeTruthy();
    });

    it('should verify data-testid attributes for testing', () => {
      // ARRANGE
      fixture.detectChanges();

      // ACT & ASSERT: Verificar que todos los data-testid están presentes
      const testIds = [
        'elemento-condicional',
        'btn-toggle',
        'contador-valor',
        'btn-incrementar',
        'btn-decrementar',
        'btn-reset',
        'lista-numeros',
        'saludo-personalizado',
        'elemento-con-clases'
      ];

      // Nota: elemento-condicional puede no estar presente si isVisible es false
      const elementosTestId = testIds.filter(testId => {
        const elemento = compiled.querySelector(`[data-testid="${testId}"]`);
        return elemento !== null;
      });

      // Al menos 8 elementos deben tener data-testid (todos excepto elemento-condicional si está oculto)
      expect(elementosTestId.length).toBeGreaterThanOrEqual(8);
    });
  });

  // === PRUEBAS ADICIONALES CON MATCHERS DE JASMINE ===
  describe('Demostrando matchers adicionales de Jasmine', () => {
    it('should demonstrate various Jasmine matchers with DOM elements', () => {
      // ARRANGE
      fixture.detectChanges();

      // ACT
      const h1Element = compiled.querySelector('#titulo-principal');
      const buttons = compiled.querySelectorAll('button');
      const sections = compiled.querySelectorAll('section');

      // ASSERT - Diferentes matchers de Jasmine
      expect(h1Element).toBeDefined();
      expect(h1Element).not.toBeNull();
      expect(h1Element?.tagName.toLowerCase()).toBe('h1');
      expect(buttons.length).toBeGreaterThan(0);
      expect(buttons.length).toBeLessThanOrEqual(10);
      expect(sections.length).toEqual(4);
      expect(component.listaNumeros).toContain(3);
      expect(component.estudiante).toMatch(/Hernández/);
      expect(typeof component.contador).toBe('number');
      expect(component.isVisible).toBeInstanceOf(Boolean);
    });
  });
});
