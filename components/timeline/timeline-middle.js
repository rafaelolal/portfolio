import styles from "./timeline-middle.module.css";
import TimelineComponent from "./timeline-component";

export default function TimelineMiddle(props) {
  if (props.bottom) {
    return (
      <div className={styles.timeline__middle}>
        <div className={styles.timeline__point}></div>
        <div
          className={`${styles.timeline__point} ${styles.timeline__point__bottom}`}
        ></div>
      </div>
    );
  }

  return (
    <div className={styles.timeline__middle}>
      <div className={styles.timeline__point}></div>
    </div>
  );
}
