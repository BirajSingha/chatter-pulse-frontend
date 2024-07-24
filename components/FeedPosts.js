import React from "react";
import Comment from "./Comment";

const FeedPosts = () => {
  return (
    <div className="bg-slate-700 shadow p-6 rounded-lg mt-6">
      <div className="flex items-center mb-4">
        <img
          src="/male-user.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-white">Ray Hammond</p>
          <p className="text-sm text-gray-300">is at New-York, United States</p>
          <p className="text-xs text-gray-400">Thursday, Jun 31, 5:50 PM</p>
        </div>
      </div>
      <p className="text-gray-100">
        I'm so glad to share with you guys some photos from my recent trip to
        New-York. This city looks amazing, the buildings, nature, people are all
        beautiful, I highly recommend to visit this cool place! Also I would
        like to know what is your favorite place here or what you would like to
        visit? 🥰
      </p>
      <div className="mt-4">
        <img
          src="/img2.webp"
          alt="Post Image"
          className="w-full rounded"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-center">
        <button className="text-gray-300">Like</button>
        <span className="text-gray-500 mx-2">·</span>
        <button className="text-gray-300">Comment</button>
        <span className="text-gray-500 mx-2">·</span>
        <button className="text-gray-300">Share</button>
      </div>
      <div className="mt-4">
        <Comment />
      </div>
    </div>
  );
};

export default FeedPosts;
