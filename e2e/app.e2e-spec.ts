import { EudoxaPage } from './app.po';

describe('eudoxa App', () => {
  let page: EudoxaPage;

  beforeEach(() => {
    page = new EudoxaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
