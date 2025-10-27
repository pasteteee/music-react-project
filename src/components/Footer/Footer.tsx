import styles from "./Footer.module.scss"
import type { TSong } from "../../utils/Song";

interface TFooter {
    currentSong: TSong;
}

export default function Footer(props: TFooter) {
    return (<div className={styles.footerPlayer}>
        <div className={styles.songWrapper}>
            <div className={styles.songImage}>

            </div>
            <div className={styles.songController}>

            </div>
            <div className={styles.songSettings}>

            </div>
        </div>
    </div>);
}