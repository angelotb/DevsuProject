import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    baseURL: 'https://www.demoblaze.com/',
    trace: 'on',
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',

  },
  projects: [
    {
      name: "setup",
      testMatch: "tests/setup.spec.ts",
      use: { ...devices['Desktop Chrome'] },

    },
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'], permissions: ["clipboard-read"] },
    },
    {
      name: 'EDGE',
      dependencies: ['setup'],
      use: { ...devices['Desktop Edge'] },
    },
    {
      name: 'webkit',
      dependencies: ['setup'],
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
