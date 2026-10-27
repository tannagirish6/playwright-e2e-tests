import { test, expect } from "@playwright/test";

test("Should load Home Page with correct title", async ({ page }) => {
  await page.goto(`https://katalon-demo-cura.herokuapp.com/`);

  await expect(page).toHaveTitle("CURA Healthcare Service");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "CURA Healthcare Service",
  );
});

// if you run this file only below test will run as it uses test.only() method

// locator stratigies : page.getBY*() / page.locator returns Locator
// the abvoe metods need to be awaied bcoz they dont return Promise
// the type of locators is always an object
// locatos are LAZY until an action is fired on them
test.only("should demo locators", async ({ page }) => {
  await page.goto(`https://katalon-demo-cura.herokuapp.com/`);

  await page.getByRole("link", { name: "Make Appointment" }).click();
  await expect(page.locator("#login")).toContainText(
    "Please login to make appointment.",
  );
});
