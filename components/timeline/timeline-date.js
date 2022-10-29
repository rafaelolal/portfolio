import styles from "./timeline-date.module.css";
import TimelineComponent from "./timeline-component";

export default function TimelineDate(props) {
  if (props.right) {
    return (
      <TimelineComponent>
        <div className={`${styles.timeline__date} ${styles.timeline__date__right}`}>
          {props.start_date}/{props.end_date}
        </div>
      </TimelineComponent>
    );
  }

  return (
    <TimelineComponent>
      <div className={styles.timeline__date}>{props.start_date}/{props.end_date}</div>
    </TimelineComponent>
  );
}
