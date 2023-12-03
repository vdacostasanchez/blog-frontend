import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props.myPosts);
  return (
    <div id="posts-index" className="container text-center">
      <h1>All Posts</h1>
      Search post:{" "}
      <input
        type="text"
        value={searchFilter}
        onChange={(event) => {
          setSearchFilter(event.target.value);
        }}
      ></input>
      <div className="row">
        {props.myPosts
          .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((post) => (
            <div key={post.id} className="posts col">
              <h2>{post.title}</h2>
              <img src={post.image} alt="" />
              <p>{post.body}</p>
              <button onClick={() => props.onShowPost(post)}>Read Post</button>
            </div>
          ))}
      </div>
    </div>
  );
}
