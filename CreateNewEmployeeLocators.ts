import { Page } from '@playwright/test';

export class CreateNewEmployeeLocators {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get employeeName() {
        return this.page.locator("span[aria-placeholder='Gob Bluth...']");
    }   

    get employeeEmail() {
        return this.page.locator("span[aria-placeholder='gob@gobiasindustries.com....']");
    }

    get clickCreate() {
        return this.page.getByRole('button', { name: 'Create' });
    }

    get clickActions() {
        return this.page.getByRole('button', {name: 'Actions'});
    }

    get clickActivate() {
        return this.page.locator('p.mJg5gq_description', { hasText: 'Activated employees can log into Ashby.' });

    }
}
