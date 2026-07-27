import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  outputDir: ".artifacts/playwright",
  timeout: 30_000,
  expect: { timeout: 5_000 },
  use: {
    baseURL: "http://127.0.0.1:4173",
    browserName: "chromium",
    launchOptions: {
      executablePath:
        process.env.CHROME_PATH ??
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "mobile-320",
      use: { viewport: { width: 320, height: 720 } },
    },
    {
      name: "mobile-390",
      use: { ...devices["iPhone 13"] },
    },
    {
      name: "desktop",
      use: { viewport: { width: 1440, height: 1000 } },
    },
  ],
  webServer: {
    command: "npm run dev:e2e",
    url: "http://127.0.0.1:4173/pt-BR/",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
