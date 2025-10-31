import styles from "./ListeningHistory.module.scss";
import { Link } from "react-router-dom";
import type { ListeningHistoryProps } from "../../utils/ListeningHistory";
import ListeningHistoryItem from "./ListeningHistoryItem";
import { useRef, useState } from 'react';

const ListeningHistory = ({ tracks, maxItems }: ListeningHistoryProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollUp, setScrollUp] = useState(0);

  // Обработчики для свайпа 
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageY - scrollContainerRef.current.offsetTop);
    setScrollUp(scrollContainerRef.current.scrollTop);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const y = e.touches[0].pageY - scrollContainerRef.current.offsetTop;
    const walk = (y - startX);
    scrollContainerRef.current.scrollTop = scrollUp - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Для мыши
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageY - scrollContainerRef.current.offsetTop);
    setScrollUp(scrollContainerRef.current.scrollTop);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const y = e.pageY - scrollContainerRef.current.offsetTop;
    const walk = (y - startX);
    scrollContainerRef.current.scrollTop = scrollUp - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className={styles.listeningHistory}>
      <div className={styles.header}>
        <div className={styles.title}>
          Listening History
        </div>
        <Link to='/' className={styles.seeAll} key={maxItems}>
          See All
        </Link>
      </div>
      <div
        className={styles.tracksContainer}
        ref={scrollContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}>
        <div className={styles.tracks}>
          {tracks.map((track) => (
            <Link to={track.link} className={styles.link} key={track.id}>
              <ListeningHistoryItem track={track} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListeningHistory;
