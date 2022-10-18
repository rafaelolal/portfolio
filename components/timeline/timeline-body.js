import styles from "./timeline-body.module.css";
import TimelineComponent from "./timeline-component";

export default function TimelineBody(props) {
  if (props.bottom) {
    return (
      <TimelineComponent>
        <div
          class={`${styles.timeline__component} ${styles.timeline__component__bottom} ${styles.timeline__component__bg}`}
        >
          <h2 class={styles.timeline__title}>{props.name}</h2>
          <p class={styles.timeline__paragraph}>{props.description}</p>
        </div>
      </TimelineComponent>
    );
  }

  return (
    <TimelineComponent>
      <div
        class={`${styles.timeline__component} ${styles.timeline__component__bg}`}
      >
        <h2 class={styles.timeline__title}>{props.name}</h2>
        <p class={styles.timeline__paragraph}>{props.description}</p>
      </div>
    </TimelineComponent>
  );
}
