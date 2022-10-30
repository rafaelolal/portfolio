import { useEffect, useState } from "react";
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
    <div className="row g-3 flex-nowrap">
      {achievementGroups.map((group) => (
        <AchievementGroup
          key={group.id}
          id={group.id}
          achievements={group.achievements}
          name={group.name}
        />
      ))}
    </div>
  );
}
