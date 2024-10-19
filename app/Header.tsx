const Header = () => {
  return (
    <div className="bg-black w-full z-[1] fixed top-0 left-0">
      <div className="max-w-desktop w-full mx-auto flex justify-between items-center">
        <div className="py-[14px]">
          <img src="/logo.png" className="h-11 " alt="" />
        </div>
        <div className="flex gap-8 items-center font-outfit font-semibold text-base leading-6 text-white">
          <p>About us</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
