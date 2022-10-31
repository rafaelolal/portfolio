import Head from "next/head";
import Image from "next/image";
import AchievementList from "../components/achievements/achievement-list";
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="row mt-5 fadeIn">
        <div className="col-12 col-md-5 col-lg-4 rounded">
          <div className="bg-dark p-3 shadow">
            <Image
              src="/blog/profile.jpg"
              className="img-fluid rounded"
              alt="..."
              width="75%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="col-12 col-md-7 col-lg-8 p-3 my-auto">
          <p className="display-3 fw-bold">ABOUT ME</p>
          <p className="text-primary">Aspiring Software Engineer</p>
          <p>
            I was born in Brazil, Minas Gerais. When I moved to the United
            States in 2016, a cousin of mine introduced me to programming. Since
            then, I have not stopped coding because I see it as a means to
            express my ideas. I have taught, created projects and solutions, and
            competed. I plan to purue a major in Computer Science as I wish to
            continue using my skills to help others, and to provide a better
            life for my family.
          </p>
        </div>
      </div>

      <div className="blogfolio mt-4">
        <p>ACHIEVEMENTS</p>
      </div>

      <div className="rounded my-5" style={{ overflow: "auto" }}>
        <AchievementList />
      </div>
    </>
  );
}
