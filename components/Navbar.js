import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import Cookies from "js-cookie";
import { useRouter } from "next/router.js";
import Image from "next/image.js";

export default function NavBar({ user, onMenuChange }) {
  const router = useRouter();

  const handleMenuItemClick = (menuItem) => {
    onMenuChange(menuItem);
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleLogout = () => {
    Cookies.remove("accessToken");
    router.push("/login");
  };

  return (
    <Navbar className="flex py-5 justify-between" shouldHideOnScroll>
      <NavbarBrand className="items-center">
        <AcmeLogo />
        <p className="text-[#d5d2d2] font-bold text-inherit">CHATTER-PULSE</p>
      </NavbarBrand>

      <NavbarContent className="md:hidden gap-4" justify="end">
        <NavbarItem>
          <Image
            onClick={() => handleMenuItemClick("home")}
            src="/home.png"
            width={20}
            height={20}
            alt="Picture of the home"
            className="dark:invert"
          />
        </NavbarItem>
        <NavbarItem>
          <Image
            onClick={() => handleMenuItemClick("messages")}
            src="/chat.png"
            width={20}
            height={20}
            alt="Picture of the chat"
            className="dark:invert"
          />
        </NavbarItem>
        <NavbarItem>
          <Image
            onClick={() => handleMenuItemClick("notifications")}
            src="/bell.png"
            width={20}
            height={20}
            alt="Picture of the bell"
            className="dark:invert"
          />
        </NavbarItem>
        <NavbarItem>
          <Image
            onClick={() => handleMenuItemClick("profile")}
            src="/user.png"
            width={20}
            height={20}
            alt="Picture of the user"
            className="dark:invert"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex flex-col items-end">
          <h3 className="text-[#d5d2d2]">{user?.username}</h3>
          <button className="text-[#d5d2d2]" onClick={handleLogout}>
            Logout
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
