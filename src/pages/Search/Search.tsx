import styles from "./Search.module.scss";
import { Link } from "react-router-dom";
import { PathIndetefier } from "../../components/PathIndetefier/PathIndetefier";
import { usePathIndetefier } from "../../utils/PathIndetefier";

export default function SearchPage() {
  const pathIndetefier = usePathIndetefier();

  return (
    <div>
      <PathIndetefier items={pathIndetefier} />
    </div>
  );
}
