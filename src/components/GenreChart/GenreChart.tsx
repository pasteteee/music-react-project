import styles from "./GenreChart.module.scss";
import { Link } from "react-router-dom";
import type { GenreChartItem } from "../../utils/GenreChart";
import { useRef, useState } from 'react';

interface GenreChartProps {
  charts: GenreChartItem[];
}

export const GenreChart = ({ charts }: GenreChartProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Обработчики для свайпа
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX);
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Обработчики для мыши 
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX);
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className={styles.genreChart}>
      <div className={styles.header}>
        <div className={styles.title}>
          Charts: Top 50
        </div>
        <div className={styles.navButtons}>
          <button className={styles.navButton} onClick={() => scroll('left')}> ‹ </button>
          <button className={styles.navButton} onClick={() => scroll('right')}> › </button>
        </div>
      </div>
      <div
        className={styles.cardsRow}
        ref={scrollContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {charts.map(genre => (
          <Link to={genre.link} className={styles.link} key={genre.id}>
            <div key={genre.id} className={styles.card}>
              <img src={genre.imgUrl} alt={genre.genre} className={styles.chartImage} />
              <div className={styles.genreTitle}>{genre.genre}</div>
              <p className={styles.catTitle}>{genre.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
