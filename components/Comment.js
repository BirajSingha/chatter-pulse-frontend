import React from "react";

const Comment = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center">
        <img
          src="/female-user.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-white">Cynthia Henry</p>
          <p className="text-xs text-gray-400">Today at 3:00 PM</p>
        </div>
      </div>
      <div className="ml-10">
        <p className="text-gray-100 mt-1">
          Wow, those photos look amazing. I'm going to visit New-York next week.
          Can you recommend some cool locations to visit there? 🙏
        </p>
        <button className="text-blue-400 text-xs mt-1">Show 2 replies</button>
      </div>
      {/* Reply Section */}
      <div className="ml-10 mt-4">
        {/* Repeat Comment component for replies */}
      </div>
    </div>
  );
};

export default Comment;
