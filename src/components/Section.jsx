export default function Section({ title, id, children }) {
  return (
    <div className="py-20 md:py-40" id={id}>
      <h1 className="text-4xl text-center text-sky-600 font-bold my-5">
        {title}
      </h1>
      {children}
    </div>
  );
}
