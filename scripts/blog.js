(function () {
  var category = document.body.dataset.blogCategory;
  var posts = (window.flowtimeBlogPosts || []).filter(function (post) {
    return !category || post.category === category;
  }).slice().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  var grid = document.querySelector("[data-blog-grid]");
  var tags = document.querySelector("[data-blog-tags]");
  var search = document.querySelector("[data-blog-search]");
  var sort = document.querySelector("[data-blog-sort]");
  var count = document.querySelector("[data-blog-count]");
  var empty = document.querySelector("[data-blog-empty]");
  var activeTag = "all";

  if (!grid || !tags || !search || !sort || !count || !empty) {
    return;
  }

  function formatDate(value) {
    var loc = window.flowtimeLocale || "en";
    return new Intl.DateTimeFormat(loc, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(new Date(value + "T00:00:00"));
  }

  function uniqueTags() {
    var allTags = [];
    posts.forEach(function (post) {
      post.tags.forEach(function (tag) {
        if (allTags.indexOf(tag) < 0) {
          allTags.push(tag);
        }
      });
    });
    return allTags.sort();
  }

  function renderTags() {
    var items = ["all"].concat(uniqueTags());
    tags.innerHTML = items.map(function (tag) {
      var label = tag === "all" ? (window.t("blog.tag.all") || "All") : (window.t("blog.tag." + tag) || tag);
      return '<button class="blog-tag-button" type="button" data-tag="' + tag + '" aria-pressed="' + (tag === activeTag) + '">' + label + "</button>";
    }).join("");
  }

  function matches(post, query) {
    var localizedTitle = window.t("blog.title." + post.slug) || post.title;
    var localizedDesc = window.t("blog.desc." + post.slug) || post.description;
    var haystack = [localizedTitle, localizedDesc].concat(post.tags).join(" ").toLowerCase();
    return haystack.indexOf(query) >= 0;
  }

  function card(post) {
    var primaryTag = post.tags[0] || "Flowtime";
    var localizedTag = window.t("blog.tag." + primaryTag) || primaryTag;
    var localizedTitle = window.t("blog.title." + post.slug) || post.title;
    var localizedDesc = window.t("blog.desc." + post.slug) || post.description;
    var readText = window.t("blog.read_article") || "Read article";
    
    var readingTimeText = post.readingTime;
    if (readingTimeText && readingTimeText.indexOf("min read") >= 0) {
      var mins = readingTimeText.split(" ")[0];
      readingTimeText = window.t("blog.reading_time", { minutes: mins }) || readingTimeText;
    } else if (readingTimeText) {
      readingTimeText = window.t("blog.reading_time", { minutes: readingTimeText }) || (readingTimeText + " min read");
    }

    return [
      '<article class="blog-card">',
      '<div class="blog-card-meta">',
      "<span>" + formatDate(post.date) + "</span>",
      "<span>" + readingTimeText + "</span>",
      '<span class="article-tag">' + localizedTag + "</span>",
      "</div>",
      '<h2><a href="' + post.slug + '/index.html">' + localizedTitle + "</a></h2>",
      "<p>" + localizedDesc + "</p>",
      '<a class="blog-card-link" href="' + post.slug + '/index.html">' + readText + ' <span aria-hidden="true">&rarr;</span></a>',
      "</article>"
    ].join("");
  }

  function renderPosts() {
    var query = search.value.trim().toLowerCase();
    var visible = posts.filter(function (post) {
      var tagMatch = activeTag === "all" || post.tags.indexOf(activeTag) >= 0;
      return tagMatch && matches(post, query);
    }).sort(function (a, b) {
      var newest = new Date(b.date) - new Date(a.date);
      return sort.value === "oldest" ? -newest : newest;
    });

    grid.innerHTML = visible.map(card).join("");
    
    var countText = "";
    if (visible.length === 1) {
      countText = window.t("blog.count_single") || "1 article";
    } else {
      countText = (window.t("blog.count_multiple") || "{count} articles").replace("{count}", visible.length);
    }
    count.textContent = countText;
    empty.hidden = visible.length > 0;
  }

  renderTags();
  renderPosts();

  tags.addEventListener("click", function (event) {
    var button = event.target.closest("[data-tag]");
    if (!button) {
      return;
    }
    activeTag = button.dataset.tag;
    renderTags();
    renderPosts();
  });

  search.addEventListener("input", renderPosts);
  sort.addEventListener("change", renderPosts);

  window.flowtimeRenderPosts = function() {
    renderTags();
    renderPosts();
  };
}());
