require('dotenv').config();

const baseURL = process.env.BASE_URL || 'https://www.demoblaze.com/';

// Helper para imprimir respuestas y debuggear
async function logResponse(response) {
  console.log(`Status: ${response.status()}`);
  const contentType = response.headers()['content-type'];
  if (contentType && contentType.includes('application/json')) {
    console.log('Body:', await response.json());
  } else {
    console.log('Body:', await response.text());
  }
}

module.exports = { baseURL, logResponse };
