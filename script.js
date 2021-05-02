const selectField = document.getElementById('selectField'),
  selectText = document.getElementById('selectText'),
  options = document.getElementsByClassName('options');

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
  };
}
