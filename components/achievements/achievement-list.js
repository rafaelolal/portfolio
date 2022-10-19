import { useState } from "react";
import Achievement from "./achievement";

export default function AchievementList() {
  
  const [achievements, setAchievements] = useState();

  useEffect(() => {
    fetch("/api/getAchievements", {
      method: "POST",
      body: JSON.stringify({ postId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAchievements(data.data);
      });
  }, []);

  if (!achievements) {
    return <p>Loading...</p>;
  }

  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      {achievements.map((achievement) => (
        <Achievement
          key={achievement.id}
          id={achievement.id}
          name={achievement.name}
          description={achievement.description}
          year={achievement.year}
          month={achievement.month}
          day={achievement.date}
          granter={achievement.associated_with}
        />
      ))}
    </div>
  );
}
