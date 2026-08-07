(() => {
  const items = [2, 3, 4, 5];

  async function loadImage(number) {
    const holder = document.querySelector(`.gallery-image.image-${["two","three","four","five"][number - 2]}`);
    if (!holder || holder.dataset.galleryLoaded === "true" || holder.dataset.galleryLoading === "true") return;

    holder.dataset.galleryLoading = "true";
    try {
      const response = await fetch(`images/home-gallery-${number}-fixed.b64?v=20260807-1`, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const base64 = (await response.text()).trim();
      if (!base64.startsWith("UklGR")) throw new Error("Invalid WebP data");

      const image = new Image();
      image.alt = `LenaMiu gallery ${number}`;
      image.loading = number === 2 ? "eager" : "lazy";
      image.decoding = "async";
      image.onload = () => {
        holder.replaceChildren(image);
        holder.dataset.galleryLoaded = "true";
        delete holder.dataset.galleryLoading;
      };
      image.onerror = () => {
        delete holder.dataset.galleryLoading;
      };
      image.src = `data:image/webp;base64,${base64}`;
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
      .gallery-image{overflow:hidden;padding:0;background:#f4eeea}
      .gallery-image img{width:100%;height:100%;display:block;object-fit:cover;object-position:center}
      .gallery-image.image-two img{object-position:center 34%}
      .gallery-image.image-three img{object-position:center 38%}
      .gallery-image.image-four img{object-position:center 36%}
      .gallery-image.image-five img{object-position:center 42%}
    `;
    document.head.appendChild(style);
  }

  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
  addEventListener("DOMContentLoaded", apply);
  apply();
})();
