// https://imgur.com/a/kD0DnIm

// Sticker assets downloaded from Vecteezy:
// https://www.vecteezy.com/vector-art/1240459-assorted-cute-stickers-cards-or-patches

const STICKERS = [
  {
    src: "https://i.postimg.cc/mrkxRjsV/IMG-8735.png",
    alt: "potted cactus sticker",
    width: 132,
    height: 320,
  },
  {
    src: "https://i.postimg.cc/tTg4KWSH/IMG-8733.png",
    alt: "exclamation mark sticker",
    width: 320,
    height: 182,
  },
  {
    src: "https://i.postimg.cc/Nj4yZssm/IMG-8732.png",
    alt: "star sticker",
    width: 320,
    height: 275,
  },
  {
    src: "https://i.postimg.cc/HnXnzHvJ/IMG-8731.png",
    alt: "heart sticker",
    width: 188,
    height: 320,
  },
  {
    src: "https://i.postimg.cc/fbybFYgQ/IMG-8717.png",
    alt: "frosted donut sticker",
    width: 240,
    height: 320,
  },
  {
    src: "https://i.postimg.cc/xTPT16wS/IMG-8734.png",
    alt: 'bunny sticker with the text "Always happy"',
    width: 320,
    height: 207,
  },
];

export function getSticker() {
  // Select a sticker randomly from the array.
  return sample(STICKERS);
}

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Preload all of the images, so that they're immediately
// available on click.
// NOTE: Normally I would do this inside the component,
// in a “useEffect” hook, but we haven't learned that yet 😅
// We'll learn more about how to tackle challenges like
// this in Module 3!
function preloadImages() {
  STICKERS.forEach(({ src }) => {
    const preloadImage = new Image();
    preloadImage.src = src;
  });
}

preloadImages();
