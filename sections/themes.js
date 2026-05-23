(function () {
  var storageKey = "flowtime-theme";
  var savedTheme = localStorage.getItem(storageKey);
  var previewTheme = new URLSearchParams(window.location.search).get("theme");
  var slider = document.querySelector("[data-theme-slider]");
  var handle = document.querySelector(".theme-drag-handle");

  function setTheme(theme) {
    var nextTheme = theme === "classic" || theme === "dark" ? "classic" : "mono";
    document.body.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
  }

  function setSplit(percent) {
    if (!slider) return;

    var value = Math.max(0, Math.min(100, percent));
    slider.style.setProperty("--split", value + "%");

    if (handle) {
      handle.setAttribute("aria-valuenow", String(Math.round(value)));
    }

    setTheme(value >= 50 ? "classic" : "mono");
  }

  function pointerToPercent(event) {
    var rect = slider.getBoundingClientRect();
    return ((event.clientX - rect.left) / rect.width) * 100;
  }

  function endDrag(event) {
    if (!slider) return;

    if (slider.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }

    slider.classList.remove("is-dragging");
    setSplit(pointerToPercent(event) >= 50 ? 100 : 0);
  }

  if (slider) {
    setSplit(previewTheme === "classic" || previewTheme === "dark" || savedTheme === "classic" || savedTheme === "dark" ? 100 : 0);

    slider.addEventListener("pointerdown", function (event) {
      slider.setPointerCapture(event.pointerId);
      slider.classList.add("is-dragging");
      setSplit(pointerToPercent(event));
    });

    slider.addEventListener("pointermove", function (event) {
      if (!slider.classList.contains("is-dragging")) return;
      setSplit(pointerToPercent(event));
    });

    slider.addEventListener("pointerup", endDrag);

    slider.addEventListener("pointercancel", function () {
      slider.classList.remove("is-dragging");
    });
  }
}());