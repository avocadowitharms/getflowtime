(function () {
  var button = document.getElementById("theme-switch");
  var storageKey = "flowtime-theme";
  var savedTheme = localStorage.getItem(storageKey);
  var previewTheme = new URLSearchParams(window.location.search).get("theme");

  function setTheme(theme) {
    var classic = theme === "classic";
    document.body.dataset.theme = classic ? "classic" : "mono";
    button.setAttribute("aria-pressed", String(classic));
    button.setAttribute("aria-label", classic ? "Switch to Mono theme" : "Switch to Classic theme");
  }

  setTheme(previewTheme === "classic" || previewTheme === "dark" || savedTheme === "classic" || savedTheme === "dark" ? "classic" : "mono");
  button.addEventListener("click", function () {
    var nextTheme = document.body.dataset.theme === "classic" ? "mono" : "classic";
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  });
}());
