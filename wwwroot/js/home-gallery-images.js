(() => {
  const items = [2, 3, 4, 5];
  const classNames = { 2: "two", 3: "three", 4: "four", 5: "five" };

  async function loadImage(number) {
    const holder = document.querySelector(`.gallery-image.image-${classNames[number]}`);
    if (!holder || holder.dataset.galleryLoaded === "true" || holder.dataset.galleryLoading === "true") return;

    holder.dataset.galleryLoading = "true";

    try {
      const response = await fetch(`images/home-gallery-${number}-fixed.b64?v=20260807-1`, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const base64 = (await response.text()).replace(/\s+/g, "");
      if (!base64.startsWith("UklGR")) throw new Error("Invalid WebP data");

      const image = new Image();
      image.alt = `LenaMiu gallery ${number}`;
      image.loading = "eager";
      image.decoding = "async";
      image.src = `data:image/webp;base64,${base64}`;

      holder.replaceChildren(image);
      holder.dataset.galleryLoaded = "true";
      delete holder.dataset.galleryLoading;
    } catch {
      delete holder.dataset.galleryLoading;
    }
  }

  function apply() {
    items.forEach(loadImage);
  }

  if (!document.getElementById("home-gallery-image-style")) {
    const style = document.createElement("style");
    style.id = "home-gallery-image-style";
    style.textContent = `
      .hero-image img{object-position:center top !important}

      .gallery.section-wrap{
        width:min(100% - 60px,1680px);
        max-width:none;
        min-height:650px;
        grid-template-columns:repeat(4,minmax(0,1fr));
        align-items:start;
        gap:30px;
        padding-top:38px;
        padding-bottom:52px;
      }

      .gallery .gallery-image,
      .gallery .image-box{
        width:100%;
        height:530px;
        padding:0;
        overflow:hidden;
        border:0 !important;
        border-radius:0 !important;
        background:transparent !important;
        box-shadow:none !important;
      }

      .gallery .image-two,
      .gallery .image-four{
        margin-top:72px;
      }

      .gallery .image-three,
      .gallery .image-five{
        margin-top:0;
      }

      .gallery .gallery-image img{
        width:100%;
        height:100%;
        display:block;
        object-fit:cover;
      }

      .gallery .image-two img{object-position:center 36%}
      .gallery .image-three img{object-position:center 34%}
      .gallery .image-four img{object-position:center 34%}
      .gallery .image-five img{object-position:center 38%}

      @media(max-width:800px){
        .gallery.section-wrap{
          width:min(100% - 28px,760px);
          min-height:0;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:18px;
          padding-top:28px;
          padding-bottom:38px;
        }
        .gallery .gallery-image,
        .gallery .image-box{
          height:390px;
        }
        .gallery .image-two,
        .gallery .image-four{
          margin-top:38px;
        }
      }

      @media(max-width:520px){
        .gallery.section-wrap{
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:12px;
        }
        .gallery .gallery-image,
        .gallery .image-box{
          height:285px;
        }
        .gallery .image-two,
        .gallery .image-four{
          margin-top:28px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
  addEventListener("DOMContentLoaded", apply);
  apply();
})();
