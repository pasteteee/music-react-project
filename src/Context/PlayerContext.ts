import { createContext } from "react";
import type Player from "../utils/Player";

const PlayerContext = createContext<Player | undefined>(undefined);

export default PlayerContext;