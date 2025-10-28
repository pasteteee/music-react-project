import styles from "./Footer.module.scss";
import type { TSong } from "../../utils/Song";
import Player from "../../utils/Song";
import { useEffect } from "react";

interface TFooter {
  currentSong: TSong;
}

export default function Footer(props: TFooter) {
  useEffect(() => {
    let song: Player = new Player();
    song.findTrack("99 problems");
  }, []);

  return (
    <div className={styles.footerPlayer}>
      <div className={styles.songWrapper}>
        <div className={styles.songImage}></div>
        <div className={styles.songController}></div>
        <div className={styles.songSettings}></div>
      </div>
    </div>
  );
}
