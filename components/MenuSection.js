import Image from "next/image";
import React from "react";

const MenuSection = ({ onMenuChange }) => {
  const handleMenuItemClick = (menuItem) => {
    onMenuChange(menuItem);
  };

  return (
    <div className="flex flex-col items-start gap-4 w-3/12 p-5 rounded-md bg-slate-200 dark:bg-slate-900">
      <div
        onClick={() => handleMenuItemClick("home")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Image
          src="/home.png"
          width={18}
          height={18}
          alt="Picture of the home"
          className="dark:invert"
        />
        <h4>Home</h4>
      </div>

      <div
        onClick={() => handleMenuItemClick("messages")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="relative">
          <div className="flex absolute bottom-2 left-2 p-1 rounded-full items-center justify-center bg-slate-600 w-4 h-4">
            <p className="text-sm">0</p>
          </div>

          <Image
            src="/chat.png"
            width={18}
            height={18}
            alt="Picture of the chat"
            className="dark:invert"
          />
        </div>

        <h4>Messages</h4>
      </div>

      <div
        onClick={() => handleMenuItemClick("notifications")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="relative">
          <div className="flex absolute bottom-2 left-2 p-1 rounded-full items-center justify-center bg-slate-600 w-4 h-4">
            <p className="text-sm">0</p>
          </div>
          <Image
            src="/bell.png"
            width={18}
            height={18}
            alt="Picture of the bell"
            className="dark:invert"
          />
        </div>
        <h4>Notifications</h4>
      </div>
    </div>
  );
};

export default MenuSection;
