// import { Carousel } from "";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "../components/carousel/carousel";
import CarouselItem from "../components/carousel/carousel-item";
import FeaturedPost from "../components/posts/featured-post";
import Post from "../components/posts/post";

export default function Home() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getPosts", {
      method: "POST",
      body: JSON.stringify({ list: "Featured" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
        setIsLoading(false);
        console.log(data);
      });
  }, []);

  return (
    <div class="bg-tertiary my-auto">
      <div className="blogfolio vb mx-auto p-5 pb-3">
        <h1 className="display-4 fw-bold lh-1 text-center">
          Rafael's Featured Blogs
        </h1>
      </div>
      {!isLoading && (
        <div id="featuredCarousel" class="carousel slide col-8 mx-auto">
          <div class="carousel-inner">
            <div class="carousel-item active">
              {posts.map((post) => (
                <FeaturedPost
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
                />
              ))}
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
}
