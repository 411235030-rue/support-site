(() => {
  const april = {"2025.04.12":{"tags":["#LENAMIUxICONSIAM","#ICONSIAMSongkran","#สงกรานต์ที่ไอคอนสยาม","#ลีน่าหมิว","#LenaMiu","#lalinalena","#MiuNatsha"],"official":["https://x.com/LenaMiu_CH3/status/1911021808347955261","https://x.com/LenaMiu_CH3/status/1910991442094465137","https://x.com/LenaMiu_CH3/status/1910992132279878021","https://x.com/LenaMiu_CH3/status/1910993932881703195","https://x.com/LenaMiu_CH3/status/1910998882445648042","https://x.com/LenaMiu_CH3/status/1911005095682359423","https://x.com/LenaMiu_CH3/status/1911008972599173355","https://x.com/LenaMiu_CH3/status/1911054322408009794","https://x.com/LenaMiu_CH3/status/1911055025918410827","https://x.com/LenaMiu_CH3/status/1911056125220511968","https://x.com/LenaMiu_CH3/status/1911061458458206422","https://x.com/LenaMiu_CH3/status/1911121823523328015"],"x":["https://x.com/rushhour39/status/1911030327109407150","https://x.com/numberx13th/status/1910991791589040391","https://x.com/numberx13th/status/1911005091416392166","https://x.com/ibyibii/status/1911001386533441665","https://x.com/SapphicGardenTH/status/1911024372292391136","https://x.com/enjidesu/status/1910989957176729905","https://x.com/PRSocietyNews/status/1910991745040425443","https://x.com/rushhour39/status/1911062403124715741","https://x.com/numberx13th/status/1911044672493097415","https://x.com/nonggiiiiiiig/status/1911087541341614519","https://x.com/nonggiiiiiiig/status/1911109370177605858","https://x.com/nonggiiiiiiig/status/1911113492125667783","https://x.com/ibyibii/status/1911074638245085286","https://x.com/ibyibii/status/1911030147442245945","https://x.com/cozyblissy/status/1911044069230522484","https://x.com/twentyfivepx/status/1911065392866640167","https://x.com/jceex_/status/1911032209521483907","https://x.com/mollie8119/status/1911047269476155641","https://x.com/Orangecat0711/status/1911075666394857771","https://x.com/im_sunnieee/status/1911071093764350106","https://x.com/thais_silvers/status/1911114927122915490","https://x.com/sp_nusu/status/1911100527758524489","https://x.com/LenaMiuTH/status/1911081102837747807","https://x.com/miunatsha_fans/status/1911342291895124265","https://x.com/nonggiiiiiiig/status/1911301965587628478","https://x.com/nonggiiiiiiig/status/1911664973681410154","https://x.com/nonggiiiiiiig/status/1911706653726265427","https://x.com/numberx13th/status/1911107254071574749","https://x.com/RBJ_SS/status/1911401724436234446"],"tiktok":["https://www.tiktok.com/@glworld_thai___2/video/7492683926750678327","https://www.tiktok.com/@glworld_thai___2/video/7492698842563988742","https://www.tiktok.com/@urfaaver/video/7492423615036607762","https://www.tiktok.com/@glworld_thai___2/video/7492702272791563575","https://www.tiktok.com/@urfaaver/video/7492822849154141447","https://www.tiktok.com/@drizzlecbx/video/7492491529022491922","https://www.tiktok.com/@mattel_u/video/7596025659382680850"],"instagram":["https://www.instagram.com/p/DIWWjyJP-fU/","https://www.instagram.com/p/DIWdw-ZTHBK/","https://www.instagram.com/p/DIWMTXvvZk0/","https://www.instagram.com/p/DIWO2JsMgkJ/","https://www.instagram.com/p/DIWdAC2z4B6/","https://www.instagram.com/p/DIX4cOlTPPY/","https://www.instagram.com/p/DI0RuhRyMzq/","https://www.instagram.com/p/DIWig9ZzY7u/","https://www.instagram.com/p/DIX8KSGSx1F/","https://www.instagram.com/p/DIYc-4MxKLl/","https://www.instagram.com/p/DTfo1T0jfoS/","https://www.instagram.com/p/DTfS5RADkqm/","https://www.instagram.com/p/DXBGFhKjfoy/"]}};
  const version = "2025-04-v2";
  const isEnglish = () => new URLSearchParams(location.search).get("lang") === "en";
  function tagUrl(tag) { return "https://x.com/hashtag/" + encodeURIComponent(tag.replace(/^#/, "")); }
  function makeAnchor(url, label) {
    const anchor = document.createElement("a");
    anchor.href = url; anchor.target = "_blank"; anchor.rel = "noopener noreferrer";
    anchor.innerHTML = `<span>${label}</span><i>↗</i>`;
    return anchor;
  }
  function numberedLabel(group, index) {
    const n = String(index + 1).padStart(2, "0");
    if (isEnglish()) {
      if (group === "official") return `Official ${n}`;
      if (group === "x") return `X fan photo ${n}`;
      if (group === "tiktok") return `TikTok fan photo ${n}`;
      return `IG fan photo ${n}`;
    }
    if (group === "official") return `官方 ${n}`;
    if (group === "x") return `X 飯拍 ${n}`;
    if (group === "tiktok") return `TikTok 飯拍 ${n}`;
    return `IG 飯拍 ${n}`;
  }
  function apply() {
    const heading = document.querySelector(".material-detail-heading h1");
    if (!heading) return;
    const item = april[heading.textContent.trim()];
    if (!item) return;
    document.querySelectorAll(".material-detail-event").forEach(article => {
      if (article.dataset.aprilMaterialsVersion === version) return;
      delete article.dataset.customMaterialLayout;
      article.querySelectorAll(":scope > .material-detail-tags, :scope > .material-detail-links, :scope > [data-material-group]").forEach(section => section.remove());
      const tags = document.createElement("section");
      tags.className = "material-detail-tags"; tags.setAttribute("aria-label", "Hashtag");
      tags.innerHTML = "<h3>Hashtag</h3><div></div>";
      const tagBox = tags.querySelector("div");
      item.tags.forEach(tag => {
        const anchor = document.createElement("a");
        anchor.href = tagUrl(tag); anchor.target = "_blank"; anchor.rel = "noopener noreferrer"; anchor.textContent = tag;
        tagBox.appendChild(anchor);
      });
      article.appendChild(tags);
      const links = document.createElement("section");
      links.className = "material-detail-links";
      links.setAttribute("aria-label", isEnglish() ? "Material links" : "物料連結");
      links.innerHTML = `<h3>${isEnglish() ? "Material links" : "物料連結"}</h3><div></div>`;
      const linkBox = links.querySelector("div");
      ["official", "x", "tiktok", "instagram"].forEach(group => item[group].forEach((url, index) => linkBox.appendChild(makeAnchor(url, numberedLabel(group, index)))));
      article.appendChild(links);
      article.dataset.aprilMaterialsVersion = version;
    });
  }
  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
  addEventListener("DOMContentLoaded", apply);
  apply();
})();