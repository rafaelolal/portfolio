import Achievement from "./achievement";

export default function AchievementList(props) {
  const { achievements } = props;

  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      {achievements.map((achievement) => (
        <Achievement
          key={achievement.id}
          id={achievement.id}
          name={achievement.name}
          description={achievement.description}
          date={achievement.date}
          associated_with={achievement.associated_with}
        />
      ))}
    </div>
  );
}
