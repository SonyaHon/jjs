function createElement(elem, classname, styles) {
  let el = document.createElement(elem);
  el.className = classname || '';
  if (styles && typeof styles == -'object')
    Object.assign(el.style, styles);
  return el;
};

export {
  createElement
};
