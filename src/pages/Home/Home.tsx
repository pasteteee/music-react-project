import styles from "./Home.module.sass";
import router from "../../Router";

export default function Home() {
  return <title>{router.get("Home") ? "" : router.get("Home").title}</title>;
}
