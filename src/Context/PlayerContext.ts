import { createContext } from "react";
import type Player from "../utils/Player";

const PlayerContext = createContext<{
  player: Player,
  setPlayer: (player: Player) => void
} | undefined>(undefined);

export default PlayerContext;