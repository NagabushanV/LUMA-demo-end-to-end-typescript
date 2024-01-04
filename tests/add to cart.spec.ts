import { Page,test, expect, Browser, chromium } from '@playwright/test';
import data from "../Testdata/homepage.json";

test('TC_022 verify the LIU should able select the size Button while adding to the cart page',async ({ page }) => {
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
    await expect(await page.locator('[class="swatch-option text selected"]')).toBeTruthy();

});

test('TC_023 Verify the selection of the Color while product Buying Color Buttons Click.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator("//span[.='Men']").click();
    await page.locator("//span[.='Shop Shorts']").click();
    await page.locator('(//strong[@class="product name product-item-name"])[1]').click();
    await expect (await page.locator('[class="swatch-attribute color"]')).toBeTruthy();
    await page.locator('(//div[@class="swatch-option color"])[1]').click();
    await expect(await page.locator('[class="swatch-option color selected"]')).toBeTruthy();

});

test('TC_024 Verify the LIU should able to enter the Quantity of the product by clicking qauantity and Enter the quantity number.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator("//span[.='Men']").click();
    await page.locator("//span[.='Shop Shorts']").click();
    await page.locator('(//strong[@class="product name product-item-name"])[1]').click();
    await expect (await page.locator('[class="field qty"]')).toBeTruthy();
    await page.locator('[title="Qty"]').fill(data.qty);
    await expect(await page.locator('[id="qty"]')).toBeTruthy();

});

test('TC_025 Verify LIU should able to Add to cart product.',async ({ page }) => {
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


});


test('TC_026 Verify the Add to cart message displayed in the Screen after the Add tocart page Successfully.',async ({ page }) => {
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
    await expect (await page.locator('[data-ui-id="message-success"]')).toHaveText(data.addtocartmessage);


});

test('TC_027 Verify the product present in the cart page after adding the add to cartverify.',async ({ page }) => {
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
    await expect (await page.locator('[data-ui-id="message-success"]')).toHaveText(data.addtocartmessage);
    await page.locator('[class="action showcart"]').click();
    await expect (await page.locator("//a[.='Pierce Gym Short']")).toHaveText(data.productname);


});

test('TC_028 Verify the Add to cart product proceed to checkout page identify the mandatory field marked as*.',async ({ page }) => {
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
    await expect (await page.locator('[data-ui-id="message-success"]')).toHaveText(data.addtocartmessage);
    await page.locator('[class="action showcart"]').click();
    await expect (await page.locator("//a[.='Pierce Gym Short']")).toHaveText(data.productname);
    await page.locator('[title="Proceed to Checkout"]').click();
    await expect(await page.locator('[class="field required"]')).toBeTruthy();
    await expect(await page.locator('(//div[@class="field _required"])[1]')).toBeTruthy();
    await expect(await page.locator('(//div[@class="field _required"])[2]')).toBeTruthy();
    await expect(await page.locator('(//div[@class="field _required"])[3]')).toBeTruthy();
    await expect(await page.locator('(//div[@class="field _required"])[4]')).toBeTruthy();
    await expect(await page.locator('(//div[@class="field _required"])[5]')).toBeTruthy();
    await expect(await page.locator('(//div[@class="field _required"])[7]')).toBeTruthy();
    await expect(await page.locator('(//div[@class="field _required"])[8]')).toBeTruthy();
    await expect(await page.locator('(//div[@class="field _required"])[9]')).toBeTruthy();



});

test('TC_029 Verify the proceed to checkout page Company field is not a mandatory field verify.',async ({ page }) => {
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
    await expect (await page.locator('[data-ui-id="message-success"]')).toHaveText(data.addtocartmessage);
    await page.locator('[class="action showcart"]').click();
    await expect (await page.locator("//a[.='Pierce Gym Short']")).toHaveText(data.productname);
    await page.locator('[title="Proceed to Checkout"]').click();
    await expect(await page.locator('[name="shippingAddress.company"]')).toBeTruthy();

});


 test('TC_030 Verify the in the Product Review page 5***** stars present in the Review page.',async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
    await page.locator('(//li[@class="authorization-link"])[1]').click();
    await page.locator('[title="Email"]').fill(data.email2);
    await page.locator('[title="Password"]').fill(data.password);
    await page.locator("(//span[.='Sign In'])[1]").click();
    await expect(await page.locator("(//span[.='Welcome, Nagabushan V!'])[1]")).toBeTruthy();
    await page.locator("//span[.='Men']").click();
    await page.locator("//span[.='Shop Shorts']").click();
    await page.locator('(//strong[@class="product name product-item-name"])[1]').click();
    await expect (await page.locator('[class="product data items"]')).toBeTruthy();
    await expect(await page.locator('[id="tab-label-reviews-title"]')).toBeTruthy();
    await page.locator('[id="tab-label-reviews-title"]').click();
    await expect(await page.locator('[class="legend review-legend"]')).toBeTruthy();
    await expect(await page.locator('[title="5 stars"]')).toBeTruthy();

 });