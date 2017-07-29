import { AngularEditorPage } from './app.po';

describe('angular-editor App', () => {
  let page: AngularEditorPage;

  beforeEach(() => {
    page = new AngularEditorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
