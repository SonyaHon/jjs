import {createElement, JJSEventObject} from '../../utils/index.js';

function Tab(name, content) {
    this.el = createElement('div', 'JSS-BAR__TAB');
}

function Bar() {
    this.el = createElement('div', 'JJS-BAR');
}

Bar.prototype.addTab = function(tab) {
    
}

export default {
    Bar,
    Tab
};