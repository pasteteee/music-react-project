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

    setTimeout(() => {
      if (currentCounter !== counterRef.current) return;

      player?.findTrack("Бонд с кнопкой");
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <input type="text" onChange={(e) => updateValue(e.target.value)} />
    </div>
  );
}
