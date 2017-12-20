function createElement(elem, classname, styles) {
  let el = document.createElement(elem);
  el.className = classname || '';
  if (styles && typeof styles == -'object')
    Object.assign(el.style, styles);
  return el;
};

function JJSEventObject() {
  this.listeners = [];
  this.subscribed = {};
  this.addListener(this);
}

JJSEventObject.prototype.addListener = function(listener) {
  if(this.listeners.indexOf(listener) === -1) {
    this.listeners.push(listener);
  }
}

JJSEventObject.prototype.removeListener = function(listener) {
  if(this.listeners.indexOf(listener) != -1) {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  }
}

JJSEventObject.prototype.fire = function(eventName) {
  let args = [];
  for(let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  this.listeners.forEach(function(listener) {
    if(listener.subscribed && listener.subscribed[eventName]) {
      listener.subscribed[eventName].call(listener, args);
    }
  }.bind(this));
}

JJSEventObject.prototype.on = function (eventName, callback) {
  this.subscribed[eventName] = callback;
}

export {
  createElement,
  JJSEventObject
};
