import React, { useEffect, useState } from "react";
import Post from "../Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://educast-backend.onrender.com/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} {...post} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default IndexPage;
