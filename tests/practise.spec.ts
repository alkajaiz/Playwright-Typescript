import {test, expect} from '@playwright/test';
test.only('Practice test', async ({ page }) => {
const products = page.locator('.card-body');
const productName = "ZARA COAT 3";
//const productCount = await productName.count();


    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    console.log(await page.title());
    await page.locator("[href='#/auth/register']").click();
    await page.locator('#firstName').fill('Sanni');
    await page.locator('#lastName').fill('Jaiswal');
    await page.locator('#userEmail').fill('jaiswalalka44@gmail.com');
    await page.locator('#userMobile').fill('1234567890');
    await page.locator('#userPassword').fill('Password123');
    await page.locator('#confirmPassword').fill('Password123');
    await page.locator("[type='checkbox']").check();
    await page.locator("[value='Register']").click();
    await page.locator("[tabindex='0']").click();
    await page.locator('#userEmail').fill('jaiswalalka44@gmail.com');
    await page.locator('#userPassword').fill('Password12');
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
   // await page.locator("ADIDAS ORIGINAL").textContent();
    console.log(await page.locator('.card-body b').first().textContent());
    console.log(await page.locator('.card-body b').nth(1).textContent());
    console.log(await page.locator('.card-body b').allTextContents()); 
    const count = await products.count();
    for(let i=0; i<count; ++i)
    {
        if(await products.nth(i).locator('b').textContent() === productName)
        {
            await products.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }
    await page.locator("[routerlink='/dashboard/cart']").click();
    await page.waitForLoadState('networkidle');
    await page.locator('h3').first().waitFor();
   const bool =await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
     await page.locator('text=Checkout').click();
     await page.locator("[placeholder='Select Country']").pressSequentially('ind',{delay:100});
     const dropdown = page.locator('.ta-results');
     await dropdown.waitFor();
     const optionsCount = await dropdown.locator('button').count();
     for(let i=0; i<optionsCount; ++i)  
        {
            if(await dropdown.locator('button').nth(i).textContent() === " India")
            {
                await dropdown.locator('button').nth(i).click();
                break;
            }   

        }
        await page.locator("[type='text']").nth(2).fill('123456');
        await page.locator("[type='text']").nth(3).fill('123456');
        //await page.locator("[type='text']").nth(4).fill('rahulshettyacademy');
        await page.locator('div.actions a').click();
        //await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
       const orderId =await page.locator('.ng-star-inserted').first().textContent();
       console.log(orderId);
await page.locator("[routerlink='/dashboard/myorders']").click();
await page.locator('tbody').waitFor();
const rows = page.locator('tbody tr');
const rowCount = await rows.count();        
//Git Practice
for(let i=0; i<rowCount; ++i)
{
    if(await rows.nth(i).locator('th').textContent() === orderId)
    {
        await rows.nth(i).locator('button').click();
        break;
    } 
    
}
       
});