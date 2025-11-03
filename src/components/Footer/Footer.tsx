import styles from "./Footer.module.scss";
import { usePlayer } from "../../hook/usePlayer";
import { ReactSVG } from "react-svg";

export default function Footer() {
  const { player } = usePlayer();

  return (
    <div className={styles.footerPlayer} data-closed={!player?.queue?.current}>
      <div className={styles.songWrapper}>
        <input type="range" name="timeline" className={styles.timeLine} />

        <div className={styles.songImage}>{player?.queue?.current?.title}</div>
        <div className={styles.songController}>
          <div className={styles.meta}>
            <div className={styles.title}>
              {player?.queue?.current?.title ?? ""}
            </div>
            <div className={styles.artist}>
              {player?.queue?.current?.artistName ?? ""}
            </div>
          </div>
          <div className={styles.controls}>
            <button
              aria-label="Pause"
              onClick={() => player?.pause()}
              disabled={!player?.queue?.current}
            >
              <ReactSVG src="/footer-player/pause.svg" />
            </button>
            <button
              aria-label="Play"
              onClick={() => player?.play()}
              disabled={!player?.queue?.current}
            >
              <ReactSVG src="/footer-player/play.svg" />
            </button>
            <button
              aria-label="Next"
              onClick={() => player?.next()}
              disabled={!player?.queue?.next}
            >
              <ReactSVG src="/footer-player/next.svg" />
            </button>
          </div>
        </div>
        <div className={styles.songSettings}></div>
      </div>
    </div>
  );
}
