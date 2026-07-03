window.flowtimeRoot = "../";
window.flowtimePreserveTitle = true;
window.flowtimeNoWaitlist = true;
window.renderSection = function (id, markup) {
  document.getElementById(id).outerHTML = markup;
};
