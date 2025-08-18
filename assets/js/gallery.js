// Media Data (images/videos)
const mediaItems = [
  { type: "image", src: "vendors/test-img/andrey-matveev-mspt8rZy0uI-unsplash.jpg" },
  { type: "image", src: "vendors/test-img/kieran-wood-O11Hz4w8Sbg-unsplash.jpg" },
  { type: "image", src: "vendors/test-img/onur-binay-P3PpD5k7jfI-unsplash.jpg" },
  { type: "image", src: "vendors/test-img/onur-binay-z3MP5DDiEME-unsplash.jpg" },
  { type: "image", src: "vendors/test-img/sdl-sanjaya-4gbbKX63V5I-unsplash.jpg" },
  { type: "image", src: "vendors/test-img/sdl-sanjaya-8R0pZo2-cL4-unsplash.jpg" },
  { type: "image", src: "vendors/test-img/sitraka-5hrYhjVlBgY-unsplash.jpg" }
];


// Insert media into DOM
const gallery = document.querySelector(".gallery");
mediaItems.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("gallery-item");

  if (item.type === "image") {
    div.innerHTML = `<img src="${item.src}" alt="Gallery Image">`;
  } else if (item.type === "video") {
    div.innerHTML = `<video src="${item.src}" muted autoplay loop></video>`;
  }

  gallery.appendChild(div);
});

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// Preview Modal
const items = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("previewModal");
const previewContent = document.getElementById("previewContent");
let currentIndex = 0;
let scale = 1;

// Open modal
function openPreview(index) {
  currentIndex = index;
  scale = 1; // reset zoom
  previewContent.innerHTML = "";

  const item = mediaItems[index];
  let mediaEl;

  if (item.type === "image") {
    mediaEl = document.createElement("img");
    mediaEl.src = item.src;
  } else if (item.type === "video") {
    mediaEl = document.createElement("video");
    mediaEl.src = item.src;
    mediaEl.controls = true;
    mediaEl.autoplay = true;
  }

  mediaEl.style.transform = "scale(1)";
  mediaEl.style.objectFit = "contain"; // FIT into modal
  previewContent.appendChild(mediaEl);

  modal.style.display = "flex";
}

// Close modal
function closePreview() {
  modal.style.display = "none";
  previewContent.innerHTML = "";
}

// Next / Prev
function nextItem() {
  currentIndex = (currentIndex + 1) % mediaItems.length;
  openPreview(currentIndex);
}
function prevItem() {
  currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
  openPreview(currentIndex);
}

// Zoom with mouse wheel
previewContent.addEventListener("wheel", (e) => {
  e.preventDefault();
  const media = previewContent.querySelector("img, video");
  if (media) {
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(1, scale), 3);
    media.style.transform = `scale(${scale})`;
  }
});

// Swipe Support (mobile)
let startX = 0;
previewContent.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
previewContent.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextItem();
  if (endX - startX > 50) prevItem();
});

// Escape & Close
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePreview();
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) closePreview();
});

// Attach click to gallery items
document.querySelectorAll(".gallery-item").forEach((item, index) => {
  item.addEventListener("click", () => openPreview(index));
});
