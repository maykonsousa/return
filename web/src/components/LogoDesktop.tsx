import LogoImg from "../assets/nlw.svg";
export const LogoDesktop = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img className="block lg:block h-8 w-auto" src={LogoImg} alt="Workflow" />
    </div>
  );
};
