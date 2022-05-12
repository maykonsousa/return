import React, { useContext } from "react";
import { StoreContext } from "../../store/Context";

const CardProfile = () => {
  const { githubUser, user, handleLogout } = useContext(StoreContext);
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 z-40 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
    >
      <h1
        className="block px-4 py-2 text-gray-700"
        role="menuitem"
        id="user-menu-item-0"
      >
        {githubUser?.name}
      </h1>
      <span
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        id="user-menu-item-1"
      >
        {user?.email}
      </span>
      <button
        className="block px-4 ml-4 bg-red-600 py-2 text-sm text-gray-100"
        role="menuitem"
        id="user-menu-item-2"
        onClick={handleLogout}
      >
        Sair
      </button>
    </div>
  );
};

export default CardProfile;
