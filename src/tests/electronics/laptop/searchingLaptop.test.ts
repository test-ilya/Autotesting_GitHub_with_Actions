import { test, expect } from '@playwright/test';
import { LaptopPage } from '../../../pages/LaptopPage';

const laptopName = 'Apple MacBook Air 13';

test('Searching laptop - Apple MacBook Air 13', async ({ page }) => {
    const laptopPage = new LaptopPage(page);

    await page.goto('/');
    await laptopPage.itemSearch(laptopName);
    
    await expect(
        page.locator(laptopPage.searchResultSelector)
    ).toContainText(laptopName);
});
