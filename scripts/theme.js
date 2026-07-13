(function () {
  var previews = document.querySelectorAll("[data-theme-preview]");
  var storageKey = "flowtime-theme";
  var savedTheme = localStorage.getItem(storageKey);
  var previewTheme = new URLSearchParams(window.location.search).get("theme");

  function setThemeImages(theme) {
    var sourceKey = theme === "classic" ? "themeClassic" : "themeMono";
    document.querySelectorAll("img[data-theme-mono][data-theme-classic]").forEach(function (image) {
      var nextSource = image.dataset[sourceKey];
      if (nextSource && image.getAttribute("src") !== nextSource) {
        image.setAttribute("src", nextSource);
      }
    });
  }

  function setTheme(theme) {
    var classic = theme === "classic";
    var activeTheme = classic ? "classic" : "mono";
    document.body.dataset.theme = activeTheme;
    setThemeImages(activeTheme);
    previews.forEach(function (preview) {
      var selected = preview.dataset.themePreview === activeTheme;
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

