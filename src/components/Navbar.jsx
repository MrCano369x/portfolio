export default function Navbar() {
  return (
    <div className="bg-sky-400 sticky top-0 shadow-md  z-10">
      <div className="text-white hidden md:flex items-center font-bold justify-end">
        <a href="#aboutme" className="p-4">
          Sobre mi
        </a>
        <a href="#skills" className="p-4">
          Habilidades
        </a>
        <a href="#tools" className="p-4">
          Herramientas
        </a>
        <a href="#studies" className="p-4">
          Estudios
        </a>
        <a href="#hobbies" className="p-4">
          Pasatiempos
        </a>
        <a href="#projects" className="p-4">
          Projectos
        </a>
      </div>
    </div>
  );
}
