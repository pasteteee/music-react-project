import Home from "../pages/Home/Home";
import SearchPage from "../pages/Search/Search";

export interface TPath {
  title: string;
  url: string;
  el: React.JSX.Element;
}

const router: Map<string, TPath> = new Map();
router.set("Home", { title: "Home", url: "/", el: <Home /> });
router.set("Search", { title: "Search", url: "/search", el: <SearchPage /> });

export default router;
