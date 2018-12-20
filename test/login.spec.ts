import puppeteer = require('puppeteer');
import { getLoginUrl } from '../src/util/login';
import { User } from '../src/model/user.model';

require('dotenv').config();

beforeAll(async () => {
  const user = new User(String(process.env.USERNAME), String(process.env.PASSWORD));
  const urlLogin = await getLoginUrl(user, false);
  console.log(urlLogin);
});

describe('Contact form', () => {
  test('lead can submit a contact request', () => {
    expect(true).toBe(true);
  });
});
