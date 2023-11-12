export function ShowPost(props) {
  props.post;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
  };
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <img src={props.post.image} />
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          Title: <input defaultValue={props.post.title} className="form-control" type="text" name="title" />
        </div>
        <div className="form-group">
          Body: <input defaultValue={props.post.body} className="form-control" type="text" name="body" />
        </div>
        <div className="form-group">
          Image url: <input defaultValue={props.post.image} className="form-control" type="text" name="image" />
        </div>
        <button type="submit">Update Blog Post</button>
      </form>
    </div>
  );
}
