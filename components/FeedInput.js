import React from "react";

const FeedInput = ({ feedText, setFeedText }) => {
  return (
    <div className="container mx-auto">
      <input
        type="text"
        placeholder="What's new?"
        value={feedText}
        onChange={(e) => setFeedText(e.target.value)}
        className="w-full p-4 rounded-lg bg-slate-700"
      />
    </div>
  );
};

export default FeedInput;
