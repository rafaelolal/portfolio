import Head from "next/head";
import Image from "next/future/image";
import AchievementList from "../components/achievements/achievement-list";
export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className="row m-0 mt-5 fadeIn d-flex">
        <div
          className="col-7 col-md-5 col-lg-4 mx-auto position-relative"
          style={{ minHeight: "33vh" }}
        >
          <Image
            src="/blog/profile.jpg"
            className="rounded shadow"
            alt="..."
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 1080px) 100vw,
            (max-width: 720px) 50vw,
            33vw"
          />
        </div>

        <div className="col-12 col-md-7 col-lg-8 p-3 my-5">
          <div className="fadeIn1">
            <p className="display-3 fw-bold">ABOUT ME</p>
            <p>
              I was born in Brazil, Minas Gerais and moved to the United States
              in 2016. I am currently a freshman at Bowdoin College, hoping to major in Computer Science. 
            </p>
          </div>
          <div className="fadeIn2">
            <p className="display-6 fw-bold text-primary">I ASPIRE TO BE</p>
            <p>
              A software engineer. As a child, I have always been inventive, and
              coding has been my way of actualizing the countless ideas
              scattered in my head.
            </p>
          </div>
          <div className="fadeIn3">
            <p className="display-6 fw-bold text-primary">I LIKE</p>
            <p>
              To work out, bike, hike, and play video games like Overwatch and Call of Duty. Working
              out has completely changed my life, and I play games competitively
              in my free time.
            </p>
          </div>
          <div className="fadeIn4">
            <p className="display-6 fw-bold text-primary">
              I AM CURRENTLY WORKING ON
            </p>
            <p className="mb-0">
              Getting acclamated with college life, and of course, this blog project. I have many more feature updates to come. I am also  studying discrete mathematics and learning Docker in my free time.
            </p>
          </div>
        </div>
      </div>

      <AchievementList />
    </>
  );
}
