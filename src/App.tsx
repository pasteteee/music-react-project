import Home from "./pages/Home/Home";
import { RouterProvider, Link } from "react-router-dom";
import { DOMRouter } from "./Router";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import type { TSong } from "./utils/Song";

export default function App() {
  const [currentSong, setCurrentSong] = useState<TSong>({});

  return (
    <>
      <RouterProvider router={DOMRouter} />
      <Footer currentSong={{}} />
    </>
  );
}
