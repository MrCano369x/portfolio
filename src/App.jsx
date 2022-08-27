import { useEffect, useRef } from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Project2 from "./components/Project2";
import Section from "./components/Section";
import Study from "./components/Study";

export default function App() {
  const sections = useRef();

  // useEffect(() => {
  //   const callback = ([entry]) => {
  //     if (entry.isIntersecting) console.log(entry);
  //   };

  //   let observer = new IntersectionObserver(callback, { threshold: 0.5 });
  //   sections.current.childNodes.forEach((section) => observer.observe(section));
  // }, []);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 max-w-5xl" ref={sections}>
        <Section title="Sobre mi" id="aboutme">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <img src="images/yo.png" className="rounded-md h-48 w-48" />
            <div className="ml-5">
              <h2 className="text-3xl font-bold">
                ¡Hola! soy Arturo Cano Rueda
              </h2>
              <p className="text-xl text-justify">
                Un estudiante recién egresado como Ingeniero en Software, vivo
                en Colima, México, tengo 22 años, y desde hace 5 aprendí a
                programar y me encanta. Me considero muy capaz en el desarrollo
                web fullstack con JavaScript y tengo muchas ganas de obtener mi
                primer trabajo.
              </p>
              <div className="flex gap-2 py-2">
                <span className="text-xl font-bold">Contáctame</span>
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
                  <span>Descargar CV</span>
                  <i class="fa-solid fa-download"></i>
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </Section>

        <Section title="Habilidades" id="skills">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <Logo src="icons/js.png" text="Javascript" />
            <Logo src="icons/html.png" text="HTML" />
            <Logo src="icons/css.png" text="CSS" />
            <Logo src="icons/nodejs.png" text="Nodejs" />
            <Logo src="icons/react.svg" text="React" />
            <Logo src="icons/nextjs.png" text="Nextjs" />
          </div>
        </Section>

        <Section title="Herramientas" id="tools">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <Logo
              src="icons/heroku.ico"
              text="Heroku"
              sub="despliegue de apps"
            />
            <Logo
              src="icons/netlify.png"
              text="Netlify"
              sub="despliegue de apps"
            />
            <Logo
              src="icons/visualcode.png"
              text="Visual Studio Code"
              sub="editor de código"
            />
            <Logo
              src="icons/mongoDB.svg"
              text="MongoDB"
              sub="base de datos en la nube"
            />
            <Logo src="icons/express.png" text="Express" sub="servidor web" />
            <Logo src="icons/godot.png" text="Godot" sub="motor de juegos" />
            <Logo
              src="icons/firebase2.png"
              text="Firebase"
              sub="servicios en la nube"
            />
            <Logo
              src="icons/socketio.png"
              text="SocketIo"
              sub="apps en tiempo real"
            />
            <Logo
              src="icons/puppeteer.png"
              text="Puppeteer"
              sub="web scraping"
            />
            <Logo
              src="icons/github.png"
              text="Git/GitHub"
              sub="control de versiones"
            />
            <Logo src="icons/bulma.svg" text="Bulma" sub="libreria css" />
            <Logo src="icons/tailwind.png" text="Tailwind" sub="libreria css" />
          </div>
        </Section>

        <Section title="Estudios y certificados" id="studies">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Study
              src="images/bc.jpg"
              title="BrightCoders"
              subtitle="Bootcamp Ruby on Rails"
              url="documents/BC.jpg"
            />
            <Study
              src="images/ucol2.png"
              title="Universidad de Colima"
              subtitle="Ingenieria en Software"
              url="documents/carrera.jpg"
            />
            <Study
              src="images/ucol2.png"
              title="Universidad de Colima"
              subtitle="Técnico Analista Programador"
              url="documents/bachi.jpg"
            />
            <Study
              src="images/ludolab.jpg"
              title="LUDOLAB"
              subtitle="Participación en el concurso"
              url="documents/G4E.png"
            />
          </div>
        </Section>

        <Section title="Pasatiempos" id="hobbies">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <Logo src="images/programacion.png" text="Programar" />
            <Logo src="images/musica.png" text="Escuchar música" />
            <Logo src="images/dibujar.png" text="Dibujar" />
            <Logo src="images/games.png" text="Gaming" />
            {/* <Logo src="images/anime.png" text="Anime" /> */}
          </div>
        </Section>

        <Section title="Projectos" id="projects">
          <Project2
            images={[
              "images/memorivals.png",
              "images/memorivals2.png",
              "images/memorivals3.gif",
            ]}
            title="MemoRivals"
            url="https://memorivals.netlify.app"
          >
            WebApp donde puedes crear mazos de flipcards para ayudarte a
            memorizar cualquier cosa (vocabulario de idiomas, preguntas,
            fórmulas), luego podrás retar a un amigo a una partida de memorama
            online usando tu mazo.
          </Project2>

          <Project2
            images={[
              "images/brightbets.jpg",
              "images/brightbets2.png",
              "images/brightbets3.png",
            ]}
            title="BrightBets"
            url="http://brightbets.herokuapp.com/"
          >
            WebApp donde puedes apostar monedas ficticias en cuatro minijuegos
            tipo casino, como un tragamonedas, carrera de caballos etc. Algunos
            minijuegos son multijugador en linea.
          </Project2>

          <Project2
            images={[
              "images/warms.png",
              "images/warms2.png",
              "images/warms3.png",
            ]}
            title="Warms"
            url="https://wild-ones-ultra.herokuapp.com/"
          >
            Juego web multijugador en linea que explora la mecánica de
            destrucción de terreno.
          </Project2>
        </Section>
      </div>
    </div>
  );
}
