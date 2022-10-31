import PostList from "../components/posts/post-list";
import PostSearch from "../components/posts/post-search";

import { useState } from "react";

export default function BlogPage() {
  const [isShowingCopy, setIsShowingCopy] = useState(false);

  const [currentList, setCurrentList] = useState();
  const [currentSearch, setCurrentSearch] = useState();
  const [currentYear, setCurrentYear] = useState();
  const [currentMonth, setCurrentMonth] = useState();

  return (
    <>
      {isShowingCopy && <p className="myToast">Link copied!</p>}

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
