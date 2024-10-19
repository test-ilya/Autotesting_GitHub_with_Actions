import { MainPage } from './MainPage';

export class SearchResultPage extends MainPage {
    private readonly filterByUsersSelector = '[data-testid="nav-item-users"]';
    public readonly resulListSelector = '[data-testid="results-list"]';

    public async filterByUsers() {
        await this.page.click(this.filterByUsersSelector);
    }
}