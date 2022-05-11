import { MenuContainer } from "./MenuContainer";
import MenuMobile from "./MenuMobile";
import { ProfileContent } from "./ProfileContent";

export const ContentNavBar = () => {
  return (
    <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="  relative flex items-center justify-between h-16">
        <MenuMobile />
        <MenuContainer />
        <ProfileContent />
      </div>
    </div>
  );
};
