import Achievement from "./achievement";

export default function AchievementGroup(props) {
  return (
    <div className="col-md-5 col-10">
      <div
        className="rounded bg-dark accordion accordion-flush p-3"
        id={"accordionGroup" + props.id}
        style={{ overflowY: "auto", height: 300 }}
      >
        <p className="text-center text-primary fs-4">{props.name}</p>
        {props.achievements.map((achievement) => (
          <Achievement
            key={achievement.id}
            groupdId = {props.id}
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
