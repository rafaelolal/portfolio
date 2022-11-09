import { useEffect, useState } from "react";
import Loading from "../layout/loading";
import AchievementGroup from "./achievement-group";

export default function AchievementList() {
  const [achievementGroups, setAchievementGroups] = useState();

  useEffect(() => {
    fetch("/blog/api/getAchievements", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setAchievementGroups(data.data);
      });
  }, []);

  if (!achievementGroups) {
    return <Loading />;
  }

  return (
    <div
      className="rounded my-5 row m-0 gx-3 flex-nowrap fadeIn"
      style={{ overflow: "auto" }}
    >
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
