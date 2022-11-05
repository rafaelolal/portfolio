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
  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  useEffect(() => {
    window.onscroll = function (e) {
      let el = document.getElementsByClassName("jump")[0];
      if (el) {
        if (window.scrollY >= convertRemToPixels(5)) {
          el.style.opacity = 0;
        } else {
          el.style.opacity = 100;
        }
      }
    };
  });

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section className="tall1 d-flex">
        <div className="col-12 col-md-10 col-lg-6 mx-auto my-auto">
          <div className="row">
            <div className="col-12 fadeIn1">
              <div className="blogfolio">
                <p>WELCOME</p>
              </div>
              <p className="text-center mt-3 mx-auto mt-4">
                You will find from Featured blogs to my day-to-day activities.
                Here, I show off my technical skills and you learn more about
                me!
              </p>
            </div>

            <div className="col-12 col-md-6 mx-auto fadeIn2">
              <Link href="/about">
                <p className="text-center text-primary">
                  <QuestionIcon />
                </p>
                <p className="display-6 fw-bold text-center">Why?</p>
              </Link>
              <p className="text-center">
                I decided to create a blogfolio after noticing that all
                portfolios, though some may be more complex, always fall in the
                same structure.
              </p>
            </div>

            <div className="col-12 col-md-6 fadeIn3">
              <Link href="/posts">
                <p className="text-center text-primary">
                  <ExploreIcon />
                </p>
                <p className="display-6 fw-bold text-center">Explore!</p>
              </Link>

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

      <section id="section2" className="tall2 d-flex">
        <div className="row py-auto g-5">
          <div className="col-12 col-md-7 my-auto">
            <div className="">
              <LatestPost
                id={props.post.id}
                list={props.post.list}
                title={props.post.title}
                year={props.post.year}
                month={props.post.month}
                day={props.post.day}
                description={props.post.description}
                images={props.post.images}
              />
            </div>
          </div>

          <div className="col-12 col-md-5 my-auto">
            <div className="blogfolio">
              <p>LOOK AROUND</p>
            </div>
            <p className="mt-3 text-center">
              That is my latest post. Hopefully this will change every day!
            </p>

            <div className="row g-2 mt-5 justify-content-center">
              <div className="col-6">
                <center>
                  <Link href="/about">
                    <AboutIcon />
                    <a className="btn btn-dark">ABOUT ME</a>
                  </Link>
                  <p className="mt-2 text-center">
                    Check out my achievements and what I like to do.
                  </p>
                </center>
              </div>

              <div className="col-6">
                <center>
                  <Link href="/resume">
                    <ResumeIcon />
                    <a className="btn btn-dark">RESUME</a>
                  </Link>
                </center>
                <p className="mt-2 text-center">
                  If writing bores you, read it in succinctly with my resume.
                </p>
              </div>

              <div className="col-6 mx-auto">
                <center>
                  <Link href="/posts">
                    <BlogIcon />
                    <a className="btn btn-dark">BLOG</a>
                  </Link>
                  <p className="mt-2 text-center">
                    Check out the featured blogs for my best accomplishments
                  </p>
                </center>
              </div>
            </div>
          </div>
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
