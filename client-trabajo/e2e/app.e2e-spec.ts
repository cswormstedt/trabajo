import { ClientTrabajoPage } from './app.po';

describe('client-trabajo App', () => {
  let page: ClientTrabajoPage;

  beforeEach(() => {
    page = new ClientTrabajoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
