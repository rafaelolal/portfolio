import { useEffect, useMemo, useState } from "react";
import Loading from "./layout/loading";
import Post from "./posts/post";

export default function ProjectList(props) {
    const [posts, setPosts] = useState();
    const [displayPosts, setDisplayPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [availableTags, setAvailableTags] = useState([]);

    const categoryTags = useMemo(() => ["Personal", "School", "Competition"], []);
    const sizeTags = useMemo(() => ["Small", "Medium", "Large"], []);

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
                    postTags.forEach(tag => {
                        if (!(sizeTags.includes(tag) || categoryTags.includes(tag))) {
                            tags.add(tag)
                        }
                    });
                }
            });
            setAvailableTags(Array.from(tags).sort((a, b) => a.localeCompare(b)));
        });
    }, [sizeTags, categoryTags]);

    const handleTagFilter = (tag) => {
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag];

        // Hacky way of keeping the sizes as tags but appearing separately on the UI
        if (sizeTags.includes(tag)) {
            if (newTags.includes(tag)) {
                setSelectedSize(tag)
                for (const sizeTag of sizeTags) {
                    if (newTags.includes(sizeTag) && sizeTag != tag) {
                        newTags.splice(newTags.indexOf(sizeTag), 1);
                    }
                }
            } else {
                setSelectedSize("");
            }

        }

        if (categoryTags.includes(tag)) {
            if (newTags.includes(tag)) {
                setSelectedCategory(tag);
                for (const categoryTag of categoryTags) {
                    if (newTags.includes(categoryTag) && categoryTag != tag) {
                        newTags.splice(newTags.indexOf(categoryTag), 1);
                    }
                }
            } else {
                setSelectedCategory("");
            }
        }

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

    if (isLoading) {
        return <Loading />;
    }

    if (!posts) {
        return <p className="text-center fw-bold mt-5">NO POSTS FOUND</p>;
    }

    return (
        <>
            <div className="align-items-center mt-5">
                <div className="row mt-3">
                    <div className="col d-flex flex-wrap justify-content-center">
                        {/* This is part of my hacky way of getting the categories to be tags but appear to be different */}
                        <button className={`btn ${selectedCategory === 'Personal' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => handleTagFilter('Personal')}>Personal</button>
                        <button className={`btn ${selectedCategory === 'School' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => handleTagFilter('School')}>School</button>
                        <button className={`btn ${selectedCategory === 'Competition' ? 'btn-primary' : 'btn-outline-primary'} me-2`} onClick={() => handleTagFilter('Competition')}>Competition</button>
                    </div>
                </div>

                <div className="row mt-3 w-100">

                    <div className="col d-flex flex-wrap justify-content-center">
                        {/* More on my hacky workaround tags and sizes or categories  */}
                        {sizeTags.map(tag => (
                            <button
                                key={tag}
                                className={`btn btn-sm m-1 ${selectedSize == tag ? 'btn-secondary' : 'btn-outline-secondary'}`}
                                onClick={() => handleTagFilter(tag)}
                            >
                                {tag}
                            </button>
                        ))}
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
        </>
    );
}
