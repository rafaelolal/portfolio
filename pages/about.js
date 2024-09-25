import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import AchievementList from "../components/achievements/achievement-list";
import BlogIcon from "../components/icons/blog-icon";
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
              in 2016. I am currently a CS major at Bowdoin College in Maine. Visit my blog below to learn more about my personal life.
            </p>

            <div className="mt-1 mb-3 ms-0">
              <Link href="/posts">
                <a>

                  <a className="btn btn-dark fs-4 me-2">Blog</a>
                  <BlogIcon />
                </a>
              </Link>
            </div>
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
              To work out, bike, hike, and play competitive shooter games. Currently, my favorite games are Overwatch and The Finals. I have also started to practice more calisthenics instead of weightlifting.
            </p>
          </div>
          <div className="fadeIn4">
            <p className="display-6 fw-bold text-primary">
              I AM CURRENTLY WORKING ON
            </p>
            <p className="mb-0">
              Living the college life, working on my own projects, and attending as many hackathons as possible!
            </p>
          </div>
        </div>
      </div>

      <AchievementList />
    </>
  );
}
