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

      {props.data.map((el: TSidebarData, ind1: number) => {
        return (
          <ul key={`ul${el.name}${ind1}`}>
            <li data-type="description">{el.name}</li>
            {el.links.map((link: TSidebarItems, ind2: number) => (
              <li
                key={`li${link.link}${ind2}`}
                data-active={window.location.pathname == link.link}
              >
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
