import styles from "./Footer.module.scss";
import { usePlayer } from "../../hook/usePlayer";

export default function Footer() {
  const { player } = usePlayer();

  return (
    <div className={styles.footerPlayer} data-closed={!player?.queue?.current}>
      <div className={styles.songWrapper}>
        <div className={styles.songImage}>{player?.queue?.current?.title}</div>
        <div className={styles.songController}></div>
        <div className={styles.songSettings}></div>
      </div>
    </div>
  );
}
