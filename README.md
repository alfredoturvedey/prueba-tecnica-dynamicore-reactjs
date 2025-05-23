# prueba-tecnica-dynamicore-reactjs

## Descripción

Este proyecto es una aplicación de ejemplo en ReactJS creada como prueba técnica para Dynamicore. Utiliza Vite como herramienta de construcción y TypeScript para el tipado estático. La interfaz de usuario está construida con Material UI (MUI) y Emotion para el manejo de estilos.

## Estructura del Proyecto

- **src/**: Código fuente principal.
  - **components/**: Componentes reutilizables, incluyendo formularios y listas de usuarios.
  - **data/**: Datos estáticos de ejemplo.
  - **types/**: Definiciones de tipos TypeScript.
  - **assets/**: Recursos gráficos.
- **public/**: Archivos públicos y estáticos.
- **index.html**: Archivo HTML principal.
- **package.json**: Configuración de dependencias y scripts.
- **tsconfig*.json**: Configuración de TypeScript.
- **vite.config.ts**: Configuración de Vite.

## Scripts disponibles

- `dev`: Inicia el servidor de desarrollo con Vite.
- `build`: Compila el proyecto y genera la build de producción.
- `lint`: Ejecuta ESLint para analizar el código.
- `preview`: Sirve la build de producción para previsualización.

## Requisitos previos

- **Node.js**: 22.11.0

## Librerías instaladas

### Dependencias principales

- **react**: ^19.0.0 — Biblioteca principal para construir interfaces de usuario.
- **react-dom**: ^19.0.0 — Soporte para renderizado en el DOM.
- **@mui/material**: ^7.0.1 — Componentes de Material UI para React.
- **@mui/icons-material**: ^7.0.1 — Iconos de Material UI.
- **@emotion/react**: ^11.14.0 — Motor de estilos CSS-in-JS utilizado por MUI.
- **@emotion/styled**: ^11.14.0 — API para crear componentes con estilos personalizados.
- **@fontsource/roboto**: ^5.2.5 — Fuente Roboto recomendada por Material UI.

### Dependencias de desarrollo

- **typescript**: ~5.7.2 — Soporte para TypeScript.
- **@types/react**: ^19.0.10 — Tipos para React.
- **@types/react-dom**: ^19.0.4 — Tipos para React DOM.
- **vite**: ^6.2.0 — Herramienta de construcción rápida para proyectos web modernos.
- **@vitejs/plugin-react**: ^4.3.4 — Plugin para integrar React con Vite.
- **eslint**: ^9.21.0 — Linter para JavaScript y TypeScript.
- **@eslint/js**: ^9.21.0 — Configuración base de ESLint.
- **eslint-plugin-react-hooks**: ^5.1.0 — Reglas para los hooks de React.
- **eslint-plugin-react-refresh**: ^0.4.19 — Soporte para Fast Refresh en React.
- **typescript-eslint**: ^8.24.1 — Integración de TypeScript con ESLint.
- **globals**: ^15.15.0 — Definiciones de variables globales para ESLint.

## Cómo iniciar el proyecto

1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
3. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Autor

Dynamicore — Prueba técnica ReactJS
