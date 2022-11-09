import Achievement from "./achievement";

export default function AchievementGroup(props) {
  return (
    <div className="col-md-5 col-10">
      <div
        className="rounded bg-dark accordion accordion-flush p-3 shadow-sm"
        id={"accordionGroup" + props.id}
        style={{ overflow: "auto", height: "300px" }}
      >
        <p className="text-center text-primary fs-4 fw-bold">{props.name}</p>

        {props.achievements.map((achievement) => (
          <Achievement
            key={achievement.id}
            groupId={props.id}
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
