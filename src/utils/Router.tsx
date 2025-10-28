import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import type { ReactNode } from "react";

interface TPath {
  title: string;
  url: string;
  el: React.JSX.Element;
}

const router: Map<string, TPath> = new Map();

// Pages
router.set("Home", { title: "", url: "/", el: <Home /> });

export const DOMRouter = createBrowserRouter(
  Array.from(router.values()).map((el) => ({
    path: el.url,
    element: el.el,
  }))
);

export default router;
