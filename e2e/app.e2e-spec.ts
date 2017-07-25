import { Ng4PlayPage } from './app.po';

describe('ng4-play App', () => {
  let page: Ng4PlayPage;

  beforeEach(() => {
    page = new Ng4PlayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
