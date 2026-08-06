(() => {
  const dateKey = "2025.04.12";
  const version = "2025-04-v1";
  const isEnglish = () => new URLSearchParams(location.search).get("lang") === "en";

  const material = {
    tags: [
      "#LENAMIUxICONSIAM",
      "#ICONSIAMSongkran",
      "#สงกรานต์ที่ไอคอนสยาม",
      "#ลีน่าหมิว",
      "#LenaMiu",
      "#lalinalena",
      "#MiuNatsha"
    ],
    official: [
      "https://x.com/LenaMiu_CH3/status/1911021808347955261",
      "https://x.com/LenaMiu_CH3/status/1910991442094465137",
      "https://x.com/LenaMiu_CH3/status/1910992132279878021",
      "https://x.com/LenaMiu_CH3/status/1910993932881703195",
      "https://x.com/LenaMiu_CH3/status/1910998882445648042",
      "https://x.com/LenaMiu_CH3/status/1911005095682359423",
      "https://x.com/LenaMiu_CH3/status/1911008972599173355",
      "https://x.com/LenaMiu_CH3/status/1911054322408009794",
      "https://x.com/LenaMiu_CH3/status/1911055025918410827",
      "https://x.com/LenaMiu_CH3/status/1911056125220511968",
      "https://x.com/LenaMiu_CH3/status/1911061458458206422",
      "https://x.com/LenaMiu_CH3/status/1911121823523328015"
    ],
    x: [
      {
        zh: "開場 / 遊行",
        en: "Opening / Parade",
        links: [
          "https://x.com/rushhour39/status/1911030327109407150",
          "https://x.com/numberx13th/status/1910991791589040391",
          "https://x.com/numberx13th/status/1911005091416392166",
          "https://x.com/ibyibii/status/1911001386533441665",
          "https://x.com/SapphicGardenTH/status/1911024372292391136",
          "https://x.com/enjidesu/status/1910989957176729905",
          "https://x.com/PRSocietyNews/status/1910991745040425443"
        ]
      },
      {
        zh: "兩人互動",
        en: "Lena & Miu interactions",
        links: [
          "https://x.com/rushhour39/status/1911062403124715741",
          "https://x.com/numberx13th/status/1911044672493097415",
          "https://x.com/nonggiiiiiiig/status/1911087541341614519",
          "https://x.com/nonggiiiiiiig/status/1911109370177605858",
          "https://x.com/nonggiiiiiiig/status/1911113492125667783",
          "https://x.com/ibyibii/status/1911074638245085286",
          "https://x.com/ibyibii/status/1911030147442245945",
          "https://x.com/cozyblissy/status/1911044069230522484",
          "https://x.com/twentyfivepx/status/1911065392866640167",
          "https://x.com/jceex_/status/1911032209521483907",
          "https://x.com/mollie8119/status/1911047269476155641",
          "https://x.com/Orangecat0711/status/1911075666394857771",
          "https://x.com/im_sunnieee/status/1911071093764350106",
          "https://x.com/thais_silvers/status/1911114927122915490",
          "https://x.com/sp_nusu/status/1911100527758524489",
          "https://x.com/LenaMiuTH/status/1911081102837747807"
        ]
      },
      {
        zh: "結尾 / 感謝 / 花絮",
        en: "Ending / Thanks / Behind the scenes",
        links: [
          "https://x.com/miunatsha_fans/status/1911342291895124265",
          "https://x.com/nonggiiiiiiig/status/1911301965587628478",
          "https://x.com/nonggiiiiiiig/status/1911664973681410154",
          "https://x.com/nonggiiiiiiig/status/1911706653726265427",
          "https://x.com/numberx13th/status/1911107254071574749",
          "https://x.com/RBJ_SS/status/1911401724436234446"
        ]
      }
    ],
    instagram: [
      {
        zh: "開場 / 遊行",
        en: "Opening / Parade",
        links: [
          "https://www.instagram.com/p/DIWWjyJP-fU/",
          "https://www.instagram.com/p/DIWdw-ZTHBK/",
          "https://www.instagram.com/p/DIWMTXvvZk0/",
          "https://www.instagram.com/p/DIWO2JsMgkJ/",
          "https://www.instagram.com/p/DIWdAC2z4B6/",
          "https://www.instagram.com/p/DIX4cOlTPPY/",
          "https://www.instagram.com/p/DI0RuhRyMzq/"
        ]
      },
      {
        zh: "兩人互動",
        en: "Lena & Miu interactions",
        links: [
          "https://www.instagram.com/p/DIWig9ZzY7u/",
          "https://www.instagram.com/p/DIX8KSGSx1F/",
          "https://www.instagram.com/p/DIYc-4MxKLl/"
        ]
      },
      {
        zh: "其他 / 花絮",
        en: "Other / Behind the scenes",
        links: [
          "https://www.instagram.com/p/DTfo1T0jfoS/",
          "https://www.instagram.com/p/DTfS5RADkqm/",
          "https://www.instagram.com/p/DXBGFhKjfoy/"
        ]
      }
    ],
    tiktok: [
      {
        zh: "開場 / 遊行",
        en: "Opening / Parade",
        links: [
          "https://www.tiktok.com/@glworld_thai___2/video/7492683926750678327",
          "https://www.tiktok.com/@glworld_thai___2/video/7492698842563988742",
          "https://www.tiktok.com/@urfaaver/video/7492423615036607762"
        ]
      },
      {
        zh: "兩人互動",
        en: "Lena & Miu interactions",
        links: [
          "https://www.tiktok.com/@glworld_thai___2/video/7492702272791563575",
          "https://www.tiktok.com/@urfaaver/video/7492822849154141447",
          "https://www.tiktok.com/@drizzlecbx/video/7492491529022491922"
        ]
      },
      {
        zh: "其他 / 花絮",
        en: "Other / Behind the scenes",
        links: [
          "https://www.tiktok.com/@mattel_u/video/7596025659382680850"
        ]
      }
    ]
  };

  const text = () => isEnglish()
    ? {
        official: "Official videos & photos",
        x: "X fan photos",
        tiktok: "TikTok fan photos",
        instagram: "IG fan photos",
        items: count => `${count} items`
      }
    : {
        official: "當天官方影片、照片",
        x: "X 飯拍",
        tiktok: "TikTok 飯拍",
        instagram: "IG 飯拍",
        items: count => `${count} 筆`
      };

  function tagUrl(tag) {
    return "https://x.com/hashtag/" + encodeURIComponent(tag.replace(/^#/, ""));
  }

  function makeLink(url, platform, index) {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.className = "april-material-link";
    anchor.innerHTML = `<span class="april-material-link-number">${String(index + 1).padStart(2, "0")}</span><span>${platform}</span><i>↗</i>`;
    return anchor;
  }

  function sectionHeading(title, count) {
    const heading = document.createElement("div");
    heading.className = "april-material-section-heading";
    heading.innerHTML = `<h3>${title}</h3><span>${text().items(count)}</span>`;
    return heading;
  }

  function makeTags() {
    const section = document.createElement("section");
    section.className = "material-detail-tags april-material-tags";
    section.dataset.materialGroup = "hashtags";
    section.setAttribute("aria-label", "Hashtag");
    section.innerHTML = "<h3>Hashtag</h3><div></div>";
    const box = section.querySelector("div");
    material.tags.forEach(tag => {
      const anchor = document.createElement("a");
      anchor.href = tagUrl(tag);
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = tag;
      box.appendChild(anchor);
    });
    return section;
  }

  function makeOfficial() {
    const section = document.createElement("section");
    section.className = "material-detail-links april-material-section";
    section.dataset.materialGroup = "official";
    section.setAttribute("aria-label", text().official);
    section.appendChild(sectionHeading(text().official, material.official.length));

    const grid = document.createElement("div");
    grid.className = "april-material-grid";
    material.official.forEach((url, index) => grid.appendChild(makeLink(url, isEnglish() ? "Official" : "官方", index)));
    section.appendChild(grid);
    return section;
  }

  function makePlatform(group, title, platformLabel) {
    const groups = material[group];
    const total = groups.reduce((sum, item) => sum + item.links.length, 0);
    const section = document.createElement("section");
    section.className = "material-detail-links april-material-section";
    section.dataset.materialGroup = group;
    section.setAttribute("aria-label", title);
    section.appendChild(sectionHeading(title, total));

    const subgroupList = document.createElement("div");
    subgroupList.className = "april-material-subgroups";

    groups.forEach(item => {
      const details = document.createElement("details");
      details.className = "april-material-subgroup";
      details.open = true;

      const summary = document.createElement("summary");
      summary.innerHTML = `<span>${isEnglish() ? item.en : item.zh}</span><small>${text().items(item.links.length)}</small>`;
      details.appendChild(summary);

      const grid = document.createElement("div");
      grid.className = "april-material-grid";
      item.links.forEach((url, index) => grid.appendChild(makeLink(url, platformLabel, index)));
      details.appendChild(grid);
      subgroupList.appendChild(details);
    });

    section.appendChild(subgroupList);
    return section;
  }

  function apply() {
    const heading = document.querySelector(".material-detail-heading h1");
    if (!heading) return;

    if (heading.textContent.trim() !== dateKey) {
      document.querySelectorAll(".material-detail-event[data-april-materials-version]").forEach(article => {
        delete article.dataset.aprilMaterialsVersion;
        delete article.dataset.customMaterialLayout;
      });
      return;
    }

    document.querySelectorAll(".material-detail-event").forEach(article => {
      if (article.dataset.aprilMaterialsVersion === version) return;

      article.dataset.customMaterialLayout = "true";
      article.querySelector(".material-detail-intro")?.querySelectorAll(":scope > small").forEach(note => note.remove());
      article.querySelectorAll(":scope > .material-detail-tags, :scope > .material-detail-links, :scope > [data-material-group]")
        .forEach(section => section.remove());

      article.appendChild(makeTags());
      article.appendChild(makeOfficial());
      article.appendChild(makePlatform("x", text().x, "X"));
      article.appendChild(makePlatform("tiktok", text().tiktok, "TikTok"));
      article.appendChild(makePlatform("instagram", text().instagram, "IG"));
      article.dataset.aprilMaterialsVersion = version;
    });
  }

  if (!document.getElementById("april-material-layout-style")) {
    const style = document.createElement("style");
    style.id = "april-material-layout-style";
    style.textContent = `
      .april-material-section{display:grid;gap:1rem}
      .april-material-section-heading{display:flex;align-items:center;justify-content:space-between;gap:1rem}
      .april-material-section-heading h3{margin:0}
      .april-material-section-heading>span{flex:none;padding:.28rem .65rem;border:1px solid rgba(128,87,67,.2);border-radius:999px;font-size:.76rem;letter-spacing:.04em;opacity:.72}
      .april-material-subgroups{display:grid;gap:.8rem}
      .april-material-subgroup{padding:.85rem 1rem;border:1px solid rgba(128,87,67,.15);border-radius:18px;background:rgba(255,255,255,.46)}
      .april-material-subgroup summary{display:flex;align-items:center;justify-content:space-between;gap:1rem;cursor:pointer;list-style:none;font-weight:600;letter-spacing:.03em}
      .april-material-subgroup summary::-webkit-details-marker{display:none}
      .april-material-subgroup summary::before{content:'＋';width:1.3rem;height:1.3rem;display:grid;place-items:center;border:1px solid rgba(128,87,67,.2);border-radius:50%;font-size:.78rem;font-weight:400}
      .april-material-subgroup[open] summary::before{content:'−'}
      .april-material-subgroup summary small{margin-left:auto;font-size:.74rem;font-weight:400;opacity:.58}
      .april-material-subgroup .april-material-grid{margin-top:.8rem}
      .april-material-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.55rem}
      .april-material-link{display:flex;align-items:center;gap:.65rem;min-width:0;padding:.72rem .78rem;border:1px solid rgba(128,87,67,.14);border-radius:13px;background:rgba(255,250,251,.82);text-decoration:none;transition:transform .18s ease,border-color .18s ease,background .18s ease}
      .april-material-link:hover{transform:translateY(-2px);border-color:rgba(128,87,67,.38);background:#fff}
      .april-material-link-number{display:grid;place-items:center;width:1.75rem;height:1.75rem;flex:none;border-radius:50%;background:rgba(176,140,118,.13);font-size:.7rem;letter-spacing:.04em}
      .april-material-link>span:nth-child(2){overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.84rem}
      .april-material-link i{margin-left:auto;font-style:normal;opacity:.55}
      @media(max-width:640px){.april-material-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.april-material-subgroup{padding:.75rem}.april-material-link{padding:.65rem}.april-material-section-heading{align-items:flex-start}}
      @media(max-width:400px){.april-material-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
  addEventListener("DOMContentLoaded", apply);
  apply();
})();
