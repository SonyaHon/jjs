import {
  createElement
} from '../../utils/index.js';

import './styles/ui.css';

/**
 *  @param {DOM_node} - root elemet of the page
 */


function GUI(root_element) {

  this.el = createElement('div', 'JJS-GUI');
  root_element.appendChild(this.el);

}

GUI.prototype.start = function() {

};

export default GUI;
