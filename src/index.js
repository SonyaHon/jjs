import './styles/global.css';

import GUI from './engine/UI/index.js';

/**
 Entry file, which gather sall modules together and launches the program

  * 1 step is to launch the ui, gather available sizes of canvases
  * 2 step is to create and init the core
  * 3 step is to launch all
*/
var g = new GUI(document.getElementById("root"));
g.start();
console.log(g);
