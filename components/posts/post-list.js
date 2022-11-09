import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

import Post from "./post";
import Loading from "../layout/loading";

export default function PostList(props) {
  const router = useRouter();
  const { isReady } = router;
  const routerList = router.query.list;

  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { setCurrentList, currentSearch, currentYear, currentMonth } = props;

  useEffect(() => {
    setIsLoading(true);

    let query = {};
    routerList && (query.list = routerList);
    currentSearch && (query.search = currentSearch);
    currentYear && (query.year = currentYear);
    currentMonth && (query.month = currentMonth);

    if (isReady) {
      fetch("/blog/api/getPosts", {
        method: "POST",
        body: JSON.stringify(query),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          setPosts(data.data);
          setIsLoading(false);
        });
    }
  }, [routerList, isReady, currentSearch, currentYear, currentMonth]);

  if (isLoading) {
    return <Loading />;
  }

  if (!posts) {
    return <p className="text-center fw-bold mt-5">NO POSTS FOUND</p>;
  }

  return (
    <div className="fadeIn">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          list={post.list}
          title={post.title}
          year={post.year}
          month={post.month}
          day={post.day}
          description={post.description}
          body={post.body}
          links={post.links}
          images={post.images}
          likes={post.likes}
          comments={post.comments}
          setCurrentList={setCurrentList}
        />
      ))}
    </div>
  );
}
