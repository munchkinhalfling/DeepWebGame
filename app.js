var app = angular.module('deepWebGame', []);
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
    compandrun(this.code);
  }
}
customElements.define('code-area', CodeArea);
// end of config stuff
var codeArea = document.getElementById('microlang-code-area');
var hackBtn = document.getElementById('runbtn');

hackBtn.addEventListener('click', () => {
                         codeArea.evaluate();
});
