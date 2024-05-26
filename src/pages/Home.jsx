import React, { useEffect, useState } from "react";
import storageService from "../auth/config";
import { useNavigate } from "react-router-dom";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    storageService.getPost().then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <Container>
        <div>
          <h1>Login To Read</h1>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div className="w-full flex flex-wrap p-5">
        {posts.map((post) => (
          <div key={post.$id} className="w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Home;
