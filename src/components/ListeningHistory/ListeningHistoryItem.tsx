import type { Track } from "../../utils/ListeningHistory";
import styles from "./ListeningHistory.module.scss";

interface TTrackItem {
  track: Track;
}

export default function ListeningHistoryItem({ track }: TTrackItem) {
  const auditions = (track.auditions > 1000 && track.auditions < 10000000) ? track.auditions / 1000 + 'K' : track.auditions > 10000000 ? track.auditions / 1000000 + 'M' : track.auditions;

  return (
    <div key={track.id} className={styles.card}>
      <div className={styles.nameContainer}>
        <img src={track.imageUrl} alt={track.title} className={styles.trackImage} />
        <div className={styles.name}>
          <div className={styles.trackTitle}>{track.title}</div>
          <p className={styles.artist}>{track.artist}</p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={`${styles.infoItem} ${styles.auditions}`}>
          <img src='../../public/img-sidebar/albums.svg' />
          {auditions}
        </div>
        <div className={styles.infoItem}>
          <img src='../../public/img-sidebar/like.svg' />
        </div>
      </div>
    </div>
  );
}
