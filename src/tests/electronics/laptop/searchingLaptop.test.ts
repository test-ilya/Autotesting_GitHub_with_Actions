import { test, expect } from '@playwright/test';
import { LaptopPage } from '../../../pages/LaptopPage';

const laptopName = 'Apple MacBook Air 13';

test('Searching laptop - Apple MacBook Air 13', async ({ page }) => {
    const laptopPage = new LaptopPage(page);

    await page.goto('/');
    console.log('Open main page');
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    await laptopPage.itemSearch(laptopName);
    console.log('Do search');
    await page.screenshot({ path: 'screenshot2.png', fullPage: true });


    await expect(
        page.locator(laptopPage.searchResultSelector)
    ).toContainText(laptopName);
});
