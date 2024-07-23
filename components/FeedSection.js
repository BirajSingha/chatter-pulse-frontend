import React from "react";

const FeedSection = ({ selectedMenuItem }) => {
  return (
    <div className="w-6/12 p-5 rounded-md bg-slate-200 dark:bg-slate-900">
      {selectedMenuItem}
    </div>
  );
};

export default FeedSection;
