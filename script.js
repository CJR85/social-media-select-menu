const selectField = document.getElementById('selectField'),
  selectText = document.getElementById('selectText'),
  options = document.getElementsByClassName('options'),
  list = document.getElementById('list');

selectField.onclick = function () {
  list.classList.toggle('hide');
};

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
  };
}
