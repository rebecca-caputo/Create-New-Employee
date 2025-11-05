import { faker } from '@faker-js/faker';
import { CreateNewEmployeeActions } from '../page-objects/CreateNewEmployeeActions';

export class EmployeeDataHelper {
  static generate() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const fullName = `${firstName} ${lastName}`;
    const email = faker.internet.email({ firstName, lastName });

    return { firstName, lastName, fullName, email };
  }
  
  readonly actions: CreateNewEmployeeActions
  
      constructor(actions: CreateNewEmployeeActions) {
          this.actions = actions;
      }

  async createNewEmployee() {
    await this.actions.clickCreateButton();
    await this.actions.clickActionsButton();
    await this.actions.clickActivateButton();
  }
}
