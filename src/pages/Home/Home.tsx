import styles from "./Home.module.sass";
import router from "../../utils/Router";
import { Link } from "react-router-dom";

export default function Home() {
  return <Link to="/search">search</Link>;
}
