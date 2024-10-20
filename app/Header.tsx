const Header = () => {
  return (
    <div className="bg-black w-full z-10 fixed top-0 left-0">
      <div className="max-w-desktop w-full mx-auto flex justify-between items-center px-2">
        <div className="py-[14px]">
          <img src="/logo.png" className="h-11 max-sm:h-8" alt="" />
        </div>
        <div className="flex gap-8 max-sm:gap-4 items-center font-outfit font-semibold text-base leading-6 text-white">
          <p className="cursor-pointer transition-all hover:scale-110 hover:font-bold">
            About us
          </p>
          <p className="cursor-pointer transition-all hover:scale-110 hover:font-bold">
            Projects
          </p>
          <p className="cursor-pointer transition-all hover:scale-110 hover:font-bold">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};
export default Header;
