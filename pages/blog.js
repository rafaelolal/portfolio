import PostList from "../components/posts/post-list";
import PostSearch from "../components/posts/post-search";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();

  const [currentList, setCurrentList] = useState();
  const [currentSearch, setCurrentSearch] = useState();
  const [currentYear, setCurrentYear] = useState();
  const [currentMonth, setCurrentMonth] = useState();

  useEffect(() => {
    setCurrentList(router.query.list);
  }, [router.isReady]);

  return (
    <div className="container">
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
      />
    </div>
  );
}
