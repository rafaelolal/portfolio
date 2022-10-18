import TimelineItem from "./timeline-item";

import styles from "./timeline.module.css"

export default function Timeline(props) {
  const { entries } = props;

  return (
    <div class={styles.timeline}>
      {entries.map((entry, index) => (
        <TimelineItem
          key={entry.id}
          id={entry.id}
          name={entry.name}
          description={entry.description}
          start_date={entry.start_date}
          end_date={entry.end_date}
          bottom={index==entries.length-1}
          right={index%2 == 0}
        />
      ))}
    </div>
  );
}
