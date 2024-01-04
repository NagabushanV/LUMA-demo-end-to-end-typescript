import { Page,test, expect, Browser, chromium } from '@playwright/test';
import data from "../Testdata/homepage.json";



test('TC_007 Verify LIU should able to sigin with valid credetial Email.and Password.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    

});


test('TC_008 Verify in the Sign in page By clicking Create an account redirect to the create an account page.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await expect(await page.locator("(//span[.='Create an Account'])[1]")).toBeTruthy();
    await page.locator("(//span[.='Create an Account'])[1]").click();
    await expect (await page.locator('[data-ui-id="page-title-wrapper"]')).toBeTruthy();

});

test('TC_009 Verify the Welcome text with name displayed or not after successful Signin with valid credintial.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    

});

test('TC_010 Verify the Search bar present or displayed in my account page after successful Sign in .',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await expect(await page.locator('[id="search"]')).toBeTruthy();
    

});

test('TC_011 Verify in the my account page in the main bar displayed modules what s new, men, women, Gear, Training, Sale modules displayeds.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect (await page.locator('(//a[@class="level-top ui-corner-all"])[1]')).toBeTruthy();
    await expect (await page.locator('(//a[@class="level-top ui-corner-all"])[2]')).toBeTruthy();
    await expect (await page.locator('(//a[@class="level-top ui-corner-all"])[3]')).toBeTruthy();
    await expect (await page.locator('(//a[@class="level-top ui-corner-all"])[4]')).toBeTruthy();
    await expect (await page.locator('(//a[@class="level-top ui-corner-all"])[5]')).toBeTruthy();
    await expect (await page.locator('(//a[@class="level-top ui-corner-all"])[6]')).toBeTruthy();

});

test('TC_012 Verify the Forgot password reset link sent to registren mail id and the mail sent messagedisplayed on the Screen.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator('[class="action remind"]').click();
    await page.locator('[alt="email"]').fill(data.email2);
    await page.locator('(//button[@type="submit"])[2]').click();
    await expect (await page.locator('[data-ui-id="message-success"]')).toHaveText(data.Forgotpasswordemailsent);


});

test('TC_013 Verify Error message Displayed forgot password reset mail enteredincorrectly or wrong email formate.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator('[class="action remind"]').click();
    await page.locator('[alt="email"]').fill(data.email3);
    await page.locator('(//button[@type="submit"])[2]').click();
    await expect (await page.locator('[id="email_address-error"]')).toHaveText(data.Forgotpasswordemailerror)

});

test('TC_014 Verify the error message displayed when Sign with wrong credintialdetails.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email4);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect (await page.locator('[data-ui-id="message-error"]')).toHaveText(data.incorrectdetails);

});

test('TC_015 Verifi the LIU should able to Edit and Change the password Buttons presents in the My Account page',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await expect(await page.locator("//span[.='Edit']")).toBeTruthy();
    await expect(await page.locator('[class="action change-password"]')).toBeTruthy();
    
});

test('TC_016 Verify the LIU should able to Edit Button presents in the My Account pageand click on save button and verify the Saved message.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.pause();
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator('(//span[@class="customer-name"])[1]').click();
    await page.locator("(//a[.='My Account'])[1]").click();
    await expect(await page.locator("//span[.='Edit']")).toBeTruthy();
    await page.locator("//span[.='Edit']").click();
    await page.locator('[title="Save"]').click();
    await expect(await page.locator('[data-ui-id="message-success"]')).toHaveText(data.Savemessage);
    
});

test('TC_017 Verify  the LIU should able to Edit the account details click save button.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator('(//span[@class="customer-name"])[1]').click();
    await page.locator("(//a[.='My Account'])[1]").click();
    await expect(await page.locator("//span[.='Edit']")).toBeTruthy();
    await page.locator("//span[.='Edit']").click();
    await page.locator('[title="Last Name"]').fill(data.lastnameedit);
    await page.locator('[title="Save"]').click();
    
});


test('TC_018 verify the LIU should able to change the password and save the details and verify the saved message.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator('(//span[@class="customer-name"])[1]').click();
    await page.locator("(//a[.='My Account'])[1]").click();
    await expect(await page.locator('[class="action change-password"]')).toBeTruthy();
    await page.locator('[class="action change-password"]').click();
    await expect(await page.locator('[data-container="change-email-password"]')).toBeTruthy();
    await page.locator('[id="current-password"]').fill(data.password);
    await page.locator('[id="password"]').fill(data.password);
    await page.locator('[id="password-confirmation"]').fill(data.password);
    await page.locator('[title="Save"]').click();
    await expect (await page.locator('[data-ui-id="message-success"]')).toHaveText(data.Savemessage);
    
    
});


test('TC_019 Verify the LIU should able to manage the adress and save the details and identifiy the saved message.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator('(//span[@class="customer-name"])[1]').click();
    await page.locator("(//a[.='My Account'])[1]").click();
    await expect(await page.locator("//span[.='Manage Addresses']")).toBeTruthy();
    await page.locator("//span[.='Manage Addresses']").click();
    await expect(await page.locator('[data-ui-id="page-title-wrapper"]')).toBeTruthy();

  
    
});


test('TC_020 Verify the LIU identify the saved message should able to Edit the  Billingadress and save the details.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator('(//span[@class="customer-name"])[1]').click();
    await page.locator("(//a[.='My Account'])[1]").click();
    await expect(await page.locator('[data-ui-id="default-billing-edit-link"]')).toBeTruthy();
    await page.locator('[data-ui-id="default-billing-edit-link"]').click();
    await page.locator('[title="Street Address"]').fill(data.streetname);
    await page.locator('[title="City"]').fill(data.city);
    await page.locator('[title="Country"]').selectOption(data.country);
    await page.locator('[id="region_id"]').selectOption(data.state);
    await page.locator('[title="Zip/Postal Code"]').fill(data.pincode);
    await page.locator('[title="Phone Number"]').fill(data.phone);
    await page.locator('[title="Save Address"]').click();
    await page.waitForLoadState('load');
    expect(await page.locator('[data-ui-id="message-success"]')).toBeTruthy();

    
    
});

test('TC_021 Verify the LIU identify the saved message should able to Edit the shippingadress and save the details.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator('(//span[@class="customer-name"])[1]').click();
    await page.locator("(//a[.='My Account'])[1]").click();
    await expect(await page.locator('[data-ui-id="default-shipping-edit-link"]')).toBeTruthy();
    await page.locator('[data-ui-id="default-shipping-edit-link"]').click();
    await page.locator('[title="Street Address"]').fill(data.streetname);
    await page.locator('[title="City"]').fill(data.city);
    await page.locator('[title="Country"]').selectOption(data.country);
    await page.locator('[id="region_id"]').selectOption(data.state);
    await page.locator('[title="Zip/Postal Code"]').fill(data.pincode);
    await page.locator('[title="Phone Number"]').fill(data.phone);
    await page.locator('[title="Save Address"]').click();
    expect(await page.locator('[data-ui-id="message-success"]')).toHaveText(data.saveadressmessage);

    
    
});



