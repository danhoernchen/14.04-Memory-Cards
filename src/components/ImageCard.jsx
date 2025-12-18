import { useState } from "react";

function ImageCard({ image, order, clicks, setClicks, setGameOver }) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    if (clicked) {
      setGameOver(true);
    }
    setClicked(true);
    console.log(clicked);
    setClicks((clicks) => clicks + 1);
  }
  return (
    <div
      onClick={handleClick}
      className={`aspect-square block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6 order-${order}`}
    >
      <img src={image} className="object-cover w-full h-full"></img>
    </div>
  );
}

export default ImageCard;
