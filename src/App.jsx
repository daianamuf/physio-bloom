import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import AppLayout from "./AppLayout";
import Error from "./components/Error";
import Loader from "./components/Loader";
import { HelmetProvider } from "react-helmet-async";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Prices = lazy(() => import("./pages/Prices"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Post = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/despre",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/tarife",
        element: (
          <Suspense fallback={<Loader />}>
            <Prices />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/blog/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <Post />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
