import { useEffect, useState } from "react";
import Achievement from "./achievement";

export default function AchievementGroup(props) {
  return (
    <div className="col-md-5 col-12">
      <div
        class="rounded bg-dark accordion accordion-flush p-3 pb-2"
        id="accordionFlushExample"
        style={{ overflowY: "auto", height: 300 }}
      >
        <p className="text-center text-primary fs-4">{props.name}</p>
        {props.achievements.map((achievement) => (
          <Achievement
            key={achievement.id}
            id={achievement.id}
            name={achievement.name}
            description={achievement.description}
            year={achievement.year}
            month={achievement.month}
            day={achievement.date}
            issuer={achievement.issuer}
          />
        ))}
      </div>
    </div>
  );
}
