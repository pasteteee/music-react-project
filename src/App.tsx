import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import sidebarData from "./utils/Sidebar";
import Player from "./utils/Player";
import PlayerContext from "./context/PlayerContext";
import router from "./utils/Router";
import { useEffect, useState } from "react";

export default function App() {
  const [player, setPlayer] = useState<Player>(new Player());

  useEffect(() => {
    player.setStateFunction = setPlayer;
  }, []);

  return (
    <BrowserRouter>
      <PlayerContext.Provider value={{ player, setPlayer }}>
        <div className={styles.wrapper}>
          <nav>
            <Sidebar data={sidebarData} />
          </nav>
          <main>
            <Routes>
              {[...router.keys()].map((value, ind) => {
                return (
                  <Route
                    key={`route${ind}`}
                    path={router.get(value)?.url}
                    element={router.get(value)?.el}
                  />
                );
              })}
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </PlayerContext.Provider>
    </BrowserRouter>
  );
}
