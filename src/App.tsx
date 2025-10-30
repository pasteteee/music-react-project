import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import type { TSong } from "./utils/Song";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import sidebarData from "./utils/Sidebar";
import SearchPage from "./pages/Search/Search";

export default function App() {
  const [currentSong, setCurrentSong] = useState<TSong>({});

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <nav>
          <Sidebar data={sidebarData} />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <footer>
          <Footer currentSong={{}} />
        </footer>
      </div>
    </BrowserRouter>
  );
}
