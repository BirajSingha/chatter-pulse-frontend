import FeedSection from "@/components/FeedSection";
import FollowSection from "@/components/FollowSection";
import MenuSection from "@/components/MenuSection";
import NavBar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import useFetchProfileMutation from "./api/query/useFetchProfileMutation";
import GroupsSuggestions from "@/components/GroupsSuggestions";
import FriendsSuggestions from "@/components/FriendsSuggestions";

export default function Home() {
  const router = useRouter();
  const [selectedMenuItem, setSelectedMenuItem] = useState("home");
  const [user, setUser] = useState(null);

  const [friendList, setFriendList] = React.useState([
    {
      id: 1,
      name: "John Doe",
      avatar: "/male-user.png",
      isFollowing: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/female-user.png",
      isFollowing: true,
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "/male-user.png",
      isFollowing: false,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      avatar: "/female-user.png",
      isFollowing: false,
    },
    {
      id: 5,
      name: "David Brown",
      avatar: "/male-user.png",
      isFollowing: false,
    },
  ]);

  const handleMenuChange = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const fetchProfileMutation = useFetchProfileMutation(setUser);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      router.push("/login");
    }

    fetchProfileMutation.mutate({ accessToken });
  }, []);

  return (
    <div className="w-full mx-auto h-auto pb-10 bg-[#0d0a1e] px-5 md:px-10 lg:px-20">
      <NavBar user={user} onMenuChange={handleMenuChange} />
      <div className="flex justify-between items-start gap-x-5">
        <MenuSection onMenuChange={handleMenuChange} />
        <FeedSection selectedMenuItem={selectedMenuItem} />
        <div className="hidden sm:flex flex-col w-3/12 gap-3">
          {friendList.filter((frnd) => frnd.isFollowing).length > 0 && (
            <FollowSection
              friendList={friendList}
              setFriendList={setFriendList}
            />
          )}

          {friendList.filter((frnd) => !frnd.isFollowing).length > 0 && (
            <FriendsSuggestions
              friendList={friendList}
              setFriendList={setFriendList}
            />
          )}
          <GroupsSuggestions />
        </div>
      </div>
    </div>
  );
}
