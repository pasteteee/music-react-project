import styles from "./PathIndetefier.module.scss";
import { Link } from "react-router-dom";
import type { PathItem } from "../../utils/PathIndetefier";

interface PathIndetefierProps {
  items: PathItem[];
}

export const PathIndetefier = ({ items }: PathIndetefierProps) => {
  return (
    <nav className={styles.pathIndetefier}>
      {items.map((item, index) => (
        <div key={item.label} className={styles.pathIndetefierItem}>
          {item.path && !item.isActive ? (
            <Link to={item.path} className={styles.pathIndetefierLink}>
              {item.label}
            </Link>
          ) : (
            <span className={`${styles.pathIdentifierText} ${item.isActive ? styles.active : ''}`}>
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <span className={styles.breadcrumbSeparator}> › </span>
          )}
        </div>
      ))}
    </nav>
  );
};
