import { test, expect } from "@playwright/test";

test.describe("Login Funtionality", () => {

  test.beforeEach("go to login page", async ({ page }) => {
    await page.goto(`https://katalon-demo-cura.herokuapp.com/`);
  });
  test("test", async ({ page }) => {
    // launch URL
    // click on appointment

    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.locator("#login")).toContainText(
      "Please login to make appointment.",
    );
    // login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // assert a tex
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });
  test("Should load Home Page with correct title", async ({ page }) => {
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "CURA Healthcare Service",
    );
  });
});
