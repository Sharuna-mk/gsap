const folderPath = "images/";
const canvas = document.getElementById("sequence");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let allImages = [];
const totalFrames = 90; // total frames from 001 to 090
let imagesLoaded = 0;

// Preload images
for (let i = 1; i <= totalFrames; i++) {
  const frameNumber = String(i).padStart(3, "0");
  const img = new Image();
  img.src = `${folderPath}ezgif-frame-${frameNumber}.jpg`;

  img.onload = () => {
    imagesLoaded++;
    // Render first frame after first image loads
    if (imagesLoaded === 1) render();
  };

  allImages.push(img);
}

const imageSeq = { frame: 0 };

// Render current frame
function render() {
  const img = allImages[imageSeq.frame];
  if (img && img.complete) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
}

// Smooth scroll animation
gsap.to(imageSeq, {
  frame: totalFrames - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: canvas,
    start: "top top",
    scrub: 0.3,   // smoother scrub, not instant
    pin: canvas,
    end: `+=${totalFrames * 80}`, // slightly shorter scroll distance
  },
  onUpdate: render,
});

// Resize support
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});
