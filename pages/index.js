import FeedSection from "@/components/FeedSection";
import FollowSection from "@/components/FollowSection";
import MenuSection from "@/components/MenuSection";
import NavBar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [user, setUser] = useState(null);

  const handleMenuChange = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const fetchProfile = async () => {
    const response = await axios.get("http://localhost:3000/auth/profile", {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    });
    return response.data;
  };

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      router.push("/login");
    }

    fetchProfile()
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full px-5 md:px-10 lg:px-20">
      <NavBar user={user} />
      <div className="flex justify-between items-start gap-x-5">
        <MenuSection onMenuChange={handleMenuChange} />
        <FeedSection selectedMenuItem={selectedMenuItem} />
        <FollowSection />
      </div>
    </div>
  );
}
