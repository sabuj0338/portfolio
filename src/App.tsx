import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import FullPageLoadingIndicator from "./components/full-page-loading-indicator";

const HomePage = lazy(() => import("./pages/home/page"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <Suspense fallback={<FullPageLoadingIndicator />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
