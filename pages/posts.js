import PostList from "../components/posts/post-list";
import PostSearch from "../components/posts/post-search";

import { useState } from "react";
import Head from "next/head";

export default function BlogPage() {
  const [isShowingCopy, setIsShowingCopy] = useState(false);

  const [currentList, setCurrentList] = useState();
  const [currentSearch, setCurrentSearch] = useState();
  const [currentYear, setCurrentYear] = useState();
  const [currentMonth, setCurrentMonth] = useState();

  return (
    <div className="fadeIn">
      <Head>
        <title>Blog</title>
      </Head>

      {isShowingCopy && <p className="myToast">Link copied!</p>}

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
        currentList={currentList}
        currentSearch={currentSearch}
        currentYear={currentYear}
        currentMonth={currentMonth}
        isShowingCopy={isShowingCopy}
        setIsShowingCopy={setIsShowingCopy}
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
  );
}
