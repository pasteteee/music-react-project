import styles from "./Sidebar.module.scss";
import logo from "./logo.svg";
import { ReactSVG } from "react-svg";
import type { TSidebarItems, TSidebarData } from "../../utils/Sidebar";
import { Link, useLocation } from "react-router-dom";

interface TSidebar {
  data: TSidebarData[];
}

export default function Sidebar(props: TSidebar) {
  const locate = useLocation();

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
                data-active={locate.pathname == link.link}
              >
                <Link to={link.link} data-new={link.isNew}>
                  <ReactSVG src={link.image} />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
