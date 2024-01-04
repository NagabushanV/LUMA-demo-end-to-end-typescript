import { Page,test, expect, Browser } from '@playwright/test';
import data from "../Testdata/homepage.json";
test('TC_001-Verify Successfull user Registration with a valid all mandatory fields.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("(//a[.='Create an Account'])[1]").click();
    await page.locator('[title="First Name"]').fill(data.firstname);
    await page.locator('[title="Last Name"]').fill(data.lastname);
    await page.locator('[title="Email"]').fill(data.email);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator('[title="Confirm Password"]').fill(data.confirmpassword);
    await page.locator('[title="Create an Account"]').click();

});


test('TC_002Validate Thank you for registring message after successful user Registration .',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("(//a[.='Create an Account'])[1]").click();
    await page.locator('[title="First Name"]').fill(data.firstname);
    await page.locator('[title="Last Name"]').fill(data.lastname);
    await page.locator('[title="Email"]').fill(data.email);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator('[title="Confirm Password"]').fill(data.confirmpassword);
    await page.locator('[title="Create an Account"]').click();
    await expect (await page.locator('[data-ui-id="message-success"]')).toHaveText(data.expected1);



});


test('TC_003verify the email error message LIU should able to enter wrong formate email field while Create an account.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("(//a[.='Create an Account'])[1]").click();
    await page.locator('[title="First Name"]').fill(data.firstname);
    await page.locator('[title="Last Name"]').fill(data.lastname);
    await page.locator('[title="Email"]').fill(data.email1);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator('[title="Confirm Password"]').fill(data.confirmpassword);
    await page.locator('[title="Create an Account"]').click();
    await expect (await page.locator('[id="email_address-error"]')).toHaveText(data.expectedemailerror);

});

test('TC_004Verify the Error message displayed LIU should able to one of the mandatory field fill wrong or empty field',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("(//a[.='Create an Account'])[1]").click();
    await page.locator('[title="First Name"]').fill(data.firstname);
    // await page.locator('[title="Last Name"]').fill(data.lastname);
    await page.locator('[title="Email"]').fill(data.email);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator('[title="Confirm Password"]').fill(data.confirmpassword);
    await page.locator('[title="Create an Account"]').click();
    await expect (await page.locator('[id="lastname-error"]')).toHaveText(data.expectedlastnameerror);

});

test('TC_005-Verify the Error message user should able to create an account using the already existing email id.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("(//a[.='Create an Account'])[1]").click();
    await page.locator('[title="First Name"]').fill(data.firstname);
    await page.locator('[title="Last Name"]').fill(data.lastname);
    await page.locator('[title="Email"]').fill(data.email);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator('[title="Confirm Password"]').fill(data.confirmpassword);
    await page.locator('[title="Create an Account"]').click();
    await expect (await page.locator('[class="message-error error message"]')).toHaveText(data.alreadyexisterror);

});


test('TC_006 Verify the LIU in Create an account page All the mandatory field  hs * mark.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator("(//a[.='Create an Account'])[1]").click();
    await expect(await page.locator('[class="field field-name-firstname required"]')).toBeTruthy();
    await expect(await page.locator('[class="field field-name-lastname required"]')).toBeTruthy();
    await expect(await page.locator('[class="field required"]')).toBeTruthy();
    await expect(await page.locator('(//div[@class="field password required"])[1]')).toBeTruthy();
    await expect(await page.locator('[class="field confirmation required"]')).toBeTruthy();

});