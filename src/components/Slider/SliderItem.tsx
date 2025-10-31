import type { GenreChartItem } from "../../utils/GenreChart";
import styles from "./Slider.module.scss";

interface TSliderItem {
  genre: GenreChartItem;
}

export default function SliderItem({ genre }: TSliderItem) {
  return (
    <div key={genre.id} className={styles.card}>
      <img src={genre.imgUrl} alt={genre.genre} className={styles.chartImage} />
      <div className={styles.genreTitle}>{genre.genre}</div>
      <p className={styles.catTitle}>{genre.title}</p>
    </div>
  );
}
