import { lazy, Suspense } from "react";
import FullPageLoadingIndicator from "../../components/full-page-loading-indicator";
import SectionBoundary from "../../components/section-boundary";
const AppBar = lazy(() => import("./appbar"));
const About = lazy(() => import("./about"));
const Companies = lazy(() => import("./companies"));
const Contact = lazy(() => import("./contact"));
const Experience = lazy(() => import("./experience"));
const Footer = lazy(() => import("./footer"));
const Projects = lazy(() => import("./projects"));
const Service = lazy(() => import("./service"));
const Skills = lazy(() => import("./skills"));

// Sections render up front (still code-split) so in-page anchors land in the
// right place; scroll-in motion is handled per element by <Reveal>.
export default function HomePage() {
  return (
    <Suspense fallback={<FullPageLoadingIndicator />}>
      <AppBar />

      <main className="overflow-x-hidden">
        {[About, Companies, Service, Experience, Projects, Skills, Contact].map((Section, i) => (
          <SectionBoundary key={i}>
            <Section />
          </SectionBoundary>
        ))}
      </main>

      <footer className="px-5 pb-12 pt-8">
        <Footer />
      </footer>
    </Suspense>
  );
}
