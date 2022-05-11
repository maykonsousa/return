import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import CardProfile from "./CardProfile";

export interface IUserData {
  name: string;
  email: string;
  avatar: string;
  avatar_url: string;
  bio: string;
  created_at: string;
  updated_at: string;
}

export const ProfileContent = () => {
  const [user, setUser] = useState<IUserData>({} as IUserData);

  const [showCardProfile, setShowCardProfile] = useState(false);
  const getGithub = async () => {
    const { data } = await axios.get(
      "https://api.github.com/users/maykonsousa"
    );
    setUser(data);
  };

  getGithub();

  useEffect(() => {
    if (showCardProfile) {
      setTimeout(() => {
        setShowCardProfile(false);
      }, 3000);
    }
  }, [showCardProfile]);

  return (
    <div className="  absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <span className="sr-only">View notifications</span>

        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>

      <div className="ml-3 relative">
        <div>
          <button
            type="button"
            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={() => setShowCardProfile(!showCardProfile)}
          >
            <span className="sr-only border-red-500">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src={user?.avatar_url}
              alt=""
            />
          </button>
        </div>

        {showCardProfile ? <CardProfile {...user} /> : null}
      </div>
    </div>
  );
};
