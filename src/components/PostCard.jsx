import React from "react";
import storageService from "../auth/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={storageService.getfilePreview(featuredImage)} alt={title} />
        </div>
        <h2 className="text-2xl font-semibold text-green-600">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
