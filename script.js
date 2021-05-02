const selectField = document.getElementById('selectField'),
  selectText = document.getElementById('selectText'),
  options = document.getElementsByClassName('options'),
  list = document.getElementById('list'),
  arrowIcon = document.getElementById('arrowIcon');

selectField.onclick = function () {
  list.classList.toggle('hide');
  arrowIcon.classList.toggle('rotate');
};

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
  };
}
