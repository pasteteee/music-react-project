import styles from "./SearchInput.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import type { TSong } from "../../utils/Player";
import PlayerContext from "../../Context/PlayerContext";

export default function SearchInput() {
  const player = useContext(PlayerContext);

  const [searchValue, setSearchValue] = useState<string>("");
  const counterRef = useRef(0);
  const [helps, setHelps] = useState<TSong[] | undefined>(undefined);

  const updateValue = (value: string) => {
    setSearchValue(value);
    counterRef.current += 1;
    const currentCounter = counterRef.current;

    setTimeout(async () => {
      if (currentCounter !== counterRef.current) return;

      const songs = await player?.findTrack(value, 5);
      if (songs != undefined) setHelps((...prev) => [...songs]);
      else setHelps(undefined);
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <input type="text" onChange={(e) => updateValue(e.target.value)} />
      {helps && helps.length > 0
        ? helps.map((el, ind) => {
            return <div key={`helps${ind}`}>{`${el.title}`}</div>;
          })
        : ""}
    </div>
  );
}
