import { useState } from "react";
import styles from "./Sidebar.module.scss";
import logo from "./logo.svg";

interface TSidebar {
  data: Object[];
}

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} />
        <h1>TuneTrek</h1>
      </div>

      <ul className={styles.block}>
        <li data-type="description">Home</li>
        <li data-state="active">Home</li>
        <li>Search</li>
        <li>Likes</li>
        <li>Playlists</li>
        <li>Albums</li>
      </ul>

      <ul className={styles.block}>
        <li>Home</li>
        <li>Serch</li>
        <li>Likes</li>
        <li>Playlists</li>
        <li>Albums</li>
      </ul>
    </div>
  );
}
