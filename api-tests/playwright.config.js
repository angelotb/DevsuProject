require('dotenv').config();

module.exports = {
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    extraHTTPHeaders: {
      'Accept': 'application/json'
    },
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
};
