import { Page } from '@playwright/test';

export class AshbyLoginLocators {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get loginButton() {
        return this.page.getByRole('button', { name: 'Log in' });
    }

    get loginWithSSO() {
        return this.page.locator('button:has-text("Sign in with SSO")');
    }
    
    get emailInput() {
        return this.page.locator('#email');
    }
    
    get signInWithSSOButton() {
        return this.page.getByRole('button', { name: 'Continue with SSO' });
    }

    get loginToJumpCloud() {
        return this.page.getByPlaceholder('User Email Address');
    }

    get continueToAshby() {
        return this.page.locator('button:has-text("Continue")');
    }        

    get enterPassword() {
        return this.page.getByPlaceholder('User Password');
    }

    get clickSSOLoginButton() {
        return this.page.getByRole('button', { name: 'SSO Login' });
    }
    
    get approveSignInButton() {
        return this.page.getByRole('button', { name: /Approve sign-in/i });
    }
}