export default function Study({ src, title, subtitle, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex border hover:shadow-md rounded-md cursor-pointer"
    >
      <img src={src} alt="" className="h-16 rounded-l-md" />
      <div className="p-1">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </a>
  );
}
