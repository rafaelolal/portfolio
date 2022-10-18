export default function AboutPage() {
  return (
    <div className="row">
      <div className="col-4 bg-dark rounded p-4 text-light">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQFwkn0a87ZkUQ/profile-displayphoto-shrink_800_800/0/1656096799326?e=1668643200&v=beta&t=7_m9v79bpEGcI9hXtaZPCbPoCZ4zHXosJpS5rw73x7U"
          className="img-thumbnail"
          alt="..."
        />
        <h1 className="mt-4">About</h1>
        <p>
          I was born in Brazil, Minas Gerais. When I moved to the United States
          in 2016, a cousin of mine introduced me to programming. Since then, I
          have not stopped coding because I see it as a means to express my
          ideas. I have taught, created projects and solutions, and competed. I
          plan to purue a major in Computer Science as I wish to continue using
          my skills to help others, and to provide a better life for my family.
        </p>
      </div>
      <div className="col-4">
        <div className="bg-dark rounded p-2 text-light">
          <h1 className="text-center">Achievements</h1>
        </div>
      </div>
      <div className="col-4">
      <div className="bg-dark rounded p-2 text-light">
          <h1 className="text-center">Certifications</h1>
        </div>
      </div>
    </div>
  );
}
