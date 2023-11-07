export function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="image" />
        </div>
        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
}
