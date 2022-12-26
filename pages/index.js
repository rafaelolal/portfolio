import Link from "next/link";
import Head from "next/head";

import { getPosts } from "./api/getPosts";

import LatestPost from "../components/posts/latest-post";
import ExploreIcon from "../components/icons/explore-icon";
import DownIcon from "../components/icons/down-icon";
import ProjectIcon from "../components/icons/project-icon";
import AboutIcon from "../components/icons/about-icon";
import ResumeIcon from "../components/icons/resume-icon";
import BlogIcon from "../components/icons/blog-icon";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section className="firstSection d-flex flex-column">
        <div className="blogfolio mt-5 fadeIn1">
          <p>WELCOME</p>
        </div>

        <div className="row my-6">
          <div className="col-12 col-md-6 fadeIn2">
            <center>
              <Link href="/posts?list=Project">
                <a>
                  <ProjectIcon />
                  <a className="btn btn-dark fs-1">PROJECTS</a>
                </a>
              </Link>
              <p className="mt-4 text-center">
                Explore my old, new, and on-going projects.
              </p>
            </center>
          </div>

          <div className="col-12 col-md-6 fadeIn3">
            <center>
              <Link href="/resume">
                <a>
                  <ResumeIcon />
                  <a className="btn btn-dark fs-1">RESUME</a>
                </a>
              </Link>
            </center>
            <p className="mt-4 text-center">
              If reading bores you, read about me succinctly with my resume.
            </p>
          </div>
        </div>

        <div className="fadeIn4">
          <Link href="/posts">
            <a>
              <p className="text-center text-primary">
                <ExploreIcon />
              </p>
            </a>
          </Link>

          <p className="display-6 fw-bold text-center">Explore!</p>
          <center className="fadeIn4">
            <DownIcon />
          </center>
        </div>
      </section>

      <div className="mt-5 blogfolio fadeIn1">
        <p>MORE</p>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-12 col-md-6 mt-4">
          <center>
            <Link href="/about">
              <a>
                <AboutIcon />
                <a className="btn btn-dark fs-1">ABOUT ME</a>
              </a>
            </Link>
            <p className="mt-4 text-center">
              Check out my achievements and what I like to do.
            </p>
          </center>
        </div>

        <div className="col-12 col-md-6 mt-4">
          <center>
            <Link href="/posts">
              <a>
                <BlogIcon />
                <a className="btn btn-dark fs-1">BLOG</a>
              </a>
            </Link>
            <p className="mt-4 text-center">
              Check out the featured blogs for my best accomplishments
            </p>
          </center>
        </div>
      </div>

      <div className="col-12 col-md-10 col-lg-8 mx-auto my-5 fadeIn2">
        <LatestPost
          id={props.post.id}
          list={props.post.list}
          title={props.post.title}
          date={props.post.date}
          description={props.post.description}
          images={props.post.images}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const latestPost = (await getPosts([])).data[0];

  return {
    props: { post: latestPost },
  };
}
