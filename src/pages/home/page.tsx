import About from "./about";
import AppBar from "./appbar";
import Companies from "./companies";
import Footer from "./footer";
import Projects from "./projects";
import Service from "./service";
import Skills from "./skills";

export default function HomePage() {
  return (
    <>
      <AppBar />

      <main id="about" className="container mx-auto px-5">
        {/* <!-- about section --> */}
        <About />

        <hr id="services" className="border-1 border-gray-900 my-12" />

        {/* <!-- service section --> */}
        <Service />

        <hr className="border-1 border-gray-900 my-12" />

        {/* <!-- companies section --> */}
        <Companies />

        <hr id="projects" className="border-1 border-gray-900 my-12" />

        {/* <!-- projects section --> */}
        <Projects />

        <hr id="skills" className="border-1 border-gray-900 my-12" />

        {/* <!-- skills section --> */}
        <Skills />
      </main>

      <hr id="contact" className="border-1 border-gray-900 my-12" />

      <Footer/>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
