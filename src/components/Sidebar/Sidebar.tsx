import styles from "./Sidebar.module.scss";
import logo from "./logo.svg";
import { ReactSVG } from "react-svg";
import type {
  TSidebar,
  TSidebarItems,
  TSidebarData,
} from "../../utils/Sidebar";

export default function Sidebar(props: TSidebar) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} />
        <h1>TuneTrek</h1>
      </div>

      {props.data.map((el: TSidebarData) => {
        return (
          <ul>
            <li data-type="description">{el.name}</li>
            {el.links.map((link: TSidebarItems) => (
              <li>
                <a href={link.link} data-new={link.isNew}>
                  <ReactSVG src={link.image} />
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
