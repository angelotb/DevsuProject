═══════════════════════════════════════════════════════════════════════════════
                    GUÍA DE EJECUCIÓN - API TESTS DEMOBLAZE
═══════════════════════════════════════════════════════════════════════════════

DESCRIPCIÓN:
Este proyecto contiene pruebas automatizadas de API para la plataforma Demoblaze.
Los tests validan el flujo de registro, login y manejo de credenciales.

═══════════════════════════════════════════════════════════════════════════════
REQUISITOS PREVIOS:
═══════════════════════════════════════════════════════════════════════════════

✓ Node.js instalado (versión 14 o superior)
✓ npm disponible en la terminal
✓ Acceso a internet (para ejecutar contra la API real)

═══════════════════════════════════════════════════════════════════════════════
PASOS DE EJECUCIÓN:
═══════════════════════════════════════════════════════════════════════════════

PASO 1: Abre la terminal en la carpeta del proyecto
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Navega a la carpeta api-tests:

    cd api-tests

O si estás en la raíz del proyecto:

    cd api-tests


PASO 2: Limpia el caché de npm
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ejecuta el comando:

    npm cache clean --force

Este comando elimina la caché de npm (necesario si has tenido errores anteriores).


PASO 3: Instala las dependencias
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ejecuta el comando:

    npm install

Este comando descarga e instala todas las dependencias necesarias (Playwright, etc.).


PASO 4: Ejecuta los tests
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ejecuta el comando para correr los tests secuencialmente (uno después del otro):

    npx playwright test tests/nuevoUsuario.spec.js --workers=1

EXPLICACIÓN DEL COMANDO:
  • npx playwright test          → Ejecuta los tests con Playwright
  • tests/nuevoUsuario.spec.js   → Especifica el archivo de tests a ejecutar
  • --workers=1                  → Usa 1 worker para ejecutar tests secuencialmente
                                   (importante para mantener el orden)

═══════════════════════════════════════════════════════════════════════════════
RESUMEN COMPLETO (COPIAR Y PEGAR):
═══════════════════════════════════════════════════════════════════════════════

cd api-tests
npm cache clean --force
npm install
npx playwright test tests/nuevoUsuario.spec.js --workers=1


═══════════════════════════════════════════════════════════════════════════════
RESULTADOS ESPERADOS:
═══════════════════════════════════════════════════════════════════════════════

Si todos los tests pasan, deberías ver:

    ✓ 1. Debe registrar un usuario nuevo
    ✓ 2. Intentar crear un usuario ya existente
    ✓ 3. Iniciar sesión con el usuario registrado
    ✓ 4. Iniciar sesión con wrong credentials

    4 passed


═══════════════════════════════════════════════════════════════════════════════
OTROS COMANDOS ÚTILES:
═══════════════════════════════════════════════════════════════════════════════

Ejecutar todos los tests del proyecto:

    npx playwright test --workers=1


Ejecutar tests con interfaz gráfica (ver el navegador):

    npx playwright test tests/nuevoUsuario.spec.js --workers=1 --headed


Ver el reporte de resultados:

    npx playwright show-report


═══════════════════════════════════════════════════════════════════════════════
SOLUCIÓN DE PROBLEMAS:
═══════════════════════════════════════════════════════════════════════════════

❌ Error: "test.describe() to be called here"
✓ Solución: Ejecuta nuevamente todo el proceso (pasos 2-4)

❌ Error: "Wrong password" en test 3
✓ Solución: Asegúrate de estar usando --workers=1 para ejecutar secuencialmente

❌ Error: "npm no encontrado"
✓ Solución: Instala Node.js desde https://nodejs.org/

❌ Error de conexión a la API
✓ Solución: Verifica tu conexión a internet y que la API esté disponible

═══════════════════════════════════════════════════════════════════════════════
