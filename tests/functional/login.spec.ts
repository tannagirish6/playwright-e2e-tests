import { test, expect } from "@playwright/test";

test("Should login successfully", async ({ page }) => {
  /*
     1. go to "ABC.com"
     2. Assert if the title is correct
     3. Assert header text
    */
  // Launch URL
  await page.goto(`https://katalon-demo-cura.herokuapp.com/`);

  // click to make an appontment
  await page.getByRole("link",{name :"Make Appointment"}).click();
  await expect(page.getByText("Please login to make")).toBeVisible();

  // login
 await page.getByLabel("Username").fill("John Doe");
 await page.getByLabel("Password").fill("ThisIsNotAPassword");
 await page.getByRole("button",{name:"Login"}).click();
 await expect(page.locator("h2")).toContainText("Make Appointment");
});

// https://playwright.dev/docs/api/class-test
// test("should do something",{tag:"@smoke"},async({page},testInfo) => {


// })


