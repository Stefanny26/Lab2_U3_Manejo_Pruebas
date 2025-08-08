# Instrucciones de Instalación y Ejecución

## 📋 Prerrequisitos

- Node.js v18 o superior
- npm (incluido con Node.js)
- Git
- Google Chrome (para testing)

## 🚀 Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/Stefanny26/Lab2_U3_Manejo_Pruebas.git
cd Lab2_U3_Manejo_Pruebas
```

2. **Instalar dependencias:**
```bash
npm install
```

## 🏃‍♀️ Ejecución

### Ejecutar la aplicación
```bash
ng serve
# La aplicación estará disponible en http://localhost:4200
```

### Ejecutar pruebas unitarias
```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas con reporte de cobertura
ng test --code-coverage

# Ejecutar pruebas sin modo watch
ng test --watch=false
```

### Ver reporte de cobertura
```bash
# Después de ejecutar las pruebas con cobertura
npx http-server coverage/proyecto-testing-hernandez -p 8080
# El reporte estará disponible en http://localhost:8080
```

## 📁 Estructura del Proyecto

```
src/app/
├── calculator.ts                 # Clase Calculator con operaciones matemáticas
├── calculator.spec.ts            # Pruebas automáticas para Calculator
├── pruebas-manuales.ts          # Pruebas manuales con TDD
├── app-simple.component.spec.ts # Pruebas simplificadas del componente
├── app.component.ts             # Componente principal
├── app.component.html           # Template del componente
├── app.component.css            # Estilos del componente
└── app.component.spec.ts        # Pruebas del componente
```

## 🎯 Características Implementadas

- ✅ **TDD Completo:** Ciclo Red-Green-Refactor
- ✅ **100% Cobertura:** Todas las líneas cubiertas por pruebas
- ✅ **52 Casos de Prueba:** Incluyendo Calculator y componentes Angular
- ✅ **Patrón AAA:** Arrange-Act-Assert en todas las pruebas
- ✅ **Matchers Jasmine:** 15+ matchers diferentes demostrados

## 📊 Resultados

- **Statements:** 100% (19/19)
- **Branches:** 100% (1/1)
- **Functions:** 100% (9/9)
- **Lines:** 100% (18/18)

## 👩‍💻 Autora

**Stefanny Hernández**  
Universidad Técnica Particular de Loja  
Ingeniería en Tecnologías de la Información
