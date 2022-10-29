import styles from "./timeline-component.module.css"

export default function TimelineComponent(props) {
  return (<div className={styles.timeline__component}>
    {props.children}
    </div>)
}