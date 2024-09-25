import Head from "next/head";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import PostList from "../components/posts/post-list";
import PostSearch from "../components/posts/post-search";

export default function BlogPage() {
  const router = useRouter();

  // used only to refresh the component, the actual value is always extracted from the url
  const [currentList, setCurrentList] = useState();
  const [currentSearch, setCurrentSearch] = useState();
  const [currentYear, setCurrentYear] = useState();
  const [currentMonth, setCurrentMonth] = useState();

  useEffect(() => {
    if (router.isReady) {
      if (router.query.list === 'Project') {
        router.push('/portfolio');
      }
    }
  }, [router, router.isReady, router.query]);

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="fadeIn">
        <div className="blogfolio mt-5">
          <p className="">BLOGFOLIO</p>
        </div>

        <PostSearch
          setCurrentList={setCurrentList}
          setCurrentSearch={setCurrentSearch}
          setCurrentYear={setCurrentYear}
          setCurrentMonth={setCurrentMonth}
        />

        <PostList
          setCurrentList={setCurrentList}
          currentSearch={currentSearch}
          currentYear={currentYear}
          currentMonth={currentMonth}
        />

        <div className="d-flex flex-column my-5">
          <a
            className="btn btn-secondary btn-block mx-auto text-white"
            href="/blog/posts"
          >
            Reset Filters
          </a>
        </div>
      </div>
    </>
  );
}
