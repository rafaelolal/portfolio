import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import PostList from "../../components/posts/post-list";
import PostSearch from "../../components/posts/post-search";

export default function BlogPage() {
  const router = useRouter();
  const list = router.query.list;

  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/getPosts", {
      method: "POST",
      body: JSON.stringify({ list }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
        setIsLoading(false);
      });
  }, []);

  console.log("POSTS HERE")
  console.log(posts)

  if (isLoading) {
    return (
      <div>
        <p className="text-center">Loading...</p>
        <img
          height="auto"
          width="300"
          className="img-thumbnail rounded mx-auto d-block"
          src="https://static.skillshare.com/cdn-cgi/image/quality=80,width=1000,format=auto/uploads/project/dd1724f380aa3bc0b87155b0de4fcd86/d5bb402c.gif"
          alt="..."
        />
      </div>
    );
  }

  if (!posts) {
    return (<p>No posts available</p>)
  }

  if (posts && !isLoading) {
    return (
      <div>
        <PostSearch />
        <PostList posts={posts} />
      </div>
    );
  }
}
