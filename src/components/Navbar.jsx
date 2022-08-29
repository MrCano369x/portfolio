export default function Navbar({ sections }) {
  return (
    <div className="bg-sky-400 sticky top-0 shadow-md  z-10">
      <div className="text-white hidden md:flex items-center font-bold justify-end">
        <a href="#aboutme" className="p-4">
          {sections.aboutme.title}
        </a>
        <a href="#skills" className="p-4">
          {sections.skills.title}
        </a>
        <a href="#tools" className="p-4">
          {sections.tools.title}
        </a>
        <a href="#studies" className="p-4">
          {sections.studies.title}
        </a>
        <a href="#hobbies" className="p-4">
          {sections.hobbies.title}
        </a>
        <a href="#projects" className="p-4">
          {sections.projects.title}
        </a>
      </div>
    </div>
  );
}
