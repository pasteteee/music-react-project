import styles from "./SearchInput.module.scss";
import { useState } from "react";
import type { TSong } from "../../utils/Player";
import useResolveAfterDelay from "../../hook/useResolveAfterDelay";
import Loader from "../Loader/Loader";
import { usePlayer } from "../../hook/usePlayer";

export default function SearchInput() {
  const { player } = usePlayer();

  const [helps, setHelps] = useState<TSong[] | undefined>(undefined);
  const [updateValue, isPending] = useResolveAfterDelay(
    async (value: string) => {
      const songs = await player?.findTrack(value, 5);
      if (songs != undefined) setHelps(() => [...songs]);
      else setHelps(undefined);
    },
    1000
  );

  return (
    <div className={styles.wrapper}>
      <input type="text" onChange={(e) => updateValue(e.target.value)} />
      {isPending && (
        <div className={styles.content}>
          <Loader />
        </div>
      )}
      {helps && helps.length > 0 ? (
        <div className={styles.content}>
          {helps.map((el, ind) => {
            return (
              <div
                style={{ display: "block", width: "100%" }}
                key={`helps${ind}`}
              >{`${el.title} - ${el.artistName}`}</div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
