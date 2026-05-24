(function () {
  var previews = document.querySelectorAll("[data-theme-preview]");
  var storageKey = "flowtime-theme";
  var savedTheme = localStorage.getItem(storageKey);
  var previewTheme = new URLSearchParams(window.location.search).get("theme");

  function setTheme(theme) {
    var classic = theme === "classic";
    document.body.dataset.theme = classic ? "classic" : "mono";
    previews.forEach(function (preview) {
      var selected = preview.dataset.themePreview === (classic ? "classic" : "mono");
      preview.classList.toggle("is-selected", selected);
      preview.setAttribute("aria-pressed", String(selected));
    });
  }

  setTheme(previewTheme === "classic" || previewTheme === "dark" || savedTheme === "classic" || savedTheme === "dark" ? "classic" : "mono");
  previews.forEach(function (preview) {
    preview.addEventListener("click", function () {
      var nextTheme = preview.dataset.themePreview;
      localStorage.setItem(storageKey, nextTheme);
      setTheme(nextTheme);
    });
  });
}());
