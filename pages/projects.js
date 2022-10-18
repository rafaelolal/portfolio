import { MongoClient } from "mongodb";

import ProjectList from "../components/projects/project-list";

export default function ProjectsPage(props) {
  return <ProjectList projects={props.projects} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://rafaelpbcp:vejsqOpE2lUUVBpq@cluster0.devpukt.mongodb.net/portfolio?retryWrites=true&w=majority"
  );
  const projectsCollection = client.db().collection("projects");

  const projects = await projectsCollection.find().toArray();

  return {
    props: {
      projects: projects.map((project) => ({
        name: project.name,
        short_description: project.short_description,
        date: project.date,
        link: project.link,
        image: project.image,
        id: project._id.toString(),
      })),
    },
  };
}
