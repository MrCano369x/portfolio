import Carousel3 from "./Carousel3";

export default function Project2({ images, title, url, desc, show }) {
  return (
    <div className="rounded-md border grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-2 mb-10">
      <Carousel3 images={images} />
      <div className="flex flex-col justify-between">
        <h1 className="text-sky-400 text-2xl font-bold text-center">{title}</h1>
        <p className="text-lg text-justify p-3">{desc}</p>

        <a
          href={url}
          target="_blank"
          className="bg-sky-400 py-1 px-3 w-24 text-white cursor-pointer self-end flex items-center justify-between rounded-md"
        >
          <span>{show}</span>
          <i class="fa-solid fa-up-right-from-square" />
        </a>
      </div>
    </div>
  );
}
