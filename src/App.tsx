import Home from "./pages/Home/Home";
import { RouterProvider, Link } from "react-router-dom";
import { DOMRouter } from "./utils/Router";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import type { TSong } from "./utils/Song";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  const [currentSong, setCurrentSong] = useState<TSong>({});

  return (
    <div className={styles.wrapper}>
      <nav>
        <Sidebar />
      </nav>
      <main>
        <RouterProvider router={DOMRouter} />
      </main>
      <footer>
        <Footer currentSong={{}} />
      </footer>
    </div>
  );
}
