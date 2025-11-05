import { AshbyLoginActions } from '../page-objects/AshbyLoginActions';

export class AshbyLoginHelper {
    readonly actions: AshbyLoginActions;

    constructor(actions: AshbyLoginActions) {
        this.actions = actions;
    }

    async loginWithEmail(email: string, password: string) {
        await this.actions.enterEmail(email);
        await this.actions.loginWithSSO();
        await this.actions.inputJumpCloudEmail(email);
        await this.actions.loginToAshby();
        await this.actions.inputJumpCloudPassword(password);
        await this.actions.clickSSOLogin();
        await this.actions.clickApproveSignIn();
    }
}
