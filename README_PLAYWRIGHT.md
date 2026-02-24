# Playwright E2E (inicial)

Estructura creada:

- `tests/` - tests de Playwright (TypeScript)
- `src/pages/` - page objects
- `playwright.config.ts` - configuración de Playwright
- `tsconfig.json` - configuración TypeScript

Comandos útiles:

```bash
# instalar dependencias
cd /home/angelotb/DevsuProject-1
npm install

# instalar navegadores de Playwright (opcional pero recomendado)
npx playwright install --with-deps

# ejecutar tests
npx playwright test
```

Notas:
- He incluido `@playwright/test` en devDependencies y un ejemplo mínimo de test en `tests/example.spec.ts`.
- Si prefieres JavaScript en lugar de TypeScript puedo ajustar la configuración.
