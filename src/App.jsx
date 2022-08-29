import { useState } from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Project2 from "./components/Project2";
import Section from "./components/Section";
import Study from "./components/Study";
import json from "./lang.json";

export default function App() {
  // const sections = useRef();
  const [lang, setLang] = useState("en");
  const { aboutme, skills, tools, studies, hobbies, projects } = json[lang];

  // useEffect(() => {
  //   const callback = ([entry]) => {
  //     if (entry.isIntersecting) console.log(entry);
  //   };

  //   let observer = new IntersectionObserver(callback, { threshold: 0.5 });
  //   sections.current.childNodes.forEach((section) => observer.observe(section));
  // }, []);

  return (
    <div>
      <Navbar sections={json[lang]} />
      <div className="flex gap-2 p-2">
        {Object.keys(json).map((key) => (
          <img
            key={key}
            src={json[key].src}
            onClick={() => setLang(key)}
            className={`w-8 cursor-pointer rounded-full ${
              key == lang ? "border-4 border-sky-600" : ""
            }`}
          ></img>
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <Section title={aboutme.title} id="aboutme">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <img src="images/yo.png" className="rounded-md h-48 w-48" />
            <div className="ml-5">
              <h2 className="text-3xl font-bold">{aboutme.gretting}</h2>
              <p className="text-xl text-justify">{aboutme.description}</p>
              <div className="flex gap-2 py-2">
                <span className="text-xl font-bold">{aboutme.contact}</span>
                <a
                  href="https://www.linkedin.com/in/arturo-cano-rueda-773297234/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin text-3xl text-sky-500" />
                </a>
                <a href="https://github.com/MrCano369x" target="_blank">
                  <i className="fa-brands fa-square-github text-3xl text-sky-500" />
                </a>
                <a href="mailto:arturocanorueda@gmail.com" target="_blank">
                  <i className="fa-solid fa-square-envelope text-3xl text-sky-500" />
                </a>
                <a
                  href="/documents/arturo_cano_cv.pdf"
                  download
                  className="bg-sky-400 py-1 px-3 w-36 text-white cursor-pointer self-end flex items-center justify-between rounded-md"
                >
                  <span>{aboutme.download}</span>
                  <i class="fa-solid fa-download"></i>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </Section>

        <Section title={skills.title} id="skills">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.logos.map(({ src, name }) => (
              <Logo src={src} text={name} />
            ))}
          </div>
        </Section>

        <Section title={tools.title} id="tools">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {tools.logos.map(({ src, name, sub }) => (
              <Logo src={src} text={name} sub={sub} />
            ))}
          </div>
        </Section>

        <Section title={studies.title} id="studies">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {studies.logos.map(({ src, name, sub, url }) => (
              <Study src={src} title={name} subtitle={sub} url={url} />
            ))}
          </div>
        </Section>

        <Section title={hobbies.title} id="hobbies">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {hobbies.logos.map(({ src, name }) => (
              <Logo src={src} text={name} />
            ))}
          </div>
        </Section>

        <Section title={projects.title} id="projects">
          {projects.projects.map(({ name, desc, url, images }) => (
            <Project2
              images={images}
              title={name}
              url={url}
              desc={desc}
              show={projects.show}
            />
          ))}
        </Section>
      </div>
    </div>
  );
}
