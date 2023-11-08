import axios from "axios";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import { useState } from "react";

export function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  return (
    <div className="main">
      <PostNew />
      <button onClick={handleIndexPosts}>Load Posts</button>
      <PostsIndex myPosts={posts} />
    </div>
  );
}
