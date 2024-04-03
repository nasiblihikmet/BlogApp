import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";


const HomePage = lazy(()=>import("./pages/home"))

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
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/faq" element={<HomePage />} />
        <Route path="/favourites" element={<HomePage />} />
        <Route path="/article" element={<HomePage />} />
        <Route path="/create-article" element={<HomePage />} />
        <Route path="/article/:id" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
