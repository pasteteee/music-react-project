import { PathIndetefier } from "../../components/PathIndetefier/PathIndetefier";
import { usePathIndetefier } from "../../utils/PathIndetefier";
import Slider from "../../components/Slider/Slider";
import { genresStruct } from "../../utils/GenreChart";

export default function Home() {
  const pathIndetefier = usePathIndetefier();

  return (
    <div>
      <PathIndetefier items={pathIndetefier} />
      <Slider charts={genresStruct} title="Charts: Top 50" />
    </div>
  );
}
