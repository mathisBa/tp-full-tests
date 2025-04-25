// @ts-check
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Page home", () => {
  test("le bouton est désactivé par défaut", async ({ page }) => {
    await expect(page.locator("#compute")).toBeDisabled();
  });
  test("le résultat est vide tant qu'on a pas submit", async ({ page }) => {
    await expect(page.locator("#result span")).toContainText("");
  });
  test("le résultat est rempli qu'on submit", async ({ page }) => {
    await page.locator("#lune").click();
    await page.locator("#lune").fill("1");
    await page.locator("#terre").click();
    await page.locator("#terre").fill("1");
    await page.locator("#soleil").click();
    await page.locator("#soleil").fill("1");
    await page.locator("#compute").click();
    await expect(page.locator("#result span")).toContainText("mortin");
  });
  test("l'input ne peut etre que 1 ou 2'", async ({ page }) => {
    await page.locator("#lune").click();
    await page.locator("#lune").fill("40");
    await page.locator("#terre").click();
    await page.locator("#terre").fill("1");
    await page.locator("#soleil").click();
    await page.locator("#soleil").fill("1");
    await expect(page.locator("#compute")).toBeDisabled();
  });
  test("visual regression (ignore la première board)", async ({ page }) => {
    await expect(page).toHaveScreenshot("home-page.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
    });
  });
});
