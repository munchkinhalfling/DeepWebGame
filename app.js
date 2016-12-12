//import * as microlang from './lib/microlang.js'
var app = angular.module('deepWebGame', []);
app.controller('deep-web-ctrl', function($scope) {
  $scope.fullWidth = window.innerWidth;
  $scope.fullHeight = window.innerHeight;
});
class CodeArea extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.setAttribute('contenteditable', '');
    this.code = this.innerHTML;
    this.style.border = '1px solid black';
    this.style.color = this.getAttribute('code-color');
    this.style.fontFamily = 'monospace';
    this.addEventListener('keyup', () => {this.code = this.innerHTML;});
  }
  evaluate() {
    /*microlang.*/compandrun(this.code.replace(/<br>/g, '\n'));
  }
}
customElements.define('code-area', CodeArea);
// end of config stuff
window.onload = () => {
  var codeArea = document.getElementById('microlang-code-area');
  var hackBtn = document.getElementById('runbtn');

  hackBtn.addEventListener('click', () => {
                           codeArea.evaluate();
  });
}