import { useEffect, useRef, useState } from "react";
import AchievementList from "../../components/achievements/achievement-list";
export default function AboutPage() {
  const [showingToast, setShowingToast] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const toastRef = useRef();
  const bodyRef = useRef();

  function addEmail() {
    fetch("api/addEmail", {
      method: "PATCH",
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        body: bodyRef.current.value,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Email added") {
          setShowingToast(true);
        }
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 rounded">
          <div className="about bg-light">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQFwkn0a87ZkUQ/profile-displayphoto-shrink_800_800/0/1656096799326?e=1668643200&v=beta&t=7_m9v79bpEGcI9hXtaZPCbPoCZ4zHXosJpS5rw73x7U"
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>

        <div className="col-12 col-md-8">
          <h1 className="mt-4 text-center">About</h1>
          <p className="mx-5">
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
      <h1 className="text-center">Achievements</h1>
      <AchievementList />
    </div>
  );
}
