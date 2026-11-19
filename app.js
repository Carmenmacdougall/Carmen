// ============================================================
// app.js — what your site DOES.
// Plain JavaScript, no libraries, no installs.
// It uses STARTUP and LISTINGS from data.js (loaded first).
// ============================================================

(function () {
  "use strict";

  // ----------------------------------------------------------
  // 1. Saving things in the browser (localStorage).
  //    This only remembers things on THIS browser on THIS device.
  //    Your teammates and your customers will NOT see it.
  //    A real product would need a server and a database for that.
  // ----------------------------------------------------------
  const storage = {
    get: function (key, fallback) {
      try {
        const saved = localStorage.getItem(key);
        return saved === null ? fallback : JSON.parse(saved);
      } catch (error) {
        return fallback; // storage blocked or broken: just carry on
      }
    },
    set: function (key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // storage blocked (e.g. private window): ignore
      }
    }
  };

  let savedIds = storage.get("savedIds", []);

  // ----------------------------------------------------------
  // 2. Put the startup's name and pitch on the page.
  // ----------------------------------------------------------
  document.title = STARTUP.name;
  document.getElementById("brand-name").textContent = STARTUP.name;
  document.getElementById("tagline").textContent = STARTUP.tagline;
  document.getElementById("pitch").textContent = STARTUP.pitch;

  // ----------------------------------------------------------
  // 3. Views: show one section at a time, based on the #link in the address bar.
  // ----------------------------------------------------------
  function showView() {
    const requested = (window.location.hash || "#home").slice(1);
    const views = document.querySelectorAll("[data-view]");
    const exists = Array.prototype.some.call(views, function (view) {
      return view.id === requested;
    });
    const current = exists ? requested : "home";

    views.forEach(function (view) {
      view.hidden = view.id !== current;
    });

    document.querySelectorAll("nav a").forEach(function (link) {
      if (link.getAttribute("href") === "#" + current) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", showView);

  // ----------------------------------------------------------
  // 4. Explore page: build one card per listing.
  //    We use textContent (not innerHTML) so text is always shown
  //    as text — a basic security habit.
  // ----------------------------------------------------------
  const grid = document.getElementById("listing-grid");
  const searchBox = document.getElementById("search-box");
  const bedroomFilter = document.getElementById("bedroom-filter");
  const rentFilter = document.getElementById("rent-filter");
  const showSavedButton = document.getElementById("show-saved");
  const emptyMessage = document.getElementById("empty-message");
  const savedCount = document.getElementById("saved-count");
  const listingCount = document.getElementById("listing-count");
  let showSavedOnly = false;

  function makeCard(item) {
    const card = document.createElement("article");
    card.className = "card listing-card";

    const image = document.createElement("div");
    image.className = "listing-image " + item.accent;
    image.setAttribute("role", "img");
    image.setAttribute("aria-label", "Illustration of " + item.name);

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = item.category;

    const content = document.createElement("div");
    content.className = "listing-content";

    const title = document.createElement("h2");
    title.textContent = item.name;

    const text = document.createElement("p");
    text.textContent = item.description;

    const meta = document.createElement("p");
    meta.className = "listing-meta";
    meta.textContent = item.walk + " min walk · 12 month lease";

    const footer = document.createElement("div");
    footer.className = "listing-footer";

    const rent = document.createElement("span");
    rent.className = "rent";
    rent.append("$" + item.rent.toLocaleString());
    const perMonth = document.createElement("small");
    perMonth.textContent = " /mo";
    rent.append(perMonth);

    const isSaved = savedIds.indexOf(item.id) !== -1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "button secondary";
    button.textContent = isSaved ? "Saved ✓" : "Save";
    button.setAttribute("aria-pressed", isSaved ? "true" : "false");
    button.addEventListener("click", function () {
      toggleSaved(item.id);
    });

    footer.append(rent, button);
    content.append(tag, title, text, meta, footer);
    card.append(image, content);
    return card;
  }

  function toggleSaved(id) {
    if (savedIds.indexOf(id) === -1) {
      savedIds.push(id);
    } else {
      savedIds = savedIds.filter(function (savedId) { return savedId !== id; });
    }
    storage.set("savedIds", savedIds);
    renderListings();
  }

  function renderListings() {
    const query = searchBox.value.trim().toLowerCase();
    const bedroom = bedroomFilter.value;
    const rentCap = rentFilter.value;
    const matches = LISTINGS.filter(function (item) {
      const text = (item.name + " " + item.category + " " + item.description).toLowerCase();
      const matchesSearch = text.indexOf(query) !== -1;
      const bedrooms = parseInt(item.category, 10);
      const matchesBedroom =
        bedroom === "all" ||
        (bedroom === "3" ? bedrooms >= 3 : bedrooms === parseInt(bedroom, 10));
      const matchesRent = rentCap === "all" || item.rent < parseInt(rentCap, 10);
      const matchesSaved = !showSavedOnly || savedIds.indexOf(item.id) !== -1;
      return matchesSearch && matchesBedroom && matchesRent && matchesSaved;
    });

    grid.replaceChildren.apply(grid, matches.map(makeCard));
    emptyMessage.hidden = matches.length > 0;
    listingCount.textContent = matches.length + " homes found";
    savedCount.textContent = savedIds.length === 0
      ? "Tap Save on anything you like."
      : "You have " + savedIds.length + " saved home(s).";
  }

  searchBox.addEventListener("input", renderListings);
  bedroomFilter.addEventListener("change", renderListings);
  rentFilter.addEventListener("change", renderListings);
  showSavedButton.addEventListener("click", function () {
    showSavedOnly = !showSavedOnly;
    showSavedButton.setAttribute("aria-pressed", showSavedOnly ? "true" : "false");
    showSavedButton.textContent = showSavedOnly ? "Show all" : "Show saved";
    renderListings();
  });

  const joinNetworkButton = document.getElementById("join-network");
  const networkPanel = joinNetworkButton.closest(".network-panel");
  let networkJoined = storage.get("networkJoined", false);

  function renderNetwork() {
    if (networkJoined) {
      joinNetworkButton.textContent = "You joined ✓";
      joinNetworkButton.disabled = true;
      networkPanel.classList.add("joined");
    }
  }

  joinNetworkButton.addEventListener("click", function () {
    networkJoined = true;
    storage.set("networkJoined", true);
    document.getElementById("student-stat").textContent = "1,281";
    document.getElementById("review-stat").textContent = "431";
    renderNetwork();
  });

  // ----------------------------------------------------------
  // 5. Start up.
  // ----------------------------------------------------------
  renderListings();
  renderNetwork();
  showView();
})();
