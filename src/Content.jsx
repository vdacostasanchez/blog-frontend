import axios from "axios";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./Modal";
import { ShowPost } from "./ShowPost";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
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

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      console.log(response.data);
      setCurrentPost(response.data);
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      handleClose();
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      console.log(response.data);
      setPosts(posts.filter((r) => r.id !== post.id));

      handleClose();
    });
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/new" element={<PostNew onCreatePost={handleCreatePost} />} />
        <Route path="/posts" element={<PostsIndex myPosts={posts} onShowPost={handleShowPosts} />} />
      </Routes>

      <Modal show={isPostShowVisible} onClose={handleClose}>
        <ShowPost post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
