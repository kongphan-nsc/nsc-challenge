import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageSkeleton from "./components/organisms/LandingPageSkeleton";

const LandingPage = React.lazy(() => import("@/pages/LandingPage"));
const PerformancePage = React.lazy(() => import("@/pages/PerformancePage"));
const ChallengePage = React.lazy(() => import("@/pages/ChallengePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LandingPageSkeleton />}>
        <LandingPage />
      </Suspense>
    ),
  },
  {
    path: "/performance",
    element: (
      <Suspense fallback={<LandingPageSkeleton />}>
        <PerformancePage />
      </Suspense>
    ),
  },
  {
    path: "/challenge",
    element: (
      <Suspense fallback={<LandingPageSkeleton />}>
        <ChallengePage />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
