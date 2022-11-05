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
        <div className="col-12 col-md-5 col-lg-4 rounded my-auto">
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
          <div className="fadeIn1">
            <p className="display-3 fw-bold">ABOUT ME</p>
            <p>
              I was born in Brazil, Minas Gerais and moved to the United States
              in 2016. I am currently a senior at the Academy for Information
              Technology, Scotch Plains.
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
              To work out and play video games (this excludes coding). Working
              out has completely changed my life, and I play games competitively
              in my free time.
            </p>
          </div>
          <div className="fadeIn4">
            <p className="display-6 fw-bold text-primary">
              I AM CURRENTLY WORKING ON
            </p>
            <p>
              College applications, and of course, this blog project. I have
              been working diligently for hours on end to make the user
              experience as good as possible to make using the blog enjoyable.
            </p>
          </div>
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
