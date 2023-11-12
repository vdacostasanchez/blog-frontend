export function ShowPost(props) {
  props.post;
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <img src={props.post.image} />
    </div>
  );
}
