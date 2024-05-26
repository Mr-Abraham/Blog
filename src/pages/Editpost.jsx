import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import storageService from "../auth/config";

function Editpost() {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      storageService.getPost(slug).then((posts) => {
        if (posts) {
          setPosts(posts);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return posts ? (
    <div>
      <Container>
        <PostForm post={posts} />
      </Container>
    </div>
  ) : null;
}

export default Editpost;
