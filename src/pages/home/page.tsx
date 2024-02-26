import About from "./about";
import AppBar from "./appbar";
import Footer from "./footer";
import Projects from "./projects";
import Service from "./service";
import Skills from "./skills";

export default function HomePage() {
  return (
    <>
      <AppBar />

      <main className="container mx-auto px-5">
        {/* <!-- about section --> */}
        <About />

        <hr className="border-1 border-gray-900 my-12" />

        {/* <!-- service section --> */}
        <Service />

        <hr className="border-1 border-gray-900 my-12" />

        {/* <!-- projects section --> */}
        <Projects />

        <hr className="border-1 border-gray-900 my-12" />

        {/* <!-- skills section --> */}
        <Skills />
      </main>

      <hr className="border-1 border-gray-900 my-12" />

      <Footer/>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
