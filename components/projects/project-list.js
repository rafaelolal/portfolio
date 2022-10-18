import Project from "./project";

export default function ProjectList(props) {
  const { projects } = props;

  return (
    <div className="row">
      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          short_description={project.short_description}
          date={project.date}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
}
