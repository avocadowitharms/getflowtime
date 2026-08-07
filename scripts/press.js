(function () {
  'use strict';

  var config = window.FlowtimePressKitConfig || {};

  // Register press kit translations into site i18n system
  if (config.i18n && typeof window.flowtimeAddTranslations === 'function') {
    for (var lang in config.i18n) {
      window.flowtimeAddTranslations(lang, config.i18n[lang]);
    }
  }

  function applyLocalization() {
    var locale = window.flowtimeLocale || localStorage.getItem("flowtime-locale") || "en";
    if (["en", "de", "fr"].indexOf(locale) < 0) {
      locale = "en";
    }

    // Dynamic ZIP and Fact Sheet download link localization
    var pack = (config.zipPacks && config.zipPacks[locale]) ? config.zipPacks[locale] : (config.zipPacks && config.zipPacks.en);
    if (pack) {
      document.querySelectorAll("[data-press-zip-link]").forEach(function (el) {
        el.setAttribute("href", pack.url);
        el.setAttribute("download", pack.filename);
      });
      document.querySelectorAll("[data-press-factsheet-link]").forEach(function (el) {
        el.setAttribute("href", pack.factsheetUrl);
        el.setAttribute("download", pack.factsheetFilename);
      });
    }

    if (typeof window.t === "function") {
      document.querySelectorAll("[data-i18n]").forEach(function (element) {
        var key = element.getAttribute("data-i18n");
        var value = window.t(key);
        if (value && value !== key) {
          element.textContent = value;
        }
      });
    }
  }

  function announce(message) {
    var announcer = document.getElementById('a11y-announcer');
    if (announcer) {
      announcer.textContent = message;
    }
  }

  function setupCopyButtons() {
    var copyButtons = document.querySelectorAll('[data-copy-target]');
    copyButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var targetId = button.getAttribute('data-copy-target');
        var targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        var textToCopy = targetElement.textContent || targetElement.innerText;
        var copiedLabel = (typeof window.t === 'function' ? window.t('press.copy.copied') : null) || 'Copied!';

        navigator.clipboard.writeText(textToCopy).then(function () {
          var originalText = button.innerHTML;
          button.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> ' + copiedLabel;
          button.style.background = 'var(--ink)';
          button.style.color = 'var(--background)';
          announce('Description copied to clipboard');

          setTimeout(function () {
            button.innerHTML = originalText;
            button.style.background = '';
            button.style.color = '';
          }, 2200);
        }).catch(function (_err) {
          // Fallback if clipboard API is blocked
          var textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            button.textContent = copiedLabel;
            setTimeout(function () { button.textContent = 'Copy'; }, 2000);
          } catch (e) {
            console.error('Copy failed', e);
          }
          document.body.removeChild(textarea);
        });
      });
    });
  }

  function setupScreenshotModal() {
    var modal = document.getElementById('press-modal');
    if (!modal) return;

    var modalImg = document.getElementById('press-modal-img');
    var modalCaption = document.getElementById('press-modal-caption');
    var closeBtn = document.getElementById('press-modal-close');
    var lastFocusedElement = null;

    function openModal(imgSrc, captionText) {
      lastFocusedElement = document.activeElement;
      modalImg.src = imgSrc;
      modalImg.alt = captionText || 'Flowtime screenshot';
      modalCaption.textContent = captionText || '';
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      closeBtn.focus();
      document.body.style.overflow = 'hidden';
      announce('Screenshot modal opened. Press Escape to close.');
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      modalImg.src = '';
      document.body.style.overflow = '';
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
      announce('Screenshot modal closed.');
    }

    var galleryItems = document.querySelectorAll('[data-gallery-item]');
    galleryItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var fullUrl = item.getAttribute('data-full-url');
        var caption = item.getAttribute('data-caption');
        openModal(fullUrl, caption);
      });

      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var fullUrl = item.getAttribute('data-full-url');
          var caption = item.getAttribute('data-caption');
          openModal(fullUrl, caption);
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  function setupEmbargoArea() {
    // Extensible embargo system hook:
    if (config.embargo && config.embargo.enabled) {
      var embargoSection = document.getElementById('press-embargo-area');
      if (embargoSection) {
        embargoSection.style.display = 'block';
      }
    }
  }

  // Register translations immediately
  if (config.i18n && typeof window.flowtimeAddTranslations === 'function') {
    for (var l in config.i18n) {
      window.flowtimeAddTranslations(l, config.i18n[l]);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLocalization();
    setupCopyButtons();
    setupScreenshotModal();
    setupEmbargoArea();
  });

}());
