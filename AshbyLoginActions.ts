import { Page, expect } from '@playwright/test';
import { AshbyLoginLocators } from './AshbyLoginLocators';

export class AshbyLoginActions {
    readonly page: Page;
    readonly locators: AshbyLoginLocators;

    constructor(page: Page){
        this.page = page;
        this.locators = new AshbyLoginLocators(page);
    }

    async goto() {
        await this.page.goto('https://ashbyhq.com');
        await expect(this.locators.loginButton).toBeVisible({ timeout: 10000 });
        await this.locators.loginButton.click();
        await expect(this.locators.loginWithSSO).toBeVisible({ timeout: 10000 });
        await this.locators.loginWithSSO.click();
    }

    async enterEmail(email: string) {
        await this.locators.emailInput.fill(email);
        await expect(this.locators.emailInput).toHaveValue(email);
    }

    async loginWithSSO() {
        await expect(this.locators.signInWithSSOButton).toBeVisible({ timeout: 10000 }); // wait first
        await this.locators.signInWithSSOButton.click();
    }    

    async inputJumpCloudEmail(email: string) {
        await this.locators.loginToJumpCloud.fill(email);
        await expect(this.locators.loginToJumpCloud).toHaveValue(email);
    }

    async loginToAshby() {
        await expect(this.locators.continueToAshby).toBeVisible({ timeout: 10000 });
        await this.locators.continueToAshby.click();
    }

    async inputJumpCloudPassword(password: string) { 
        await this.locators.enterPassword.fill(password); 
        await expect(this.locators.enterPassword).toHaveValue(password); 
    }

    async clickSSOLogin() {
        await expect(this.locators.clickSSOLoginButton).toBeVisible({ timeout: 10000 });
        await this.locators.clickSSOLoginButton.click();
    }

    async clickApproveSignIn() {
        if (await this.locators.approveSignInButton.isVisible()) {
            await this.locators.approveSignInButton.click();
        }
    }
}