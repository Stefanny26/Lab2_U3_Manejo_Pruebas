import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoTestingHernandez';
  // Propiedades adicionales para las pruebas de elementos HTML
  estudiante = 'Estudiante Hernández';
  curso = 'Programación Web';
  isVisible = true;
  contador = 0;
  listaNumeros = [1, 2, 3, 4, 5];
  
  // Métodos para las pruebas
  incrementarContador(): void {
    this.contador++;
  }
  
  decrementarContador(): void {
    this.contador--;
  }
  
  resetearContador(): void {
    this.contador = 0;
  }
  
  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
  
  obtenerSaludo(): string {
    return `Hola, ${this.estudiante}!`;
  }
}
