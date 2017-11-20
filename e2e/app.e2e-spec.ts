import { CodeGeneratorPage } from './app.po';

describe('code-generator App', () => {
  let page: CodeGeneratorPage;

  beforeEach(() => {
    page = new CodeGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
