import Image from "next/image";
import { useEffect, useState } from "react";

import Post from "./post";

export default function PostList(props) {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    let query = {};
    props.currentList && (query.list = props.currentList);
    props.currentSearch && (query.search = props.currentSearch);
    props.currentYear && (query.year = props.currentYear);
    props.currentMonth && (query.month = props.currentMonth);

    console.log("QUERY");
    console.log(query);

    fetch("/api/getPosts", {
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
    props.currentList,
    props.currentSearch,
    props.currentYear,
    props.currentMonth,
  ]);

  if (isLoading) {
    return (
      <div>
        <p className="text-center">Loading...</p>
        <Image
          width="100%"
          height="56%"
          layout="responsive"
          objectFit="cover"
          className="img-thumbnail rounded mx-auto d-block"
          src="https://static.skillshare.com/cdn-cgi/image/quality=80,width=1000,format=auto/uploads/project/dd1724f380aa3bc0b87155b0de4fcd86/d5bb402c.gif"
          alt="..."
        />
      </div>
    );
  }

  if (!posts) {
    return <p>No posts available</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <div
          id={post.id}
          className="col-12 col-md-10 col-lg-8 mx-auto bg-dark p-3 rounded my-4"
        >
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
            isShowingCopy={props.isShowingCopy}
            setIsShowingCopy={props.setIsShowingCopy}
          />
        </div>
      ))}
    </>
  );
}
