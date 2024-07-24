import React from "react";

const FriendsSuggestions = ({ friendList, setFriendList }) => {
  const handleFollowToggle = (id) => {
    const updatedFriends = friendList.map((friend) =>
      friend.id === id
        ? { ...friend, isFollowing: !friend.isFollowing }
        : friend
    );

    setFriendList(updatedFriends);
  };
  return (
    <div className="hidden sm:flex flex-col w-full p-5 rounded-md bg-slate-200 dark:bg-slate-900">
      <h2 className="font-bold mb-4">Suggestions</h2>
      {friendList
        .filter((frnd) => !frnd.isFollowing)
        .map((friend) => (
          <div key={friend.id} className="flex items-center mb-4">
            <img
              src={friend.avatar}
              alt={`${friend.name}'s avatar`}
              className="w-8 h-8 rounded-full"
            />
            <div
              onClick={() => alert(friend.name)}
              className="ml-3 flex-1 cursor-pointer"
            >
              <p className="text-gray-900 dark:text-gray-100">{friend.name}</p>
            </div>
            <button
              className={`py-1 px-3 rounded-full text-sm ${
                friend.isFollowing
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
              onClick={() => handleFollowToggle(friend.id)}
            >
              {friend.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default FriendsSuggestions;
