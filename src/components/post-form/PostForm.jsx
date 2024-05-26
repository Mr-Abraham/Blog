import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Select, RTE } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import storageService, { StorageService } from "../../auth/config";
import { data } from "autoprefixer";

function PostForm({ post }) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userdata = useSelector((state) => state.userdata);

  const submit = async (data) => {
    if (post) {
      const file = (await data.image[0])
        ? storageService.uplodFile(data.image[0])
        : null;
      if (file) {
        storageService.deleteFile(post.featuredImage);
      }
      const dbPost = await storageService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = (await data.image[0])
        ? storageService.uplodFile(data.image[0])
        : null;
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await storageService.createPost({
          ...data,
          userdata: userdata.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  return <div>PostForm</div>;
}

export default PostForm;
