export default function Project({ src, title, url, children }) {
  return (
    <div>
      <h1 className="bg-sky-400 text-white text-lg font-semibold text-center py-2 rounded-t-md">
        {title}
      </h1>
      <div className="max-h-60 overflow-hidden">
        <img src={src} alt={title} />
      </div>
      <p className="text-lg h-20 overflow-auto text-justify p-1">{children}</p>
      <div className="text-center p-3">
        <a
          href={url}
          target="_blank"
          className="bg-sky-400 py-1 px-10 text-white cursor-pointer rounded-md"
        >
          Ver
        </a>
      </div>
    </div>
  );
}
