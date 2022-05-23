import Post from "../post/Post";
import PostTwo from "../post/PostTwo";

import "./posts.css";

export default function Posts() {
  return (
    <div>
      <Post />
      <PostTwo />
      <Post />
      <PostTwo />
      <Post />
    </div>
  )
}
