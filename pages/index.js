import Link from "next/link";

import { getPosts } from "./api/getPosts";

import LatestPost from "../components/posts/latest-post";
import ExploreIcon from "../components/icons/explore-icon";
import QuestionIcon from "../components/icons/question-icon";
import Head from "next/head";

export default function Home(props) {
  return (
    <div className="row mt-5">
      <Head>
        <title>Home</title>
      </Head>
      <div className="col-12 col-md-6 my-auto">
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
      <div className="col-12 col-md-6 my-5">
        <div className="blogfolio">
          <p>WELCOME</p>
        </div>
        <p className="text-center mt-3 mx-auto mt-4">
          Welcome to my blog. Here you will see blogs from my{" "}
          <Link href="/posts?list=Featured">
            <a className="text-Featured fw-bold">Featured</a>
          </Link>{" "}
          endeavors to my day-to-day activities. It is organized in a way that
          you can easily find out what I am up to, and what I am proud of. You
          will also have the opportunity to learn more about me than you could
          in a normal portfolio.
        </p>
        <div className="row mt-5">
          <div className="col-12 col-md-6 mx-auto">
            <p className="text-center text-primary">
              <QuestionIcon />
            </p>
            <p className="display-6 fw-bold text-center">Why?</p>
            <p className="text-center">
              It is complicated, but I independently came up with the idea of a
              blogfolio right after finishing my normal portfolio and noticing
              that it was a literal copy and paste of everything else one sees.
              Blogging would also bring me the benefits of journaling.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-center text-primary">
              <ExploreIcon />
            </p>
            <p className="display-6 fw-bold text-center">Explore!</p>

            <p className="text-center">
              Yes, this is a blog, but if you are only interested in what really
              matters, explore the{" "}
              <Link href="/posts?list=Featured">
                <a className="text-Featured fw-bold">Featured</a>
              </Link>{" "}
              posts. If you have the time, you can always check out other posts
              to see what I am up to. On this page is my latest post.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const latestPost = (await getPosts([])).data[0];

  return {
    props: { post: latestPost },
  };
}
