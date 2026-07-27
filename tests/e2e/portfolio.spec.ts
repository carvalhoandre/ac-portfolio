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

  const projectMenu = page.getByRole("button", { name: "Abrir menu" });
  if (await projectMenu.isVisible()) await projectMenu.click();
  await page.getByRole("link", { name: /English/ }).click();
  await expect(page).toHaveURL(/\/en\/projects\/ac-dogs\/$/);
  await expect(page.getByText("Technical decisions")).toBeVisible();
});

test("switches theme and keeps it after navigation", async ({ page }) => {
  await page.goto("/en/");
  const menu = page.getByRole("button", { name: "Open menu" });
  if (await menu.isVisible()) await menu.click();
  await page.getByRole("button", { name: "Use dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("has no horizontal overflow and exposes the mobile menu", async ({
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

  const trigger = page.getByRole("button", { name: "Abrir menu" });
  if (await trigger.isVisible()) {
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  }
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
