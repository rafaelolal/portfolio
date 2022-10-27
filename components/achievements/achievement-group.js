import { useEffect, useState } from "react";
import Achievement from "./achievement";

export default function AchievementGroup(props) {
  return (
    <div className="col col-3">
      <div
        class="bg-dark accordion accordion-flush px-2 pb-2"
        id="accordionFlushExample"
        style={{ overflow: "auto", height: 300 }}
      >
        <p>{props.name}</p>
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
