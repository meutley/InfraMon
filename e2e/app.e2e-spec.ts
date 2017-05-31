import { InframonPage } from './app.po';

describe('inframon App', () => {
  let page: InframonPage;

  beforeEach(() => {
    page = new InframonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
