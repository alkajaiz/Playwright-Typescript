import{test,expect} from'@playwright/test';


test('UI Basics test', async ({ page }) => {

    await page.goto('https://example.com');
    console.log(await page.title());

    // Check if the page title is correct
    await expect(page).toHaveTitle('Example Domain');   
           
});
//2 test cases in one file

test('UI Basics test 2', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   console.log(await page.title());
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator('.alert-danger').textContent());

    // Check if the error message is correct
    await expect(page.locator('.alert-danger')).toHaveText('Old password \"learning\" is no longer valid. Please use the new password \"Learning@830$3mK2\".'); 
await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator('#signInBtn').click();
    console.log (await page.locator('.card-body a').first().textContent());
    console.log (await page.locator('.card-body a').nth(1).textContent());

    console.log (await page.locator('.card-body a').allTextContents());




});     