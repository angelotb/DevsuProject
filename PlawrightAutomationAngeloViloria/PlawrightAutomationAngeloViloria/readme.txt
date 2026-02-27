README - Ejecución de tests (Playwright)

Requisitos previos:
- Tener instalado Node.js (v14+ recomendado) y npm.
- Abrir una terminal en la raíz del proyecto (carpeta donde está package.json).

Pasos paso a paso:

1) Instalar dependencias

   npm install

2) Instalar navegadores de Playwright (si no están instalados)

   npx playwright install

3) Ejecutar tests individuales

   - FormularioCompra:
     npx playwright test tests/FormularioCompra.spec.ts

   - sumarProductos:
     npx playwright test tests/sumarProductos.spec.ts

   - vizualizarCarrito:
     npx playwright test tests/vizualizarCarrito.spec.ts

4) Ejecutar los tres tests en una sola línea

   npx playwright test tests/FormularioCompra.spec.ts tests/sumarProductos.spec.ts tests/vizualizarCarrito.spec.ts

5) Ejecutar toda la suite de tests

   npx playwright test

6) Ejecutar en modo con interfaz (headed) y depuración

   npx playwright test tests/FormularioCompra.spec.ts --headed --debug

   (Usar --headed para ver el navegador y --debug para modo interactivo.)

7) Abrir reporte de ejecución

   Después de ejecutar tests, abrir reporte con:
   npx playwright show-report

8) Opciones útiles

   - Ejecutar un test concreto por nombre de test (grep):
     npx playwright test -g "Nombre del test exacto"

   - Ejecutar en un navegador específico (ej. chromium):
     npx playwright test --project=chromium

9) Solución de problemas rápida

   - Si faltan dependencias: ejecutar npm install.
   - Si los navegadores no abren: ejecutar npx playwright install.
   - Para más logs: agregar -v o consultar playwright.config.ts.

Notas finales:
- Asegúrate de estar en la rama correcta del repositorio antes de ejecutar tests.
- Revisa los nombres de los archivos en tests/ si algún comando falla.
