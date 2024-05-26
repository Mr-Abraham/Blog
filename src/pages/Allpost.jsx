import React, { useEffect, useState } from "react";
import storageService from "../auth/config";
storageService;
import { Container, PostCard } from "../components";
function Allpost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  storageService.getPost([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div>
      <Container>
        {posts.map((post) => (
          <div className="p-2" key={post.$id}>
            <PostCard post={post} />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Allpost;
