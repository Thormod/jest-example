export class JiraLoginPage {
  public usernameInputSelector: string;
  public passwordInputSelector: string;
  public submitInputSelector: string;
  public approveInputSelector: string;

  constructor () {
    this.usernameInputSelector = 'input[name=os_username]';
    this.passwordInputSelector = 'input[name=os_password]';
    this.submitInputSelector = 'input[id=login-form-submit]';
    this.approveInputSelector = 'input[id=approve]';
  }
}
