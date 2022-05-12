import { Link } from "react-router-dom";

export const MenuDesktop = () => {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        <Link
          to="/dashboard"
          className=" text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          Aulas
        </Link>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Fórum
        </a>
        <Link
          to="/requests"
          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Minhas Solicitações
        </Link>
      </div>
    </div>
  );
};
