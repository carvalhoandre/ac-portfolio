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

test("preserves the section and viewport while changing language", async ({
  page,
}) => {
  await page.goto("/pt-BR/#trajetoria");
  await page.locator("#trajetoria").scrollIntoViewIfNeeded();
  const before = await page.evaluate(() => window.scrollY);

  await page.getByRole("link", { name: /English/ }).dispatchEvent("click");
  await expect(page).toHaveURL(/\/en\/#trajetoria$/);
  await expect(page.getByText("Education and career")).toBeVisible();
  await expect
    .poll(async () =>
      Math.abs((await page.evaluate(() => window.scrollY)) - before),
    )
    .toBeLessThan(8);
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
