import PlayerContext from "../context/PlayerContext";
import { useContext } from "react";

export const usePlayer = () => {
  const playerValue = useContext(PlayerContext);

  if (playerValue === undefined)
    return {player:undefined, setPlayer: undefined};
  return playerValue;
}