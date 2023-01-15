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
        var grouped = {};

        for (let item of data.data) {
          if (!(item.type in grouped)) {
            grouped[item.type] = [];
            grouped[item.type].push(item);
            continue;
          }
          grouped[item.type].push(item);
        }

        var listOfGroups = [];
        for (var type in grouped) {
          listOfGroups.push({
            type: type,
            achievements: grouped[type],
            id: type,
          });
        }

        setAchievementGroups(listOfGroups);
      });
  }, []);

  if (!achievementGroups) {
    return <Loading />;
  }

  return (
    <div
      className="row flex-nowrap fadeIn rounded my-5 m-0 hiddenBar"
      style={{ overflow: "auto" }}
    >
      {achievementGroups.map((group) => (
        <AchievementGroup
          key={group.id}
          id={group.id}
          type={group.type}
          achievements={group.achievements}
        />
      ))}
    </div>
  );
}
