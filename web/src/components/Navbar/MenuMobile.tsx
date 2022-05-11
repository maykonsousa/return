import { useEffect, useState } from "react";
import { MobileButton } from "./MobileButton";

export const MenuMobile = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [component, setComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (isOpenMobile) {
      setComponent(
        <div className="z-[-9] absolute top-20" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>
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
