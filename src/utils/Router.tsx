import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SearchPage from "../pages/Search/Search";

interface TPath {
  title: string;
  url: string;
  el: React.JSX.Element;
}

const router: Map<string, TPath> = new Map();

// Pages
router.set("Home", { title: "Home", url: "/", el: <Home /> });
router.set("Search", { title: "Search", url: "/search", el: <SearchPage /> });

export const DOMRouter = createBrowserRouter(
  Array.from(router.values()).map((el) => ({
    path: el.url,
    element: el.el,
  }))
);

export default router;
