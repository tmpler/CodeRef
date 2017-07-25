import { CodeRefPage } from './app.po';

describe('code-ref App', () => {
  let page: CodeRefPage;

  beforeEach(() => {
    page = new CodeRefPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
