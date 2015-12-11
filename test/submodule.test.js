import assert from 'power-assert';
import SubModule from '../src/js/submodule';

describe('SubModule', () => {
  let subModule;
  
  it ('Can create instance', () => {
    subModule = new SubModule();
    assert(subModule instanceof SubModule);
  });

  it ('Can get HTML string', () => {
    const assertHtml = '<div>SubModule#render</div>';
    const result = subModule.getHtml();
    assert(result === assertHtml);
  });
});
