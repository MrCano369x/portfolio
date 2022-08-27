import { useState } from "react";

export default function Carousel3({ images }) {
  const imagesSize = images.length;

  const [state, setState] = useState(0);
  const [index, setIndex] = useState(0);

  const backIndex = () => (imagesSize + (index - 1)) % imagesSize;
  const nextIndex = () => (index + 1) % imagesSize;

  const goBack = () => {
    setIndex(backIndex());
    setState(0);
  };

  const goNext = () => {
    setIndex(nextIndex());
    setState(0);
  };

  return (
    <div className="relative flex overflow-hidden">
      <img
        src={images[backIndex()]}
        className={`absolute ${
          state == -1 ? "left-0 duration-500" : "-left-full"
        }`}
        onTransitionEnd={goBack}
      />

      <img
        src={images[index]}
        className={`relative w-full ${
          state == -1
            ? "left-full duration-500"
            : state == 1
            ? "-left-full duration-500"
            : "left-0"
        }`}
      />

      <img
        src={images[nextIndex()]}
        className={`absolute ${
          state == 1 ? "left-0 duration-500" : "left-full"
        }`}
        onTransitionEnd={goNext}
      />

      <div
        className="absolute h-10 w-10 bg-sky-400 left-4 top-1/2 rounded-full cursor-pointer flex items-center justify-center"
        onClick={() => setState(-1)}
      >
        <i className="fa-solid fa-angle-left text-white"></i>
      </div>
      <div
        className="absolute h-10 w-10 bg-sky-400 right-4 top-1/2 rounded-full cursor-pointer flex items-center justify-center"
        onClick={() => setState(1)}
      >
        <i className="fa-solid fa-angle-right text-white"></i>
      </div>

      <div className="absolute bottom-4 flex w-full justify-center gap-2">
        {images.map((src, i) => (
          <div
            key={i}
            className={`w-5 h-5 ${
              i == index ? "bg-sky-300" : "bg-sky-600"
            }  rounded-full cursor-pointer`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}
