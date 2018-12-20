import puppeteer = require('puppeteer');
import { User } from '../model/index';
import {
  LoginPage,
  JiraLoginPage,
  DashboardPage
} from '../page/index';

export async function getLoginUrl(user: User, isAdmin: boolean) {
  let page: any;
  let browser: any;
  let APP: string;

  const loginPage = new LoginPage();
  const jiraLoginPage = new JiraLoginPage();
  const dashboardPage = new DashboardPage();

  if (isAdmin) {
    APP = `https://admin.lighthouse.apps.psl.com.co:${process.env.PORT}/#/security/login`;
  } else {
    APP = `https://lighthouse.apps.psl.com.co:${process.env.PORT}/#/security/login`;
  }

  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();

  await page.goto(APP);
  await page.waitForSelector(loginPage.loginButtonSelector);
  await page.click(loginPage.loginButtonSelector);
  await page.waitForSelector(jiraLoginPage.usernameInputSelector);
  await page.type(jiraLoginPage.usernameInputSelector, user.getUsername());
  await page.type(jiraLoginPage.passwordInputSelector, user.getPassword());
  await page.click(jiraLoginPage.submitInputSelector);
  await page.waitForSelector(jiraLoginPage.approveInputSelector);
  await page.click(jiraLoginPage.approveInputSelector);
  await page.waitForSelector(dashboardPage.modalContentSelector);
  const loginUrl = await page.url();
  browser.close();

  return loginUrl;
}
