import { Page } from '@playwright/test';

export class MainPage {
    private readonly searchBtnSelector = '[data-target="qbsearch-input.inputButton"]';
    private readonly searchStringSelector = '[id="query-builder-test"]';
    public readonly searchFormSelector = '[data-target="qbsearch-input.queryBuilderContainer"]';
    private readonly sideBarMenuSelector = '[aria-label="Open user navigation menu"]';

    constructor(public page: Page) { }

    public async openMainPage() {
        await this.page.goto('/');
    }

    public async openSearchString() {
        await this.page.click(this.searchBtnSelector);
    }

    public async performSearchByValue(value: string) {
        await this.page.fill(this.searchStringSelector, value);
        await this.page.press(this.searchStringSelector, 'Enter');
    }

    public async openSideBarMenu() {
        await this.page.locator(this.sideBarMenuSelector).click();
    }

    public async openYourProfile() {
        await this.page.getByLabel('Your profile').click();
    }
}