export function PostsIndex(props) {
  console.log(props.myPosts);
  return (
    <div id="posts-index" className="container text-center">
      <h1>All Posts</h1>
      <div className="row">
        {props.myPosts.map((post) => (
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
