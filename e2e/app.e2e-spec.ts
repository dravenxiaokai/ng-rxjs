import { NgResponsivePage } from './app.po';

describe('ng-responsive App', () => {
  let page: NgResponsivePage;

  beforeEach(() => {
    page = new NgResponsivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
