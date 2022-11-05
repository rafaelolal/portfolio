import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

import Post from "./post";
import Loading from "../layout/loading";

export default function PostList(props) {
  const router = useRouter();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const {
    setCurrentList,
    currentSearch,
    currentList,
    currentYear,
    currentMonth,
  } = props;

  useEffect(() => {
    setIsLoading(true);

    let query = {};
    if (currentList && !router.query.list) {
      query.list = "";
      setCurrentList("");
    } else {
      router.query.list && (query.list = router.query.list);
      currentList && (query.list = currentList);
    }
    currentSearch && (query.search = currentSearch);
    currentYear && (query.year = currentYear);
    currentMonth && (query.month = currentMonth);

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
  }, [
    router.isReady,
    router.query.list,
    currentList,
    currentSearch,
    currentYear,
    currentMonth,
  ]);

  if (isLoading) {
    return <Loading />;
  }

  if (!posts) {
    return <p className="text-center fw-bold mt-5">NO POSTS FOUND</p>;
  }

  return (
    <div className="fadeIn">
      {posts.map((post) => (
        <div
          className="col-12 col-md-10 col-lg-8 mx-auto bg-dark p-3 rounded my-5 shadow"
          id={post.id}
          key={post.id}
        >
          <Post
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
            isShowingCopy={props.isShowingCopy}
            setIsShowingCopy={props.setIsShowingCopy}
            setCurrentList={props.setCurrentList}
          />
        </div>
      ))}
    </div>
  );
}
