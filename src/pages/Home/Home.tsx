import { PathIndetefier } from "../../components/PathIndetefier/PathIndetefier";
import { usePathIndetefier } from "../../utils/PathIndetefier";
import Slider from "../../components/Slider/Slider";
import { genresStruct } from "../../utils/GenreChart";
import ListeningHistory from "../../components/ListeningHistory/ListeningHistory";
import { listeningHistory } from "../../utils/ListeningHistory";

export default function Home() {
  const pathIndetefier = usePathIndetefier();

  return (
    <div>
      <PathIndetefier items={pathIndetefier} />
      <Slider charts={genresStruct} title="Charts: Top 50" />
      <ListeningHistory tracks={listeningHistory} maxItems={5} />
    </div>
  );
}
