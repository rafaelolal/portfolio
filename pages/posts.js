import PostList from "../components/posts/post-list";
import PostSearch from "../components/posts/post-search";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();

  const [isShowingCopy, setIsShowingCopy] = useState(false);

  const [currentList, setCurrentList] = useState();
  const [currentSearch, setCurrentSearch] = useState();
  const [currentYear, setCurrentYear] = useState();
  const [currentMonth, setCurrentMonth] = useState();

  useEffect(() => {
    setCurrentList(router.query.list);
  }, [router.isReady, router.query.list]);

  return (
    <>
      {isShowingCopy && (
        <p
          style={{ zIndex: 100 }}
          className="badge text-bg-success position-fixed bottom-0 end-0 m-3 p-3 fs-5"
        >
          Link copied to clipboard!
        </p>
      )}

      <div className="blogfolio">
        <p className="">BLOGFOLIO</p>
      </div>

      <div className="row mt-5 gx-3">
        <PostSearch
          setCurrentList={setCurrentList}
          setCurrentSearch={setCurrentSearch}
          setCurrentYear={setCurrentYear}
          setCurrentMonth={setCurrentMonth}
        />
      </div>

      <div className="row me-1 ms-1">
        <PostList
          currentList={currentList}
          currentSearch={currentSearch}
          currentYear={currentYear}
          currentMonth={currentMonth}
          isShowingCopy={isShowingCopy}
          setIsShowingCopy={setIsShowingCopy}
        />
      </div>
    </>
  );
}
