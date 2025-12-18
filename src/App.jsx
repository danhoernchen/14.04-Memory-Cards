import "./styles/styles.css";
import ImageBoard from "./components/ImageBoard.jsx";
import { useState } from "react";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [dogType, setDogType] = useState("chihuahua");

  function handleDogType(el) {
    const newType = el.currentTarget.value;
    setDogType(newType);
  }

  return (
    <main>
      {" "}
      <header className="bg-white mb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <h1 className="text-4xl font-[Staatliches] mt-4 mb-2">
              Remember the dog
            </h1>

            <div className="sm:flex sm:gap-4">
              <label htmlFor="Image Selection">
                <span className="text-sm font-semibold invisible">
                  Type of dog images
                </span>

                <select
                  name="dogtype"
                  id="dogtype"
                  className="mt-0.5 w-full border-2 border-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300 sm:text-sm"
                  onChange={(el) => {
                    handleDogType(el);
                  }}
                >
                  <option value="chihuahua">Chihuahua</option>
                  <option value="dachshund">Dachshund</option>
                  <option value="other">Other Dogs</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </header>
      <ImageBoard
        gameOver={gameOver}
        setGameOver={setGameOver}
        dogType={dogType}
      ></ImageBoard>
      {!gameOver ? (
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-center">
          <p className="py-2 mt-0.5 w-full resize-none border-2 border-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300 text-lg">
            The images will be displayed in random order, try to click every
            image once, if you click any image twice:
            <br /> Game Over.
          </p>
        </section>
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
