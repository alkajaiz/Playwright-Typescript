import {test,expect} from '@playwright/test';
test('Practice test', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    console.log(await page.title());  
    await page.getByPlaceholder('you@email.com').fill('jaiswalalka44@gmail.com');
    await page.getByLabel('Password').fill('Passwor@d12');
    await page.getByRole('button',{name:'Sign In'}).click();
    //await expect(page.getByRole('button',{name:'Browse Events →'})).toBeVisible();
    await page.getByRole('link',{name:'Events'}).nth(0).click();
    await page.getByRole('button',{name:'Add New Event'}).click();
    await page.locator('#event-title-input').fill('Party Time');
    await page.getByPlaceholder('Describe the event…').fill('This is a test event created using Playwright.');
    await page.locator('#city').fill('Bangalore');
    await page.getByLabel('venue').fill('SJR BLUEWATER');
    await page.getByLabel('Event Date & Time').fill('2026-12-31T20:00');
    await page.getByLabel('Price ($)').fill('100');
    await page.getByLabel('Total Seats').fill('50');
    await page.locator('#add-event-btn').click();
    await expect(page.getByText('Event created!')).toBeVisible();
    await page.locator('#nav-events').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.relative').first().waitFor();
    await page.locator('#event-card').filter({hasText:'Party Time'}).first().getByRole('link',{name:'Book Now'}).click();




});