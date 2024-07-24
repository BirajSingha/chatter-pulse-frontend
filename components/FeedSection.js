import React from "react";
import FeedInput from "./FeedInput";
import FeedPosts from "./FeedPosts";

const FeedSection = ({ selectedMenuItem }) => {
  const [feedText, setFeedText] = React.useState("");

  return (
    <div className="w-full md:w-6/12 p-5 rounded-md bg-slate-200 dark:bg-slate-900">
      <FeedInput feedText={feedText} setFeedText={setFeedText} />
      {Array.from({ length: 20 }).map((_, index) => {
        return <FeedPosts />;
      })}
    </div>
  );
};

export default FeedSection;
