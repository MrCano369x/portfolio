export default function Logo({ src, text, sub }) {
  return (
    <div className="text-center mb-3 rounded-md">
      <img src={src} alt={text} className="w-14 h-14 inline-block" />
      <p className="text-lg font-semibold">{text}</p>
      <p>{sub}</p>
    </div>
  );
}
