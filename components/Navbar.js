import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import Cookies from "js-cookie";
import { useRouter } from "next/router.js";

export default function NavBar({ user }) {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    router.push("/login");
  };

  return (
    <Navbar className="flex py-5 mb-5 justify-between" shouldHideOnScroll>
      <NavbarBrand className="items-center">
        <AcmeLogo />
        <p className="font-bold text-inherit">CHATTER-PULSE</p>
      </NavbarBrand>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent justify="end">
        <NavbarItem>
          <h3>{user?.username}</h3>
          <button onClick={handleLogout}>Logout</button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
