// ------------------ DATA ------------------
const galleryItems = [
  { type: "image", src: "vendors/test-img/web (1).png" },
  { type: "image", src: "vendors/test-img/web (6).png" },
  { type: "image", src: "vendors/test-img/img (11).HEIC" },
  { type: "image", src: "vendors/test-img/img (12).HEIC" },
  { type: "image", src: "vendors/test-img/web (2).png" },
  { type: "image", src: "vendors/test-img/web (3).png" },
  { type: "image", src: "vendors/test-img/web (5).png" },
  { type: "image", src: "vendors/test-img/img (1).jpg" },
  { type: "image", src: "vendors/test-img/img (2).jpg" },
  { type: "image", src: "vendors/test-img/img (3).jpg" },
  { type: "image", src: "vendors/test-img/img (4).jpg" },
  { type: "image", src: "vendors/test-img/img (5).jpg" },
  { type: "image", src: "vendors/test-img/img (6).jpg" },
  { type: "image", src: "vendors/test-img/img (7).jpg" },
  { type: "image", src: "vendors/test-img/img (8).jpg" },
  { type: "image", src: "vendors/test-img/img (9).jpg" },
  { type: "image", src: "vendors/test-img/img (10).jpg" },
  { type: "image", src: "vendors/test-img/img (11).jpg" },
  { type: "image", src: "vendors/test-img/img (12).jpg" },
  { type: "image", src: "vendors/test-img/img (13).jpg" },
  { type: "image", src: "vendors/test-img/img (14).jpg" },
  { type: "image", src: "vendors/test-img/img (15).jpg" },
  { type: "image", src: "vendors/test-img/img (16).jpg" },
  { type: "image", src: "vendors/test-img/img (17).jpg" },
  { type: "image", src: "vendors/test-img/img (18).jpg" },
  { type: "image", src: "vendors/test-img/img (18).jpg" },
  { type: "image", src: "vendors/test-img/img (20).jpg" },
  { type: "image", src: "vendors/test-img/img (21).jpg" },
  { type: "image", src: "vendors/test-img/img (22).jpg" },
  { type: "image", src: "vendors/test-img/img (23).jpg" },
  { type: "image", src: "vendors/test-img/img (25).jpg" },
  { type: "image", src: "vendors/test-img/img (26).jpg" },
  { type: "image", src: "vendors/test-img/img (27).jpg" },
  { type: "image", src: "vendors/test-img/img (29).jpg" },
  { type: "image", src: "vendors/test-img/img (30).jpg" },
  { type: "image", src: "vendors/test-img/img (31).jpg" },
  { type: "image", src: "vendors/test-img/img (32).jpg" },
  { type: "image", src: "vendors/test-img/img (33).jpg" },
  { type: "image", src: "vendors/test-img/img (34).jpg" },
  { type: "image", src: "vendors/test-img/img (35).jpg" },
  { type: "image", src: "vendors/test-img/img (36).jpg" },
  { type: "image", src: "vendors/test-img/img (37).jpg" },
  { type: "image", src: "vendors/test-img/img (38).jpg" },
  { type: "image", src: "vendors/test-img/img (39).jpg" },
  { type: "image", src: "vendors/test-img/img (40).jpg" },
  { type: "image", src: "vendors/test-img/img (41).jpg" },
  { type: "image", src: "vendors/test-img/img (42).jpg" },
  { type: "image", src: "vendors/test-img/img (43).jpg" },
  { type: "image", src: "vendors/test-img/img (45).jpg" },
  { type: "image", src: "vendors/test-img/img (46).jpg" },
  { type: "image", src: "vendors/test-img/img (47).jpg" },
  { type: "image", src: "vendors/test-img/img (49).jpg" },
  { type: "image", src: "vendors/test-img/img (51).jpg" },
  { type: "image", src: "vendors/test-img/img (52).jpg" },
  { type: "image", src: "vendors/test-img/img (53).jpg" },
  { type: "image", src: "vendors/test-img/img (54).jpg" },
  { type: "image", src: "vendors/test-img/img (55).jpg" },
  { type: "image", src: "vendors/test-img/img (57).jpg" },
  


];

// ------------------ RENDER GALLERY ------------------
const gallery = document.getElementById("gallery");
let currentIndex = 0;

galleryItems.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("gallery-item");
  div.onclick = () => openPreview(index);

  if (item.type === "image") {
    div.innerHTML = `<img src="${item.src}" alt="Gallery Image">`;
  } else {
    div.innerHTML = `<video src="${item.src}" muted loop></video>`;
  }
  gallery.appendChild(div);
});

// ------------------ PREVIEW / LIGHTBOX ------------------
const preview = document.getElementById("preview");
const imgEl = document.getElementById("preview-img");
const videoEl = document.getElementById("preview-video");

// zoom / pan state
let scale = 1;
let translateX = 0;
let translateY = 0;
const MIN_SCALE = 1;
const MAX_SCALE = 4;

// pan state
let isPanning = false;
let panStartX = 0;
let panStartY = 0;

// utility: which media is currently visible
function getActiveMediaEl() {
  if (imgEl && imgEl.style.display !== "none") return imgEl;
  if (videoEl && videoEl.style.display !== "none") return videoEl;
  return null;
}

function resetTransform() {
  scale = 1;
  translateX = 0;
  translateY = 0;
  applyTransform();
}

function applyTransform() {
  const el = getActiveMediaEl();
  if (!el) return;
  el.style.transformOrigin = "center center";
  el.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  el.style.cursor = scale > 1 ? "grab" : "zoom-in";
}

function openPreview(index) {
  currentIndex = index;

  const item = galleryItems[index];

  // show the correct media
  if (item.type === "image") {
    imgEl.src = item.src;
    imgEl.style.display = "block";
    videoEl.style.display = "none";
    videoEl.removeAttribute("src");
  } else {
    videoEl.src = item.src;
    videoEl.controls = true;
    videoEl.style.display = "block";
    imgEl.style.display = "none";
    imgEl.removeAttribute("src");
  }

  // reset zoom/pan each time
  resetTransform();

  // bind pan handler on the active media (so video controls still work)
  const media = getActiveMediaEl();
  if (media) {
    media.onpointerdown = handlePointerDown; // overwrite each time
    media.ondblclick = handleDoubleClick;
  }

  preview.style.display = "block";
}

function closePreview() {
  preview.style.display = "none";
  // optional: stop video playback
  if (videoEl) {
    videoEl.pause?.();
  }
}

// navigation
function nextItem() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  openPreview(currentIndex);
}
function prevItem() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  openPreview(currentIndex);
}

// ------------------ ZOOM (WHEEL + DBLCLICK) ------------------
preview.addEventListener("wheel", (e) => {
  const media = getActiveMediaEl();
  if (!media) return;
  e.preventDefault();

  const oldScale = scale;
  const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
  scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale * zoomFactor));

  // zoom around cursor
  const rect = media.getBoundingClientRect();
  const cx = e.clientX - (rect.left + rect.width / 2);
  const cy = e.clientY - (rect.top + rect.height / 2);

  // adjust translation so the point under cursor stays put(ish)
  translateX -= cx * (scale / oldScale - 1);
  translateY -= cy * (scale / oldScale - 1);

  applyTransform();
}, { passive: false });

function handleDoubleClick(e) {
  if (scale === 1) {
    scale = 2;
  } else {
    scale = 1;
    translateX = 0;
    translateY = 0;
  }
  applyTransform();
}

// ------------------ PAN (DRAG WHILE ZOOMED) ------------------
function handlePointerDown(e) {
  if (scale <= 1) return; // only pan when zoomed in
  const media = getActiveMediaEl();
  if (!media) return;

  isPanning = true;
  media.setPointerCapture(e.pointerId);
  media.style.cursor = "grabbing";

  panStartX = e.clientX - translateX;
  panStartY = e.clientY - translateY;

  const move = (ev) => {
    if (!isPanning) return;
    translateX = ev.clientX - panStartX;
    translateY = ev.clientY - panStartY;
    applyTransform();
  };

  const up = (ev) => {
    isPanning = false;
    media.releasePointerCapture?.(e.pointerId);
    media.style.cursor = scale > 1 ? "grab" : "zoom-in";
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("pointercancel", up);
  };

  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
  window.addEventListener("pointercancel", up);
}

// ------------------ KEYBOARD SHORTCUTS ------------------
window.addEventListener("keydown", (e) => {
  if (preview.style.display !== "block") return;

  if (e.key === "Escape") {
    closePreview();
  } else if (e.key === "ArrowRight") {
    nextItem();
  } else if (e.key === "ArrowLeft") {
    prevItem();
  } else if (e.key === "+" || e.key === "=") {
    // zoom in
    const old = scale;
    scale = Math.min(MAX_SCALE, scale * 1.1);
    if (old !== scale) applyTransform();
  } else if (e.key === "-" || e.key === "_") {
    // zoom out
    const old = scale;
    scale = Math.max(MIN_SCALE, scale / 1.1);
    if (scale === 1) { translateX = 0; translateY = 0; }
    if (old !== scale) applyTransform();
  }
});

// close when clicking backdrop (but not when clicking media/controls)
preview.addEventListener("click", (e) => {
  if (e.target === preview) closePreview();
});

// expose for buttons
window.openPreview = openPreview;
window.closePreview = closePreview;
window.nextItem = nextItem;
window.prevItem = prevItem;
