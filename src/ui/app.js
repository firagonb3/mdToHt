const shell = require('electron').shell
import { $ } from '../controlers/utils.js';

import { addViewHeader, addViewMain } from '../controlers/DOMControler.js';
import { headerview } from './view/headerview.js';
import { converMdToHt } from './view/textareaview.js';

addViewHeader(headerview);
addViewMain(converMdToHt);

$(document).on('click', (event) => {
  if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
    event.preventDefault()
    shell.openExternal(event.target.href)
  }
});