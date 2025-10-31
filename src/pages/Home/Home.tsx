import styles from "./Home.module.sass";
import router from "../../utils/Router";
import { Link } from "react-router-dom";
import { PathIndetefier } from "../../components/PathIndetefier/PathIndetefier";
import { usePathIndetefier } from "../../utils/PathIndetefier";

export default function Home() {
  const pathIndetefier = usePathIndetefier();

  return (
    <div>
      <PathIndetefier items={pathIndetefier} />
    </div>
  );
}
