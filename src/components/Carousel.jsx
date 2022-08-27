import { useState } from "react";

export default function Carousel() {
  const [positions, setItems] = useState([
    "-left-full opacity-0",
    "left-0",
    "left-full opacity-0",
  ]);

  const back = () => {
    let pinga2 = [...positions];
    pinga2.push(pinga2.shift());
    setItems(pinga2);
  };

  const next = () => {
    let pinga2 = [...positions];
    pinga2.unshift(pinga2.pop());
    setItems(pinga2);
  };

  return (
    <div className="overflow-hidden relative rounded-md border">
      <div className="flex h-80">
        <div
          className={`absolute transition-all duration-500 ${positions[0]} min-w-full w-full bg-red-600`}
        >
          <img src="images/memorivals.png" alt="" />
        </div>
        <div
          className={`absolute transition-all duration-500 ${positions[1]} min-w-full w-full bg-sky-600`}
        >
          <img src="images/memorivals.png" alt="" />
        </div>
        <div
          className={`absolute transition-all duration-500 ${positions[2]} min-w-full w-full bg-green-600`}
        >
          <img src="images/memorivals.png" alt="" />
        </div>
      </div>
      <div
        className="absolute h-10 w-10 bg-white border left-4 top-1/2 rounded-full cursor-pointer flex items-center justify-center"
        onClick={back}
      >
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div
        className="absolute h-10 w-10 bg-white border right-4 top-1/2 rounded-full cursor-pointer flex items-center justify-center"
        onClick={next}
      >
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}
