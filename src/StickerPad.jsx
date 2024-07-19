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
import React, { useRef } from "react";

import styles from "./StickerPad.module.css";
import { getSticker } from "./Stickers.data";

function StickerPad() {
  const [stickers, setStickers] = React.useState([]);
  const wrapperRef = useRef(null);

  const handlePointerDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const stickerData = getSticker();
      const newSticker = {
        ...stickerData,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        id: crypto.randomUUID(),
      };

      setStickers((prevStickers) => [...prevStickers, newSticker]);
    }
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className={styles.wrapper}
        onPointerDown={handlePointerDown}
        style={{ touchAction: 'none' }}
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
              pointerEvents: 'none',
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