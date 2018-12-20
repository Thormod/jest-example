export class DashboardPage {
  public headerSelector: string;
  public modalContentSelector: string;

  constructor () {
    this.headerSelector = 'div[class="header"]';
    this.modalContentSelector = 'div[class="modal-content"]';
  }
}
