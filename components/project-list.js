import { useEffect, useState } from "react";
import Loading from "./layout/loading";
import Post from "./posts/post";

export default function ProjectList(props) {
    const [posts, setPosts] = useState();
    const [displayPosts, setDisplayPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [availableTags, setAvailableTags] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("/blog/api/getPosts", {
            method: "POST",
            body: JSON.stringify({ "list": "Project" }),
            headers: { "Content-Type": "application/json" },
        }).then((response) => response.json()).then((data) => {
            setPosts(data.data);
            setDisplayPosts(data.data);
            setIsLoading(false);

            const tags = new Set();
            data.data.forEach(post => {
                const descriptionList = post.description.split("\n")
                const tagLine = descriptionList[0];
                if (tagLine.includes("Tags: ")) {
                    const postTags = tagLine.replace("Tags: ", '').split(',').map(tag => tag.trim());
                    postTags.forEach(tag => tags.add(tag));
                }
            });
            setAvailableTags(Array.from(tags).sort((a, b) => a.localeCompare(b)));
        });
    }, []);

    const handleTagFilter = (tag) => {
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];
        setSelectedTags(newTags);
        const newPosts = [];
        if (newTags.length === 0) {
            setDisplayPosts(posts);
        } else {
            console.log("newTags", newTags);
            posts.forEach(post => {
                const descriptionList = post.description.split("\n")
                const tagLine = descriptionList[0];
                if (tagLine.includes("Tags: ")) {
                    const postTags = tagLine.replace("Tags: ", '').split(',').map(tag => tag.trim());
                    console.log("postTags", postTags);
                    if (newTags.every(tag => postTags.includes(tag))) {
                        newPosts.push(post);
                    }
                }
            });
            console.log("newPosts", newPosts);
            setDisplayPosts(newPosts);
        }

    };

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        const newPosts = [];

        if (category === "all") {
            setDisplayPosts(posts);
        } else {
            posts.forEach(post => {
                const descriptionList = post.description.split("\n")
                const categoryLine = descriptionList[1];
                if (categoryLine.includes("Category: ") && categoryLine.includes(category)) {
                    newPosts.push(post);
                }
            });
            setDisplayPosts(newPosts);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    if (!posts) {
        return <p className="text-center fw-bold mt-5">NO POSTS FOUND</p>;
    }

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <div className="row mt-3">
                <div className="col">
                    <button className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => handleCategoryFilter('all')}>All</button>
                    <button className={`btn ${selectedCategory === 'personal' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => handleCategoryFilter('personal')}>Personal</button>
                    <button className={`btn ${selectedCategory === 'class' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => handleCategoryFilter('class')}>Class</button>
                    <button className={`btn ${selectedCategory === 'competition' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => handleCategoryFilter('competition')}>Competition</button>
                </div>
            </div>

            <div className="row mt-3 w-100">
                <div className="col d-flex flex-wrap justify-content-center">
                    {availableTags.map(tag => (
                        <button
                            key={tag}
                            className={`btn btn-sm m-1 ${selectedTags.includes(tag) ? 'btn-warning' : 'btn-outline-warning'}`}
                            onClick={() => handleTagFilter(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className="row mt-5">
                {displayPosts.map((post) => (
                    <Post
                        key={post.id}
                        size="small"
                        {...post}
                        setCurrentList={props.setCurrentList}
                    />
                ))}
            </div>
        </div>
    );
}
