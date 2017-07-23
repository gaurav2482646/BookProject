import { BookProjectPage } from './app.po';

describe('book-project App', () => {
  let page: BookProjectPage;

  beforeEach(() => {
    page = new BookProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
