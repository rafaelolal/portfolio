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
  }, [router.isReady]);

  return (
    <div className="container">
      {isShowingCopy && (
        <p style={{zIndex: 100}} class="badge text-bg-success position-fixed bottom-0 end-0 m-3 p-3 fs-5">
          Link copied to clipboard!
        </p>
      )}
      <div className="vb mt-5 blogfolio mx-auto">
        <p className="fw-bold text-center mx-4 display-1">BLOGFOLIO</p>
      </div>
      <PostSearch
        setCurrentList={setCurrentList}
        setCurrentSearch={setCurrentSearch}
        setCurrentYear={setCurrentYear}
        setCurrentMonth={setCurrentMonth}
      />
      <PostList
        currentList={currentList}
        currentSearch={currentSearch}
        currentYear={currentYear}
        currentMonth={currentMonth}
        isShowingCopy={isShowingCopy}
        setIsShowingCopy={setIsShowingCopy}
      />
    </div>
  );
}
