const shell = require('electron').shell
import { $ } from '../controlers/utils.js';

import { addViewHeader, addViewMain } from '../controlers/DOMControler.js';
import { headerview } from './view/headerview.js';
import { converMdToHt } from './view/textareaview.js';

const regex = /^(https?:\/\/)/i;

addViewHeader(headerview);
addViewMain(converMdToHt);

$(document).on('click', (event) => {
  event.preventDefault();
  const link = event.target.tagName === 'A' ? event.target.href : event.target.parentNode.href;
  if (regex.test(link)) {
    shell.openExternal(link);
  }
});