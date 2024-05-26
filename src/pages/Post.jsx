import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import storageService from "../auth/config";
import { Button, Container } from "../components";
import { parse } from "postcss";

function Post() {
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.userdata);
  const [post, setPosts] = useState([]);
  const { slug } = useParams();
  const isAuthor =
    post && userdata ? post.userId === userdata.userdata.$id : false; // check if the user is the author of the post

  useEffect(() => {
    if (slug) {
      storageService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    storageService.deleteFile(post.$id).then((status) => {
      if (status) {
        storageService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div>
      <Container>
        <div className="relative ">
          <img
            src={storageService.getfilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />
          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3"></Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete Post
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1>{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null;
}

export default Post;
