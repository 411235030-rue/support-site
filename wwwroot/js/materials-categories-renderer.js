(() => {
  const version = "2025-02-06-categories-v1";
  const isEnglish = () => new URLSearchParams(location.search).get("lang") === "en";
  const labels = () => isEnglish()
    ? { official:"Official videos & photos", x:"X fan photos", tiktok:"TikTok fan photos", instagram:"IG fan photos", officialLink:"Official", xLink:"X fan photo", tiktokLink:"TikTok fan photo", instagramLink:"IG fan photo", empty:"Not added yet" }
    : { official:"當天官方影片、照片", x:"X 飯拍", tiktok:"TikTok 飯拍", instagram:"IG 飯拍", officialLink:"官方", xLink:"X 飯拍", tiktokLink:"TikTok 飯拍", instagramLink:"IG 飯拍", empty:"尚未整理" };

  function tagUrl(tag) {
    return "https://x.com/hashtag/" + encodeURIComponent(tag.replace(/^#/, ""));
  }

  function makeAnchor(url, label, number) {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.innerHTML = `<span>${label} ${String(number).padStart(2, "0")}</span><i>↗</i>`;
    return anchor;
  }

  function makeTags(item) {
    const section = document.createElement("section");
    section.className = "material-detail-tags";
    section.dataset.materialGroup = "hashtags";
    section.setAttribute("aria-label", "Hashtag");
    section.innerHTML = "<h3>Hashtag</h3><div></div>";
    const box = section.querySelector("div");
    item.tags.forEach(tag => {
      const anchor = document.createElement("a");
      anchor.href = tagUrl(tag);
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = tag;
      box.appendChild(anchor);
    });
    return section;
  }

  function makeSimpleSection(group, title, linkLabel, urls) {
    const section = document.createElement("section");
    section.className = "material-detail-links";
    section.dataset.materialGroup = group;
    section.setAttribute("aria-label", title);
    const heading = document.createElement("h3");
    heading.textContent = title;
    section.appendChild(heading);

    if (!urls.length) {
      const empty = document.createElement("p");
      empty.className = "categorized-material-empty";
      empty.textContent = labels().empty;
      section.appendChild(empty);
      return section;
    }

    const grid = document.createElement("div");
    grid.className = "categorized-material-link-grid";
    urls.forEach((url, index) => grid.appendChild(makeAnchor(url, linkLabel, index + 1)));
    section.appendChild(grid);
    return section;
  }

  function makePlatformSection(group, title, linkLabel, groups) {
    const section = document.createElement("section");
    section.className = "material-detail-links categorized-material-platform";
    section.dataset.materialGroup = group;
    section.setAttribute("aria-label", title);
    const heading = document.createElement("h3");
    heading.textContent = title;
    section.appendChild(heading);

    const total = groups.reduce((sum, item) => sum + item.links.length, 0);
    if (!total) {
      const empty = document.createElement("p");
      empty.className = "categorized-material-empty";
      empty.textContent = labels().empty;
      section.appendChild(empty);
      return section;
    }

    const body = document.createElement("div");
    body.className = "categorized-material-platform-body";
    let number = 1;

    groups.forEach(item => {
      if (!item.links.length) return;
      const subgroup = document.createElement("div");
      subgroup.className = "categorized-material-subgroup";
      const subgroupTitle = isEnglish() ? item.en : item.zh;

      if (subgroupTitle) {
        const h4 = document.createElement("h4");
        h4.textContent = subgroupTitle;
        subgroup.appendChild(h4);
      }

      const grid = document.createElement("div");
      grid.className = "categorized-material-link-grid";
      item.links.forEach(url => {
        grid.appendChild(makeAnchor(url, linkLabel, number));
        number += 1;
      });
      subgroup.appendChild(grid);
      body.appendChild(subgroup);
    });

    section.appendChild(body);
    return section;
  }

  function apply() {
    const heading = document.querySelector(".material-detail-heading h1");
    const materials = window.MaterialCategories2025;
    if (!heading || !materials) return;

    const dateKey = heading.textContent.trim();
    const item = materials[dateKey];

    if (!item) {
      document.querySelectorAll(".material-detail-event[data-categorized-materials-key]").forEach(article => {
        delete article.dataset.categorizedMaterialsKey;
        delete article.dataset.customMaterialLayout;
      });
      return;
    }

    const renderKey = `${version}:${dateKey}:${isEnglish() ? "en" : "zh"}`;
    document.querySelectorAll(".material-detail-event").forEach(article => {
      if (article.dataset.categorizedMaterialsKey === renderKey) return;
      article.dataset.customMaterialLayout = "true";
      article.querySelector(".material-detail-intro")?.querySelectorAll(":scope > small").forEach(note => note.remove());
      article.querySelectorAll(":scope > .material-detail-tags, :scope > .material-detail-links, :scope > [data-material-group]")
        .forEach(section => section.remove());

      const text = labels();
      article.appendChild(makeTags(item));
      article.appendChild(makeSimpleSection("official", text.official, text.officialLink, item.official));
      article.appendChild(makePlatformSection("x", text.x, text.xLink, item.x));
      article.appendChild(makePlatformSection("tiktok", text.tiktok, text.tiktokLink, item.tiktok));
      article.appendChild(makePlatformSection("instagram", text.instagram, text.instagramLink, item.instagram));
      article.dataset.categorizedMaterialsKey = renderKey;
    });
  }

  if (!document.getElementById("categorized-materials-style")) {
    const style = document.createElement("style");
    style.id = "categorized-materials-style";
    style.textContent = `
      .categorized-material-platform > .categorized-material-platform-body{display:block}
      .categorized-material-subgroup{margin-top:30px}
      .categorized-material-subgroup:first-child{margin-top:0}
      .categorized-material-subgroup h4{margin:0 0 10px;color:var(--brown);font-family:"Noto Serif TC","Cormorant Garamond",serif;font-size:17px;font-weight:500;letter-spacing:.06em}
      .categorized-material-link-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:56px}
      .categorized-material-empty{margin:0;color:var(--deep-brown);font-family:"Noto Serif TC",serif;font-size:15px;opacity:.55}
      @media(max-width:760px){
        .categorized-material-link-grid{grid-template-columns:1fr}
        .categorized-material-link-grid a:nth-last-child(-n + 2){border-bottom:0}
        .categorized-material-link-grid a:last-child{border-bottom:1px solid var(--line)}
      }
    `;
    document.head.appendChild(style);
  }

  new MutationObserver(apply).observe(document.documentElement, { childList:true, subtree:true });
  addEventListener("DOMContentLoaded", apply);
  apply();
})();
