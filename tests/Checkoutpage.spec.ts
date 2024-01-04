import { Page,test, expect, Browser, chromium } from '@playwright/test';
import data from "../Testdata/homepage.json";

test('TC_031 Verify the proceed to checkout the product and identify the shipping Adress.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator("//span[.='Men']").click();
    await page.locator("//span[.='Shop Shorts']").click();
    await page.locator('(//strong[@class="product name product-item-name"])[1]').click();
    await expect (await page.locator('[class="swatch-attribute size"]')).toBeTruthy();
    await page.locator('(//div[@class="swatch-option text"])[1]').click();
    await expect (await page.locator('[class="swatch-attribute color"]')).toBeTruthy();
    await page.locator('(//div[@class="swatch-option color"])[1]').click();
    await expect (await page.locator('[class="field qty"]')).toBeTruthy();
    await page.locator('[title="Qty"]').fill(data.qty);
    await expect(await page.locator('[id="qty"]')).toBeTruthy();
    await page.locator('[title="Add to Cart"]').click();
    await page.waitForLoadState('load');
    await expect (await page.locator('data-ui-id="message-success"')).toHaveText(data.addtocartmessage);
    await page.locator('[class="action showcart"]').click();
    await expect (await page.locator("//a[.='Pierce Gym Short']")).toHaveText(data.productname);
    await page.locator('[title="Proceed to Checkout"]').click();
    

});

