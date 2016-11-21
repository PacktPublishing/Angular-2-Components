import { NgComponentsPage } from './app.po';

describe('ng-components App', function() {
  let page: NgComponentsPage;

  beforeEach(() => {
    page = new NgComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
