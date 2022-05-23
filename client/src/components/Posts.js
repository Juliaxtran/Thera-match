import Post from "./Post";
import PostTwo from "../components/PostTwo";
import "../posts.css";

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
