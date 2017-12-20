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

  this.top_bar = null; // Top bar menu with some functions
  this.left_panel = null; // Area wehere u can place (dragNDrop) some active windows
  this.right_panel = null; // Area where u can place some more active windows
  this.editor = null; // Editor of the game

  // By default there is this functionality, but u can change it how u want with dnd or with the layout tool;

}

GUI.prototype.start = function() {

};

export default GUI;
