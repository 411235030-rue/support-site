(() => {
  const items = [2, 3, 4, 5];
  const classNames = { 2: "two", 3: "three", 4: "four", 5: "five" };
  const flipPairs = { 2: 5, 3: 4, 4: 3, 5: 2 };

  function createPhoto(number, isBack = false) {
    const image = new Image();
    image.alt = isBack ? "" : `LenaMiu gallery ${number}`;
    image.width = 1170;
    image.height = 1560;
    image.loading = "eager";
    image.decoding = "async";
    image.className = `gallery-photo gallery-photo-${number}`;
    if (isBack) image.setAttribute("aria-hidden", "true");
    image.src = `images/home-gallery-${number}.jpeg?v=20260807-1`;
    return image;
  }

  function loadImage(number) {
    const holder = document.querySelector(`.gallery-image.image-${classNames[number]}`);
    if (!holder || holder.dataset.galleryLoaded === "true") return;

    const inner = document.createElement("div");
    inner.className = "gallery-flip-inner";

    const front = document.createElement("div");
    front.className = "gallery-flip-face gallery-flip-front";
    front.appendChild(createPhoto(number));

    const back = document.createElement("div");
    back.className = "gallery-flip-face gallery-flip-back";
    back.appendChild(createPhoto(flipPairs[number], true));

    inner.append(front, back);
    holder.replaceChildren(inner);
    holder.dataset.galleryLoaded = "true";
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
        overflow:visible;
        border:0 !important;
        border-radius:24px !important;
        background:transparent !important;
        box-shadow:none !important;
        position:relative;
        perspective:1400px;
      }

      .gallery .gallery-image::after{
        content:"";
        position:absolute;
        inset:0;
        transform:translate(12px,14px);
        border-radius:24px;
        background:#f3ccd7;
        z-index:0;
        pointer-events:none;
      }

      .gallery .image-three::after,
      .gallery .image-five::after{
        background:#b08c76;
      }

      .gallery .image-two,
      .gallery .image-four{
        margin-top:72px;
      }

      .gallery .image-three,
      .gallery .image-five{
        margin-top:0;
      }

      .gallery-flip-inner{
        position:relative;
        z-index:1;
        width:100%;
        height:100%;
        transform-style:preserve-3d;
        transition:transform .7s cubic-bezier(.22,.72,.24,1);
        will-change:transform;
      }

      .gallery .gallery-image:hover .gallery-flip-inner{
        transform:rotateY(180deg);
      }

      .gallery-flip-face{
        position:absolute;
        inset:0;
        overflow:hidden;
        border-radius:24px;
        background:#fff;
        border:1px solid rgba(115,82,70,.2);
        backface-visibility:hidden;
        -webkit-backface-visibility:hidden;
      }

      .gallery-flip-back{
        transform:rotateY(180deg);
      }

      .gallery .gallery-photo{
        width:100%;
        height:100%;
        display:block;
        object-fit:cover;
      }

      .gallery .gallery-photo-2{object-position:center 36%}
      .gallery .gallery-photo-3{object-position:center 34%}
      .gallery .gallery-photo-4{object-position:center 34%}
      .gallery .gallery-photo-5{object-position:center 38%}

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
        .gallery .gallery-image::after{
          transform:translate(9px,11px);
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
          border-radius:18px !important;
        }
        .gallery .gallery-image::after,
        .gallery-flip-face{
          border-radius:18px;
        }
        .gallery .gallery-image::after{
          transform:translate(7px,8px);
        }
        .gallery .image-two,
        .gallery .image-four{
          margin-top:28px;
        }
      }

      @media(prefers-reduced-motion:reduce){
        .gallery-flip-inner{
          transition:none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  new MutationObserver(apply).observe(document.documentElement, { childList: true, subtree: true });
  addEventListener("DOMContentLoaded", apply);
  apply();
})();
