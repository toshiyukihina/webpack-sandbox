import assert from 'power-assert';
import SubModule from '../src/js/submodule';

describe('SubModule', () => {
  let subModule;
  
  it ('can create instance', () => {
    subModule = new SubModule();
    assert(subModule instanceof SubModule);
  });

  it ('can get HTML string', () => {
    const assertHtml = '<div>SubModule#render</div>';
    const result = subModule.getHtml();
    assert(result === assertHtml);
  });
});

