import axios from "axios";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./Modal";
import { ShowPost } from "./ShowPost";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

  const handleCreatePost = (params) => {
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
        setPosts([...posts, response.data]);
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div className="container">
      <PostNew onCreatePost={handleCreatePost} />
      <PostsIndex myPosts={posts} onShowPost={handleShowPosts} />
      <Modal show={isPostShowVisible} onClose={handleClose}>
        <ShowPost post={currentPost} />
      </Modal>
    </div>
  );
}
