// import React from "react";

// import styles from "./StickerPad.module.css";
// import { getSticker } from "./Stickers.data";

// function StickerPad() {
//   const [stickers, setStickers] = React.useState([]);

//   return (
//     <>
//       <button
//         className={styles.wrapper}
//         onClick={(event) => {
//           const stickerData = getSticker();
//           const newSticker = {
//             ...stickerData,
//             x: event.clientX,
//             y: event.clientY,
//             id: crypto.randomUUID(),
//           };

//           const nextStickers = [...stickers, newSticker];
//           setStickers(nextStickers);
//         }}
//       >
//         {stickers.map((sticker) => (
//           <img
//             key={sticker.id}
//             className={styles.sticker}
//             src={sticker.src}
//             alt={sticker.alt}
//             style={{
//               left: sticker.x,
//               top: sticker.y,
//               width: sticker.width,
//               height: sticker.height,
//             }}
//           />
//         ))}
//       </button>
//       <button
//         className={styles.clear}
//         onClick={() => {
//           setStickers([]);
//         }}
//       >
//         clear
//       </button>
//     </>
//   );
// }

// export default StickerPad;
import { useState, useCallback } from "react";
import styles from "./StickerPad.module.css";
import { getSticker } from "./Stickers.data";

function StickerPad() {
  const [stickers, setStickers] = useState([]);
  const [touchUsed, setTouchUsed] = useState(false);

  const addSticker = useCallback((x, y) => {
    const stickerData = getSticker();
    const newSticker = {
      ...stickerData,
      x,
      y,
      id: crypto.randomUUID(),
    };

    setStickers((prevStickers) => [...prevStickers, newSticker]);
  }, []);

  const handleClick = useCallback((event) => {
    if (!touchUsed) {
      addSticker(event.clientX, event.clientY);
    }
    setTouchUsed(false);
  }, [touchUsed, addSticker]);

  const handleTouch = useCallback((event) => {
    event.preventDefault();
    setTouchUsed(true);
    const touch = event.touches[0];
    addSticker(touch.clientX, touch.clientY);
  }, [addSticker]);

  return (
    <>
      <div
        className={styles.wrapper}
        onClick={handleClick}
        onTouchStart={handleTouch}
      >
        {stickers.map((sticker) => (
          <img
            key={sticker.id}
            className={styles.sticker}
            src={sticker.src}
            alt={sticker.alt}
            style={{
              left: sticker.x,
              top: sticker.y,
              width: sticker.width,
              height: sticker.height,
            }}
          />
        ))}
      </div>
      <button
        className={styles.clear}
        onClick={() => setStickers([])}
      >
        clear
      </button>
    </>
  );
}

export default StickerPad;