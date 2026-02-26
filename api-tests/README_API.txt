API tests (Playwright + JavaScript)

Ubicación del proyecto: carpeta `api-tests` dentro del workspace.

Requisitos:
- Node.js (v14+)
- npm

Instalación y preparación:

1) Abrir una terminal en `api-tests`:

   cd api-tests

2) Instalar dependencias:

   npm install

3) Instalar navegadores de Playwright (no estrictamente necesario para peticiones HTTP, pero útil para utilidades):

   npm run install-browsers

Configurar variables de entorno:

1) Copiar el archivo de ejemplo:

   copy .env.example .env

2) Editar `.env` y ajustar `BASE_URL` a la URL de la API que vas a probar.

Ejecutar tests:

- Ejecutar todos los tests:

  npm test

- Ejecutar en modo headed y debug (si necesitas abrir navegador):

  npm run test:headed

- Abrir reportes generados:

  npm run test:report

Estructura creada:
- `package.json` - scripts y dependencias
- `playwright.config.js` - configuración general y `baseURL` desde `.env`
- `tests/` - tests de ejemplo
- `helpers/` - utilidades para request contexts
- `.env.example` - ejemplo de configuración

Consejos:
- Usar selectores o fixtures estables para datos de prueba.
- Para CI: establecer `BASE_URL` en variables de entorno del pipeline.
