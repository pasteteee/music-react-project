import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import sidebarData from "./utils/Sidebar";
import Player from "./utils/Player";
import PlayerContext from "./context/PlayerContext";
import router from "./utils/Router";

export default function App() {
  return (
    <BrowserRouter>
      <PlayerContext.Provider value={new Player()}>
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
            <Footer currentSong={{}} />
          </footer>
        </div>
      </PlayerContext.Provider>
    </BrowserRouter>
  );
}
