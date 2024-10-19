import { Page } from '@playwright/test';

export class MainPage {
    private readonly catalogBtnSelector = '[data-baobab-name="catalog"]';
    private readonly catalogContentSelector = '[data-zone-name="catalog-content"]';
    private readonly searchStringSelector = '[id="header-search"]';
    private readonly searchBtnSelector = '[data-auto="search-button"]';
    public readonly searchResultSelector = '[data-zone-name="searchResults"]';

    constructor(public page: Page){ }

    public async openCatalog() {
        await this.page.click(this.catalogBtnSelector);
        await this.page.locator(this.catalogContentSelector).waitFor({ state: 'visible' });
    }

    public async itemSearch(itemName: string) {
        await this.page.fill(this.searchStringSelector, `${itemName}`);
        await this.page.press(this.searchStringSelector, 'Enter');
    }

}