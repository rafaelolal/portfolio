import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import { getPosts } from "./api/getPosts";

import LatestPost from "../components/posts/latest-post";
import ExploreIcon from "../components/icons/explore-icon";
import QuestionIcon from "../components/icons/question-icon";
import DownIcon from "../components/icons/down-icon";
import AboutIcon from "../components/icons/about-icon";
import ResumeIcon from "../components/icons/resume-icon";
import BlogIcon from "../components/icons/blog-icon";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section
        className="firstSection d-flex flex-column"
        style={{ backgroundColor: "lightBlue" }}
      >
        <div className="my-auto row">
          <div className="col-12 col-md-6 fadeIn1">
            <div className="blogfolio">
              <p>WELCOME</p>
            </div>
            <p className="text-center mt-4">Check out my latest post!</p>

            <Link className="mt-5" href="/posts">
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

          <div className="col-12 col-md-6 fadeIn2">
            <LatestPost
              id={props.post.id}
              list={props.post.list}
              title={props.post.title}
              date={props.post.date}
              description={props.post.description}
              images={props.post.images}
            />
          </div>
        </div>
      </section>

      <section className="section d-flex">
        <div className="row m-0 py-auto">
          <div className="col-12 col-md-7 my-auto p-0">
            <div className="">
              <LatestPost
                id={props.post.id}
                list={props.post.list}
                title={props.post.title}
                date={props.post.date}
                description={props.post.description}
                images={props.post.images}
              />
            </div>
          </div>

          <div className="col-12 col-md-5 my-auto">
            <div className="blogfolio mt-5">
              <p>LOOK AROUND</p>
            </div>
            <p className="mt-3 text-center">
              That is my latest post. Hopefully this will change every day!
            </p>

            <div className="row m-0 mt-5 justify-content-center">
              <div className="col-7">
                <center>
                  <Link href="/about">
                    <a>
                      <AboutIcon />
                      <a className="btn btn-dark">ABOUT ME</a>
                    </a>
                  </Link>
                  <p className="mt-4 text-center">
                    Check out my achievements and what I like to do.
                  </p>
                </center>
              </div>

              <div className="col-7 mt-4">
                <center>
                  <Link href="/resume">
                    <a>
                      <ResumeIcon />
                      <a className="btn btn-dark">RESUME</a>
                    </a>
                  </Link>
                </center>
                <p className="mt-4 text-center">
                  If writing bores you, read it in succinctly with my resume.
                </p>
              </div>

              <div className="col-7 mt-4">
                <center>
                  <Link href="/posts">
                    <a>
                      <BlogIcon />
                      <a className="btn btn-dark">BLOG</a>
                    </a>
                  </Link>
                  <p className="mt-4 text-center">
                    Check out the featured blogs for my best accomplishments
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section d-flex">
        <div className="col-12 col-md-10 col-lg-6 mx-auto my-auto">
          <div className="row m-0">
            <div className="col-12 fadeIn1">
              <div className="blogfolio mt-5">
                <p>WELCOME</p>
              </div>
              <p className="text-center mt-4">
                Here, I show off my technical skills and you learn more about
                me! This site was made from scratch with NextJS.
              </p>
            </div>

            <div className="col-12 col-md-6 mx-auto fadeIn2">
              <Link href="/about">
                <a>
                  <p className="text-center text-primary">
                    <QuestionIcon />
                  </p>
                </a>
              </Link>
              <p className="display-6 fw-bold text-center">Why?</p>

              <p className="text-center">
                I decided to create a blogfolio after noticing that all
                portfolios, though some may be more complex, always fall in the
                same structure.
              </p>
            </div>

            <div className="col-12 col-md-6 fadeIn3">
              <Link href="/posts">
                <a>
                  <p className="text-center text-primary">
                    <ExploreIcon />
                  </p>
                </a>
              </Link>
              <p className="display-6 fw-bold text-center">Explore!</p>

              <p className="text-center">
                If you are only interested in what really matters, explore About
                Me and Featured posts. Down this page is my latest post.
              </p>
            </div>
          </div>

          <center className="fadeIn4">
            <DownIcon />
          </center>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const latestPost = (await getPosts([])).data[0];

  return {
    props: { post: latestPost },
  };
}
