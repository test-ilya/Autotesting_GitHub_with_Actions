import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { SearchResultPage } from '../pages/SearchResultPage';

const value = 'test-ilya';

test('Searching Profile', async ({ page }) => {
    const mainPage = new MainPage(page);
    const searchResultPage = new SearchResultPage(page);

    await mainPage.openMainPage();
    await mainPage.openSearchString();
    await mainPage.performSearchByValue(value);

    await expect(
        page.locator(searchResultPage.resulListSelector)
    ).toBeVisible();

    await searchResultPage.filterByUsers();

    await expect(
        page.locator(searchResultPage.resulListSelector)
    ).toContainText(value);
});