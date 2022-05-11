import React from "react";
import { IUserData } from "./ProfileContent";

const CardProfile = (user: any) => {
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
    >
      <h1
        className="block px-4 py-2 text-gray-700"
        role="menuitem"
        id="user-menu-item-0"
      >
        {user?.name}
      </h1>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        id="user-menu-item-1"
      >
        {user?.bio}
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        id="user-menu-item-2"
      >
        Sign out
      </a>
    </div>
  );
};

export default CardProfile;
