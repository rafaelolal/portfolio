import { useEffect, useState } from "react";
import ExploreIcon from "../components/icons/explore-icon";
import QuestionIcon from "../components/icons/question-icon";
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
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="blogfolio">
          <p>WELCOME</p>
        </div>
        <p className="text-center mt-3 mx-auto">
          Not that it is relevant, but some reasons include: we cannot use html5
          validation on textareas; we cannot use pattern constraints to validate
          textareas; a textarea is an unnecessary synonym for an input type=text
          (it is an input that is type text!) which means twice the
        </p>
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <p className="text-center text-primary">
              <QuestionIcon />
            </p>
            <p className="display-7 text-center">Why?</p>
            <p className="text-center">
              Using a textarea is sometimes not an option because you dont want
              to allow input of multiple lines of text. Just to wrap a single
              line of text (Note: They are not the same thing).
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-center text-primary">
              <ExploreIcon />
            </p>
            <p className="display-7 text-center">Explore!</p>
            <p className="text-center">
              Using a textarea is sometimes not an option because you dont want
              to allow input of multiple lines of text. Just to wrap a single
              line of text (Note: They are not the same thing).
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 my-auto">
        {!isLoading && (
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
        )}
      </div>
    </div>
  );
}
