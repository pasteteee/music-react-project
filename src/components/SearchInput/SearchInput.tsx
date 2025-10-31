import styles from "./SearchInput.module.scss";
import { useContext, useState } from "react";
import type { TSong } from "../../utils/Player";
import PlayerContext from "../../context/PlayerContext";
import useResolveAfterDelay from "../../hook/useResolveAfterDelay";
import Loader from "../Loader/Loader";

export default function SearchInput() {
  const player = useContext(PlayerContext);

  const [helps, setHelps] = useState<TSong[] | undefined>(undefined);
  const [updateValue, isPending] = useResolveAfterDelay(
    async (value: string) => {
      console.log(player);
      const songs = await player?.findTrack(value, 5);
      if (songs != undefined) setHelps(() => [...songs]);
      else setHelps(undefined);
    },
    1000
  );

  return (
    <div className={styles.wrapper}>
      <input type="text" onChange={(e) => updateValue(e.target.value)} />
      {helps && helps.length > 0
        ? helps.map((el, ind) => {
            return <div key={`helps${ind}`}>{`${el.title}`}</div>;
          })
        : ""}
      {isPending && <Loader />}
    </div>
  );
}
