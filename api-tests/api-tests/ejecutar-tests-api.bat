@echo off
REM Script para ejecutar tests de API y generar reporte automáticamente

echo.
echo ════════════════════════════════════════════════════════════
echo   EJECUTANDO TESTS DE API - ApisTest.spec.js
echo ════════════════════════════════════════════════════════════
echo.

REM Ejecutar los tests
npx playwright test tests/ApisTest.spec.js --workers=1

REM Verificar si los tests se ejecutaron correctamente
if %errorlevel% neq 0 (
    echo.
    echo ⚠️  Los tests tuvieron fallos, pero abriendo el reporte de todas formas...
    echo.
) else (
    echo.
    echo ✅ Tests completados exitosamente
    echo.
)

REM Abrir el reporte HTML
echo Abriendo reporte HTML...
start "" playwright-report\index.html

echo.
echo ════════════════════════════════════════════════════════════
echo   Reporte abierto en tu navegador
echo ════════════════════════════════════════════════════════════
echo.
pause
