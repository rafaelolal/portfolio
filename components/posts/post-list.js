import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Loading from "../layout/loading";
import Post from "./post";

export default function PostList(props) {
  const size = props.size

  const router = useRouter();
  const { isReady } = router;
  const routerList = router.query.list;

  const anchorId = router.asPath.split("#")[1];

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

  useEffect(() => {
    if (anchorId) {
      const postAnchor = document.getElementById("postAnchor");
      if (postAnchor) {
        postAnchor.click();
      }
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!posts) {
    return <p className="text-center fw-bold mt-5">NO POSTS FOUND</p>;
  }

  return (
    <>
      <a className="visually-hidden" id="postAnchor" href={"#" + anchorId}></a>
      <div className="row fadeIn">
        {posts.map((post) => (
          <Post
            size={size}
            key={post.id}
            id={post.id}
            list={post.list}
            title={post.title}
            date={post.date}
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
    </>
  );
}
