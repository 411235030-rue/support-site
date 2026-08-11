(function () {
    const JANUARY_2026_ITEMS = [
        { day: 2, person: "LENA", typeZh: "直播・中字回放", typeEn: "Live · Chinese-subtitled replay", titleZh: "TikTok Live", titleEn: "TikTok Live", links: [["Bilibili（中字回放）", "https://www.bilibili.com/video/BV1RBvdBqEPz/"]] },
        { day: 14, person: "LENAMIU", typeZh: "文化活動・Fashion Show", typeEn: "Cultural event · Fashion show", titleZh: "Royal Thai Aesthetic 皇家傳統泰服 Fashion Show", titleEn: "Royal Thai Aesthetic: Royal Thai Dress Fashion Show", links: [["Thai Post・官方文化活動紀錄", "https://www.thaipost.net/public-relations-news/931857/"]] },
        { day: 15, person: "LENAMIU", typeZh: "三台官方・Special Vlog", typeEn: "Channel 3 official · Special vlog", titleZh: "TanYada × LenaMiu Special Vlog EP.1", titleEn: "TanYada × LenaMiu Special Vlog EP.1", links: [["3Plus・EP.1", "https://ch3plus.com/v/265241"], ["Naewna・節目介紹", "https://www.naewna.com/entertain/941006"]] },
        { day: 15, person: "LENAMIU", typeZh: "媒體長訪・Fan Meeting", typeEn: "Media interview · Fan meeting", titleZh: "Born to Shine SOLD OUT／海外 Fan Meeting 長訪", titleEn: "Born to Shine SOLD OUT / Overseas Fan Meeting Interview", links: [["Daradaily・長訪", "https://www.daradaily.com/news/158356/read"], ["TrueID・轉載", "https://entertainment.trueid.net/detail/bxPqYPY6KoJ5"], ["Khaosod・現場訪問", "https://www.khaosod.co.th/entertainment/news_10098374"], ["ThaiTicketMajor・SOLD OUT", "https://www.thaiticketmajor.com/concert/lena-and-miu-born-to-shine-fan-meeting.html"]] },
        { day: 16, person: "MIU", typeZh: "人物 Profile・泰服專題", typeEn: "Profile · Royal Thai dress feature", titleZh: "Thaiger 人物 Profile＋Kapook 泰服專題", titleEn: "Thaiger Profile + Kapook Royal Thai Dress Feature", links: [["Thaiger・人物 Profile", "https://thethaiger.com/th/news/1517286/"], ["Kapook・泰服專題", "https://women.kapook.com/view298039.html"]] },
        { day: 22, person: "LENAMIU", typeZh: "電視專題・文化訪談", typeEn: "TV feature · Cultural interview", titleZh: "Thai PBS 皇家傳統泰服專題訪談", titleEn: "Thai PBS Royal Thai Dress Feature Interview", links: [["Thai PBS・ไทยบันเทิง", "https://www.thaipbs.or.th/program/ArtandCultureThaiPBS/episodes/112841"]] },
        { day: 22, person: "LENAMIU", typeZh: "三台官方・排練 BTS", typeEn: "Channel 3 official · Rehearsal BTS", titleZh: "Born to Shine Fan Meeting Rehearsal BTS／準備紀錄", titleEn: "Born to Shine Fan Meeting Rehearsal BTS / Preparation Log", links: [["TrueID・首日排練紀錄", "https://entertainment.trueid.net/detail/EAkOo1g3aWnA"]] },
        { day: 23, person: "MIU", typeZh: "三台官方・泰服造型專題", typeEn: "Channel 3 official · Royal Thai dress feature", titleZh: "《สีสันบันเทิง》EP.1369 泰服造型專題", titleEn: "Si San Banthoeng EP.1369: Royal Thai Dress Feature", links: [["3Plus・สีสันบันเทิง EP.1369", "https://ch3plus.com/v/265978"]] }
    ];

    let patchScheduled = false;
    let portal = null;

    function isEnglish() {
        return new URLSearchParams(window.location.search).get("lang") === "en";
    }

    function isInterviewsRoute() {
        return window.location.pathname.replace(/\/+$/, "").endsWith("/service/interviews");
    }

    function setTextIfChanged(element, value) {
        if (element && element.textContent.trim() !== value) element.textContent = value;
    }

    function patchYearRange(english) {
        document.querySelectorAll(".year-card").forEach(function (card) {
            const year = card.querySelector("span");
            const range = card.querySelector("small");
            if (year && range && year.textContent.trim() === "2026") {
                setTextIfChanged(range, english ? "January — July" : "1 月—7 月");
            }
        });
    }

    function patchJanuaryCount(english) {
        const monthGrid = document.querySelector(".interview-month-grid");
        if (!monthGrid) return;
        monthGrid.querySelectorAll(".interview-month-card").forEach(function (card) {
            const month = card.querySelector(":scope > span");
            const count = card.querySelector("small");
            if (month && count && month.textContent.trim() === "01") {
                setTextIfChanged(count, english ? "8 items" : "8 筆內容");
            }
        });
    }

    function isJanuary2026Open(english) {
        const heading = document.querySelector(".interview-list-heading");
        if (!heading) return false;
        const year = heading.querySelector("p");
        const title = heading.querySelector("h1");
        if (!year || !title || year.textContent.trim() !== "2026") return false;
        return english ? title.textContent.trim() === "January" : title.textContent.trim() === "1 月";
    }

    function createArchiveList(english) {
        const list = document.createElement("div");
        list.className = "interview-list";

        JANUARY_2026_ITEMS.forEach(function (item) {
            const article = document.createElement("article");
            article.className = "interview-row";

            const date = document.createElement("span");
            date.className = "interview-date";
            const day = document.createElement("b");
            day.textContent = String(item.day).padStart(2, "0");
            const month = document.createElement("small");
            month.textContent = english ? "JAN" : "1 月";
            date.append(day, month);

            const copy = document.createElement("span");
            copy.className = "interview-row-copy";
            const meta = document.createElement("small");
            meta.textContent = (english ? item.typeEn : item.typeZh) + " · " + item.person;
            const title = document.createElement("strong");
            title.textContent = english ? item.titleEn : item.titleZh;
            const sources = document.createElement("span");
            sources.className = "interview-row-sources";

            item.links.forEach(function (link) {
                const anchor = document.createElement("a");
                anchor.href = link[1];
                anchor.target = "_blank";
                anchor.rel = "noopener noreferrer";
                anchor.textContent = link[0];
                sources.appendChild(anchor);
            });

            copy.append(meta, title, sources);
            article.append(date, copy);
            list.appendChild(article);
        });

        return list;
    }

    function closePortalAndReturn() {
        if (portal) {
            portal.remove();
            portal = null;
        }
        document.documentElement.style.overflow = "";
        const originalBack = document.querySelector("#app .interview-list-heading .materials-back");
        if (originalBack) originalBack.click();
    }

    function openPortal(english) {
        if (portal || !isJanuary2026Open(english)) return;

        portal = document.createElement("div");
        portal.id = "january-2026-interviews-portal";
        portal.style.position = "fixed";
        portal.style.inset = "0";
        portal.style.zIndex = "10000";
        portal.style.overflowY = "auto";
        portal.style.background = "#fffafb";

        const header = document.querySelector("#app .site-header");
        if (header) portal.appendChild(header.cloneNode(true));

        const main = document.createElement("main");
        main.className = "service-page";
        const section = document.createElement("section");
        section.className = "materials-section interviews-section";

        const heading = document.createElement("div");
        heading.className = "materials-calendar-heading interview-list-heading";
        const back = document.createElement("button");
        back.type = "button";
        back.className = "materials-back";
        back.textContent = english ? "← Months" : "← 返回月份";
        back.addEventListener("click", closePortalAndReturn);

        const headingCopy = document.createElement("div");
        const year = document.createElement("p");
        year.textContent = "2026";
        const title = document.createElement("h1");
        title.id = "interviews-title-portal";
        title.textContent = english ? "January" : "1 月";
        headingCopy.append(year, title);
        heading.append(back, headingCopy);

        section.append(heading, createArchiveList(english));
        main.appendChild(section);
        portal.appendChild(main);
        document.body.appendChild(portal);
        document.documentElement.style.overflow = "hidden";
    }

    function removePortalIfStale(english) {
        if (portal && !isJanuary2026Open(english)) {
            portal.remove();
            portal = null;
            document.documentElement.style.overflow = "";
        }
    }

    function patch() {
        patchScheduled = false;
        if (!isInterviewsRoute()) {
            if (portal) {
                portal.remove();
                portal = null;
                document.documentElement.style.overflow = "";
            }
            return;
        }

        const english = isEnglish();
        patchYearRange(english);
        patchJanuaryCount(english);
        removePortalIfStale(english);
        openPortal(english);
    }

    function schedulePatch() {
        if (patchScheduled) return;
        patchScheduled = true;
        window.requestAnimationFrame(patch);
    }

    const observer = new MutationObserver(schedulePatch);

    function start() {
        const app = document.getElementById("app");
        if (!app) return;
        observer.observe(app, { childList: true, subtree: true, characterData: true });
        schedulePatch();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start, { once: true });
    } else {
        start();
    }
})();