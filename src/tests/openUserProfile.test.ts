// import { test, expect } from '../Fixtures/LoginFixture';
// import { ProfilePage } from '../pages/ProfilePage';
// import { MainPage } from '../pages/MainPage';

// test.beforeEach('Login in https://github.com', async ({ login }) => { });

// test('Open User Profile', async ({ page }) => {
//     const profilePage = new ProfilePage(page);
//     const mainPage = new MainPage(page);
 
//     await page.goto('https://github.com');
//     await mainPage.openSideBarMenu();
//     await mainPage.openYourProfile();

//     await expect(
//         page.locator(profilePage.userInfoSelector('test-ilya'))
//     ).toBeVisible({ timeout: 30000 });
// });