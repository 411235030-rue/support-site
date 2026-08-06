(() => {
  const isEnglish = () => new URLSearchParams(location.search).get("lang") === "en";
  const pending = new WeakSet();

  const labels = () => isEnglish()
    ? {
        hashtags: "Hashtag",
        official: "Official videos & photos",
        x: "X fan photos",
        tiktok: "TikTok fan photos",
        instagram: "IG fan photos",
        empty: "Not added yet"
      }
    : {
        hashtags: "Hashtag",
        official: "當天官方影片、照片",
        x: "X 飯拍",
        tiktok: "TikTok 飯拍",
        instagram: "IG 飯拍",
        empty: "尚未整理"
      };

  function uniqueAnchors(anchors, keySelector) {
    const seen = new Set();
    return anchors.filter(anchor => {
      const key = keySelector(anchor);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function linkCategory(anchor) {
    const text = anchor.textContent.trim();
    const url = new URL(anchor.href, location.href);
    const host = url.hostname.toLowerCase().replace(/^www\./, "");

    if (/官方|official/i.test(text)) return "official";
    if (host === "tiktok.com" || host.endsWith(".tiktok.com")) return "tiktok";
    if (host === "instagram.com" || host.endsWith(".instagram.com")) return "instagram";
    if (host === "x.com" || host.endsWith(".x.com") || host === "twitter.com" || host.endsWith(".twitter.com")) return "x";
    return "official";
  }

  function makeSection(group, title, anchors, tagStyle) {
    const section = document.createElement("section");
    section.dataset.materialGroup = group;
    section.className = tagStyle ? "material-detail-tags" : "material-detail-links";
    section.setAttribute("aria-label", title);

    const heading = document.createElement("h3");
    heading.textContent = title;
    section.appendChild(heading);

    if (anchors.length) {
      const box = document.createElement("div");
      anchors.forEach(anchor => box.appendChild(anchor));
      section.appendChild(box);
    } else {
      const empty = document.createElement("p");
      empty.className = "material-group-empty";
      empty.textContent = labels().empty;
      section.appendChild(empty);
    }

    return section;
  }

  function normalizeArticle(article) {
    const intro = article.querySelector(".material-detail-intro");
    if (!intro) return;

    intro.querySelectorAll(":scope > small").forEach(note => note.remove());

    if (article.dataset.customMaterialLayout === "true") return;

    const tagAnchors = uniqueAnchors(
      [...article.querySelectorAll(".material-detail-tags a, [data-material-group='hashtags'] a")],
      anchor => `${anchor.textContent.trim()}|${anchor.href}`
    );
    const tagSet = new Set(tagAnchors);
    const links = uniqueAnchors(
      [...article.querySelectorAll("section a")].filter(anchor => !tagSet.has(anchor)),
      anchor => anchor.href
    );

    const grouped = { official: [], x: [], tiktok: [], instagram: [] };
    links.forEach(anchor => grouped[linkCategory(anchor)].push(anchor));

    const signature = JSON.stringify({
      tags: tagAnchors.map(anchor => [anchor.textContent.trim(), anchor.href]),
      official: grouped.official.map(anchor => [anchor.textContent.trim(), anchor.href]),
      x: grouped.x.map(anchor => [anchor.textContent.trim(), anchor.href]),
      tiktok: grouped.tiktok.map(anchor => [anchor.textContent.trim(), anchor.href]),
      instagram: grouped.instagram.map(anchor => [anchor.textContent.trim(), anchor.href]),
      lang: isEnglish() ? "en" : "zh"
    });

    const currentGroups = [...article.querySelectorAll(":scope > [data-material-group]")]
      .map(section => section.dataset.materialGroup)
      .join(",");
    if (article.dataset.materialLayoutSignature === signature &&
        currentGroups === "hashtags,official,x,tiktok,instagram") {
      return;
    }

    article.querySelectorAll(":scope > .material-detail-tags, :scope > .material-detail-links, :scope > [data-material-group]")
      .forEach(section => section.remove());

    const text = labels();
    article.appendChild(makeSection("hashtags", text.hashtags, tagAnchors, true));
    article.appendChild(makeSection("official", text.official, grouped.official, false));
    article.appendChild(makeSection("x", text.x, grouped.x, false));
    article.appendChild(makeSection("tiktok", text.tiktok, grouped.tiktok, false));
    article.appendChild(makeSection("instagram", text.instagram, grouped.instagram, false));
    article.dataset.materialLayoutSignature = signature;
  }

  function schedule(article) {
    if (!article || pending.has(article)) return;
    pending.add(article);
    requestAnimationFrame(() => {
      pending.delete(article);
      normalizeArticle(article);
    });
  }

  function enhance() {
    document.querySelectorAll(".material-detail-event").forEach(schedule);
  }

  const style = document.createElement("style");
  style.textContent = `.material-group-empty{margin:0;opacity:.56;font-size:.88rem;letter-spacing:.03em}`;
  document.head.appendChild(style);

  new MutationObserver(enhance).observe(document.documentElement, { childList: true, subtree: true });
  addEventListener("DOMContentLoaded", enhance);
  enhance();
})();
