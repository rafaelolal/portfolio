import Achievement from "./achievement";

export default function AchievementGroup(props) {
  return (
    <div className="col-md-5 col-10 p-0 mx-1">
        <div className="bg-dark rounded">
          <p className="text-center text-primary p-3 mb-0 fs-4 fw-bold">
            {props.type}
          </p>
        </div>
        <div
          className="accordion accordion-flush px-3 pb-3"
          id={"accordionGroup" + props.id}
          style={{ overflow: "auto", height: "300px" }}
        >
          {props.achievements.map((achievement) => (
            <Achievement
              key={achievement.id}
              groupId={props.id}
              id={achievement.id}
              name={achievement.name}
              description={achievement.description}
              link={achievement.link}
              date={achievement.date}
              issuer={achievement.issuer}
            />
          ))}
        </div>
    </div>
  );
}
