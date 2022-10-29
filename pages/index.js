import Link from "next/link";
import { useEffect, useState } from "react";
import LatestPost from "../components/posts/latest-post";

export default function Home() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getPosts", {
      method: "POST",
      body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 my-auto">
          <div className="bl my-auto blogfolio mx-auto">
            <p className="fw-bold text-center mx-4 display-1 mb-0">WELCOME</p>
          </div>
          <p className="text-center mt-3 col-10 mx-auto">
            @Pekka웃 not that it is relevant, but some reasons include: we
            cannot use html5 validation on textareas; we cannot use pattern
            constraints to validate textareas; a textarea is an unnecessary
            synonym for an input type=text (it is an input that is type text!)
            which means twice the
          </p>
          <div className="row">
            <div className="row mt-3 g-5">
              <div className="col-12 col-md-6">
                <p className="text-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    class="bi bi-question-diamond"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </p>
                <p className="display-7 text-center">Why?</p>
                <p className="text-center">
                  Using a textarea is sometimes not an option because you don't
                  want to allow input of multiple lines of text. Just to wrap a
                  single line of text (Note: They are not the same thing).
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    class="bi bi-search-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                    <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                  </svg>
                </p>
                <p className="display-7 text-center">Explore!</p>
                <p className="text-center">
                  Using a textarea is sometimes not an option because you don't
                  want to allow input of multiple lines of text. Just to wrap a
                  single line of text (Note: They are not the same thing).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {!isLoading && (
            <div className="row">
              <div className="">
                <LatestPost
                  id={posts[0].id}
                  list={posts[0].list}
                  title={posts[0].title}
                  year={posts[0].year}
                  month={posts[0].month}
                  day={posts[0].day}
                  description={posts[0].description}
                  images={posts[0].images}
                />
              </div>
              <div className="col-12 col-md-6"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
