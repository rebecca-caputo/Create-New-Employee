import { test, expect } from '@playwright/test';
import { AshbyLoginActions } from '../page-objects/AshbyLoginActions';
import { AshbyLoginHelper } from '../helpers/AshbyLoginHelper';
import { CreateNewEmployeeActions } from '../page-objects/CreateNewEmployeeActions';
import { EmployeeDataHelper } from '../helpers/EmployeeDataHelper';
import * as dotenv from 'dotenv';
dotenv.config();

test('Create New Employee', async ({ page }) => {
  const actions = new AshbyLoginActions(page);
  const helper = new AshbyLoginHelper(actions);
  const employeeActions = new CreateNewEmployeeActions(page);
  const employeeHelper = new EmployeeDataHelper(employeeActions);

  // Login
  await actions.goto();
  await helper.loginWithEmail(process.env.LOGIN_EMAIL!, process.env.LOGIN_PASSWORD!);
  await page.waitForURL('**/home', { timeout: 20000 });               // helps timeout issue

  // Navigate to create employee page
  await page.goto('https://app.ashbyhq.com/home/upcoming/right-side/users/create');

  // Generate test data from helper
  const employee = EmployeeDataHelper.generate();

  // Fill form
  await employeeActions.inputEmployeeName(employee.fullName);
  await employeeActions.inputEmployeeEmail(employee.email);
  await employeeHelper.createNewEmployee();
});
