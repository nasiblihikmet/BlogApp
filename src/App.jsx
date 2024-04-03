import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const NotFound = lazy(() => import("./pages/notfound"));
const Articles = lazy(() => import("./pages/articles"));
const ArticleDetail = lazy(() => import("./pages/articles/detail"));
const ArticleCreate = lazy(() => import("./pages/articles/create"));

function App() {
  return (
    <Suspense
      fallback={
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/faq" element={<HomePage />} />
        <Route path="/favourites" element={<HomePage />} /> */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/create-article" element={<ArticleCreate />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
