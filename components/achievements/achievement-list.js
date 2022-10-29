import { useEffect, useState } from "react";
import Achievement from "./achievement";
import AchievementGroup from "./achievement-group";

export default function AchievementList() {
  const [achievementGroups, setAchievementGroups] = useState();

  useEffect(() => {
    fetch("/api/getAchievements", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setAchievementGroups(data.data);
      });
  }, []);

  if (!achievementGroups) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded mb-5" style={{ overflow: "auto" }}>
      <div className="row g-3 flex-nowrap">
        {achievementGroups.map((group) => (
          <AchievementGroup
            achievements={group.achievements}
            name={group.name}
          />
        ))}
      </div>
    </div>
  );
}
