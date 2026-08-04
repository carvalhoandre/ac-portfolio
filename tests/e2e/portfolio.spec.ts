import { expect, test } from "@playwright/test";

test("navigates through the localized portfolio and a case study", async ({
  page,
}) => {
  await page.goto("/pt-BR/");
  await expect(page).toHaveTitle(/Frontend Specialist/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "André Leite Carvalho",
  );

  await page.getByRole("link", { name: "Ver projetos" }).click();
  await expect(page.locator("#projetos")).toBeInViewport();
  await page
    .locator("article", { hasText: "ac Dogs" })
    .getByRole("link", { name: "Ler estudo de caso", exact: true })
    .click();
  await expect(page).toHaveURL(/\/pt-BR\/projetos\/ac-dogs\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("ac Dogs");
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(2);

  await page.getByRole("link", { name: /English/ }).click();
  await expect(page).toHaveURL(/\/en\/projects\/ac-dogs\/$/);
  await expect(page.getByText("Technical decisions")).toBeVisible();
});

test("switches theme and keeps it after navigation", async ({ page }) => {
  await page.goto("/en/");
  await page.getByRole("button", { name: "Use dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("has no horizontal overflow and exposes app-like mobile navigation", async ({
  page,
}) => {
  await page.goto("/pt-BR/");
  const viewportWidth = await page.evaluate(
    () => document.documentElement.clientWidth,
  );
  const scrollWidth = await page.evaluate(
    () => document.documentElement.scrollWidth,
  );
  expect(scrollWidth).toBeLessThanOrEqual(viewportWidth);

  const mobileNavigation = page.getByRole("navigation", {
    name: "Navegação principal mobile",
  });
  const width = page.viewportSize()?.width ?? 0;
  if (width < 1024) {
    await expect(mobileNavigation).toBeVisible();
    await expect(
      mobileNavigation.getByRole("link", { name: "Início" }),
    ).toHaveAttribute("aria-current", "location");
  } else {
    await expect(mobileNavigation).toBeHidden();
  }
});

test("starts project-to-project and browser history navigation at the top", async ({
  page,
}) => {
  await page.goto("/pt-BR/projetos/ac-labs/");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page
    .getByRole("navigation", { name: "Próximo projeto" })
    .getByRole("link")
    .click();

  await expect(page).toHaveURL(/\/pt-BR\/projetos\/ac-dogs\/$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(2);

  await page.evaluate(() => window.scrollTo(0, 700));
  await page.goBack();
  await expect(page).toHaveURL(/\/pt-BR\/projetos\/ac-labs\/$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(2);

  await page.evaluate(() => window.scrollTo(0, 700));
  await page.goForward();
  await expect(page).toHaveURL(/\/pt-BR\/projetos\/ac-dogs\/$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(2);
});

test("preserves the section and viewport while changing language", async ({
  page,
}) => {
  await page.goto("/pt-BR/#trajetoria");
  await page.locator("#trajetoria").scrollIntoViewIfNeeded();
  const before = await page
    .locator("#trajetoria")
    .evaluate((element) => element.getBoundingClientRect().top);

  await page.getByRole("link", { name: /English/ }).dispatchEvent("click");
  await expect(page).toHaveURL(/\/en\/#trajetoria$/);
  await expect(page.getByText("Education and career")).toBeVisible();
  await expect
    .poll(async () => {
      const current = await page
        .locator("#trajetoria")
        .evaluate((element) => element.getBoundingClientRect().top);
      return Math.abs(current - before);
    })
    .toBeLessThan(8);
});

test("keeps direct contact on-page without a broken form redirect", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async () => undefined },
    });
  });
  await page.goto("/pt-BR/#contato");
  await page.locator("#contato").scrollIntoViewIfNeeded();
  const before = await page.evaluate(() => window.scrollY);

  await expect(page.getByRole("form")).toHaveCount(0);
  await page
    .getByRole("button", { name: /Copiar endereço de e-mail/i })
    .dispatchEvent("click");
  await expect(page.getByText("E-mail copiado")).toBeVisible();
  await expect(page).toHaveURL(/\/pt-BR\/#contato$/);
  expect(await page.evaluate(() => window.scrollY)).toBe(before);
  await expect(
    page.getByRole("link", { name: /Enviar e-mail/i }),
  ).toHaveAttribute("href", /subject=Contato%20pelo%20portf%C3%B3lio/);
  await expect(
    page.getByRole("link", { name: /Falar pelo LinkedIn/i }),
  ).toBeVisible();

  await page.getByRole("link", { name: /English/ }).dispatchEvent("click");
  await expect(page).toHaveURL(/\/en\/#contato$/);
  await expect(
    page.getByRole("button", { name: /Copy email address/i }),
  ).toBeVisible();
});

test("renders the custom 404 experience", async ({ page }) => {
  await page.goto("/pt-BR/rota-inexistente");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "não foi encontrada",
  );
  await expect(
    page.getByRole("link", { name: "Ir para o início" }),
  ).toBeVisible();
});

test("loads localized project routes directly and after refresh", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  for (const route of [
    "/pt-BR/projetos/ac-labs/",
    "/pt-br/projetos/ac-labs/",
    "/en/projects/ac-labs/",
  ]) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "André’s Lab",
    );

    await page.reload();
    await expect(page).toHaveURL(new RegExp(`${route}$`));
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "André’s Lab",
    );
  }

  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});
