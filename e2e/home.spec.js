// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Page home", () => {
  test("visual regression (ignore la première board)", async ({ page }) => {
    // on masque la board dynamique pour ne pas tenir compte des dés tirés
    await expect(page).toHaveScreenshot("home-page.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
    });
  });
});
