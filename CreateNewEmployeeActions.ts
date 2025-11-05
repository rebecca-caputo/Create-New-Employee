import { Page, expect} from '@playwright/test';
import { CreateNewEmployeeLocators } from './CreateNewEmployeeLocators';

export class CreateNewEmployeeActions {
    readonly page: Page;
    readonly locators: CreateNewEmployeeLocators;

    constructor(page: Page){
        this.page = page;
        this.locators = new CreateNewEmployeeLocators(page);
    }

    // Fill employee name
    async inputEmployeeName(name: string) {
        await this.locators.employeeName.fill(name);
    }

    // Fill employee email
    async inputEmployeeEmail(email: string) {
        await this.locators.employeeEmail.fill(email);
    }

    async clickCreateButton() {
        await expect(this.page.getByRole('button', {name: 'Create'})).toBeVisible({ timeout: 10000 });
        await this.locators.clickCreate.click();
    }

    async clickActionsButton() {
        await expect(this.page.getByRole('button', {name: 'Actions'})).toBeVisible({ timeout: 10000 });
        await this.locators.clickActions.click();
    }

    async clickActivateButton() {
        await expect(this.page.getByText('Activated employees can log into Ashby.')).toBeVisible({ timeout: 10000 });
        await this.locators.clickActivate.click();
    }
}

