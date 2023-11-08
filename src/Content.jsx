import axios from "axios";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";

export function Content() {
  let posts = [];
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      posts = response.data;
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
