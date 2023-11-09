export function PostsIndex(props) {
  console.log(props.myPosts);
  return (
    <div id="posts-index">
      {props.myPosts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>{post.body}</p>
          <button onClick={props.onShowPost}>Read Post</button>
        </div>
      ))}
    </div>
  );
}
