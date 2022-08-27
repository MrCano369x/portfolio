import { useState } from "react";

const elements = [
  {
    src: "images/memorivals.png",
    id: 1,
  },
  {
    src: "images/memorivals.png",
    id: 2,
  },
  {
    src: "images/memorivals.png",
    id: 3,
  },
  {
    src: "images/memorivals.png",
    id: 4,
  },
];

export default function Carousel2() {
  const [items, setItems] = useState(elements);
  const [hola, setHola] = useState(false);

  const borrar = () => setHola(true);

  const pito = () => {
    let pinga2 = [...items];
    pinga2.push(pinga2.shift());
    setHola(false);
    setItems(pinga2);
  };

  return (
    <div className="flex border relative">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`transition-all duration-1000 min-w-full h-80 border ${
            i == 0 && hola ? "min-w-0" : ""
          }`}
          onTransitionEnd={pito}
        >
          <img src={item.src} alt="" />
        </div>
      ))}

      <div className="absolute top-1/2 left-1/2" onClick={borrar}>
        Next
      </div>
    </div>
  );
}
