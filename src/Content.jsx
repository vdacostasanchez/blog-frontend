import axios from "axios";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);

  const handleShowPosts = (recipe) => {
    setIsPostShowVisible(true);
    setCurrentPost(recipe);
  };

  const handleClose = () => {
    setIsPostShowVisible(false);
  };

  return (
    <div className="main">
      <PostNew />
      <PostsIndex myPosts={posts} onShowPost={handleShowPosts} />
      <Modal show={isPostShowVisible} onClose={handleClose}>
        <p>
          <h2>{currentPost.title}</h2>
          <p>{currentPost.body}</p>
          <img src={currentPost.image} />
        </p>
      </Modal>
    </div>
  );
}
