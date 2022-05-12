import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileButton } from "./MobileButton";

export const MenuMobile = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [component, setComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (isOpenMobile) {
      setComponent(
        <div className="z-[-9] absolute top-20" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to={`/dashboard`}
              className=" text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Aulas
            </Link>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            ></a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Fórum
            </a>

            <Link
              to={`/requests`}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Minhas solicitações
            </Link>
          </div>
        </div>
      );
    }
  }, [isOpenMobile]);

  return (
    <>
      <MobileButton onShowMenuMobile={() => setIsOpenMobile(!isOpenMobile)} />
      {isOpenMobile ? component : null}
    </>
  );
};

export default MenuMobile;
