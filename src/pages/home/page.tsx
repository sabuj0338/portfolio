import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import FullPageLoadingIndicator from "../../components/full-page-loading-indicator";
const AppBar = lazy(() => import("./appbar"));
const About = lazy(() => import("./about"));
const Companies = lazy(() => import("./companies"));
const Footer = lazy(() => import("./footer"));
const Projects = lazy(() => import("./projects"));
const Service = lazy(() => import("./service"));
const Skills = lazy(() => import("./skills"));

const options = {
  triggerOnce: true, // Load only once when in view
  threshold: 0.05, // Trigger when 10% of the component is visible
};

export default function HomePage() {
  const _about = useInView({ ...options, threshold: 0 });
  const _service = useInView(options);
  const _companies = useInView(options);
  const _footer = useInView(options);
  const _projects = useInView(options);
  const _skills = useInView(options);

  return (
    <>
      <Suspense fallback={<FullPageLoadingIndicator />}>
        <AppBar />
      </Suspense>

      <main id="about" className="container mx-auto px-5">
        {/* <!-- about section --> */}
        <section className="py-0 sm:py-10 mt-0 sm:mt-4" ref={_about.ref}>
          {_about.inView && (
            <Suspense fallback={<FullPageLoadingIndicator />}>
              <About />
            </Suspense>
          )}
        </section>

        <hr id="services" className="border-1 border-gray-900 my-12" />

        {/* <!-- service section --> */}
        <section className="py-10" ref={_service.ref}>
          {_service.inView && (
            <Suspense fallback={<FullPageLoadingIndicator />}>
              <Service />
            </Suspense>
          )}
        </section>

        <hr className="border-1 border-gray-900 my-12" />

        {/* <!-- companies section --> */}
        <section className="py-10" ref={_companies.ref}>
          {_companies.inView && (
            <Suspense fallback={<FullPageLoadingIndicator />}>
              <Companies />
            </Suspense>
          )}
        </section>

        <hr id="projects" className="border-1 border-gray-900 my-12" />

        {/* <!-- projects section --> */}
        <section className="py-10" ref={_projects.ref}>
          {_projects.inView && (
            <Suspense fallback={<FullPageLoadingIndicator />}>
              <Projects />
            </Suspense>
          )}
        </section>

        <hr id="skills" className="border-1 border-gray-900 my-12" />

        {/* <!-- skills section --> */}
        <section className="py-10" ref={_skills.ref}>
          {_skills.inView && (
            <Suspense fallback={<FullPageLoadingIndicator />}>
              <Skills />
            </Suspense>
          )}
        </section>
      </main>

      <hr id="contact" className="border-1 border-gray-900 my-12" />

      <footer className="container mx-auto py-10" ref={_footer.ref}>
        {_footer.inView && (
          <Suspense fallback={<FullPageLoadingIndicator />}>
            <Footer />
          </Suspense>
        )}
      </footer>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
