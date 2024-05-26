import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Select, RTE } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import storageService, { StorageService } from "../../auth/config";
import { data } from "autoprefixer";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
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
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe(); // subscription will run again again
    };
  }, [watch, slugTransform, setValue]);
  return (
    <form action="">
      <div>
        <Input
          label="Title :"
          placeholder="Title"
          classname="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="slug"
          classname="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultvalue={getValues("content")}
        />
      </div>
      <div>
        <Input
          label="Featured Image"
          type="file"
          classname="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {post && (
          <div>
            <img
              src={storageService.getfilePreview(post.featuredImage)}
              alt={post.title}
              className="w-40 h-40"
            />
            <Select
              options={["active", "inactive"]}
              label="status"
              className="mb-4"
              {...register("status", { required: true })}
            />
            <Button
              type="submit"
              bgColor={post ? "bg-green-500" : undefined}
              className="mb-4"
            >
              {post ? "Update" : "Submit"}
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default PostForm;
