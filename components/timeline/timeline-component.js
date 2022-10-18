import styles from "./timeline-component.module.css"

export default function TimelineComponent(props) {
  return (<div class={styles.timeline__component}>
    {props.children}
    </div>)
}