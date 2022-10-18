import { Fragment } from "react";
import TimelineBody from "./timeline-body";
import TimelineDate from "./timeline-date";
import TimelineMiddle from "./timeline-middle";

export default function TimelineItem(props) {
  if (props.right) {
    return (
      <Fragment>
        <TimelineDate
          start_date={props.start_date}
          end_date={props.end_date}
          right={props.right}
        />
        <TimelineMiddle bottom={props.bottom} />
        <TimelineBody
          name={props.name}
          description={props.description}
          bottom={props.bottom}
        />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <TimelineBody
        name={props.name}
        description={props.description}
        bottom={props.bottom}
      />
      <TimelineMiddle bottom={props.bottom} />
      <TimelineDate
        start_date={props.start_date}
        end_date={props.end_date}
        right={props.right}
      />
    </Fragment>
  );
}
