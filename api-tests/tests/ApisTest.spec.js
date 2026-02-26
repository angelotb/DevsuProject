const { test, expect } = require('@playwright/test');

const URL_SIGNUP = 'https://api.demoblaze.com/signup';
const URL_LOGIN = 'https://api.demoblaze.com/login';
const nombreUsuario = 'testuser' + Math.floor(Math.random() * 10000); // Genera un nombre de usuario único
const passwordUsuario = 'testpassword';

test.describe('API Tests for Demoblaze', () => {
  test('1. Debe registrar un usuario nuevo', async ({ request }) => {
    const response = await request.post(URL_SIGNUP, {
      data: {
        username: nombreUsuario,
        password: passwordUsuario
      }
    });
    expect(response.status()).toBe(200);
  });

  test('2. Intentar crear un usuario ya existente', async ({ request }) => {
    const response = await request.post(URL_SIGNUP, {
      data: {
        username: nombreUsuario,
        password: passwordUsuario
      }
    });
    const text = await response.text();
    expect(text).toContain("This user already exist");
  });

  test('3. Iniciar sesión con el usuario registrado', async ({ request }) => {
    const response = await request.post(URL_LOGIN, {
      data: { username: nombreUsuario, password: passwordUsuario }
    });
    const text = await response.text();
    
    expect(text).toContain("Auth_token");
  });

  test('4. Iniciar sesión con wrong credentials', async ({ request }) => {
    const response = await request.post(URL_LOGIN, {
      data: { username:nombreUsuario,  password: 'todofind '}
    });
    const text = await response.text();
    expect(text).toContain("Wrong password.");
  });
});
