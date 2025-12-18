import { useEffect, useState } from "react";
import ImageCard from "./ImageCard.jsx";

function ImageBoard({ gameOver, setGameOver, dogType }) {
  const [clicks, setClicks] = useState(0);

  function setImages() {
    let images;
    switch (dogType) {
      case "other":
        images = import.meta.glob(`../assets/other*.jpg`, {
          query: "?url",
          import: "default",
        });
        break;
      case "dachshund":
        images = import.meta.glob(`../assets/dachshund*.jpeg`, {
          query: "?url",
          import: "default",
        });
        break;
      default:
        images = import.meta.glob(`../assets/chihuahua*.jpeg`, {
          query: "?url",
          import: "default",
        });
    }
    const newArr = [];
    for (const path in images) {
      newArr.push(path);
    }
    console.log(images);
    setArr(newArr);
    setImageArr(newArr);
  }
  const [arr, setArr] = useState([]);
  const [imageArr, setImageArr] = useState(arr);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      setImageArr(array);
    }
  }
  useEffect(() => setImages(), []);
  useEffect(setImages, [dogType]);
  useEffect(() => () => shuffle(imageArr), [clicks]);
  return (
    <>
      {gameOver ? (
        <section className="text-center">
          <p className="mb-4">
            <span className="text-xl">Oh no!</span> You clicked the same dog
            twice. Your highscore was {clicks}. Wanna start over?
          </p>
          <button
            className="border-2 border-black bg-white px-5 py-3 font-semibold text-black shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:outline-0"
            onClick={() => {
              setClicks(0);
              setGameOver(false);
            }}
          >
            Restart
          </button>
        </section>
      ) : (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8 px-4 sm:px-6 lg:px-8">
          {imageArr.map((image) => (
            <ImageCard
              image={image}
              key={image}
              clicks={clicks}
              setClicks={setClicks}
              setGameOver={setGameOver}
            ></ImageCard>
          ))}
        </section>
      )}
    </>
  );
}

export default ImageBoard;
