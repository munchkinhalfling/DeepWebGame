import * as microlang from './lib/microlang.js'
var app = angular.module('deep-web-game', []);
app.controller('deep-web-ctrl', function($scope) {
  $scope.fullWidth = window.width;
  $scope.fullHeight = window.height;
});
class CodeArea extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.setAttribute('contenteditable', '');
    this.code = this.innerHTML;
  }
  evaluate() {
    microlang.compandrun(this.code);
  }
}
customElements.define('code-area', CodeArea);
