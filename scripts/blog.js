(function () {
  var posts = (window.flowtimeBlogPosts || []).slice().sort(function (a, b) {
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
    return new Intl.DateTimeFormat("en", {
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
      var label = tag === "all" ? "All" : tag;
      return '<button class="blog-tag-button" type="button" data-tag="' + tag + '" aria-pressed="' + (tag === activeTag) + '">' + label + "</button>";
    }).join("");
  }

  function matches(post, query) {
    var haystack = [post.title, post.description].concat(post.tags).join(" ").toLowerCase();
    return haystack.indexOf(query) >= 0;
  }

  function card(post) {
    var primaryTag = post.tags[0] || "Flowtime";
    return [
      '<article class="blog-card">',
      '<div class="blog-card-meta">',
      "<span>" + formatDate(post.date) + "</span>",
      "<span>" + post.readingTime + "</span>",
      '<span class="article-tag">' + primaryTag + "</span>",
      "</div>",
      '<h2><a href="' + post.slug + '/index.html">' + post.title + "</a></h2>",
      "<p>" + post.description + "</p>",
      '<a class="blog-card-link" href="' + post.slug + '/index.html">Read article <span aria-hidden="true">&rarr;</span></a>',
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
    count.textContent = visible.length + (visible.length === 1 ? " article" : " articles");
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
}());
