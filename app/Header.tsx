"use client";

interface HeaderItem {
  name: string;
  section: string;
}

const Header = () => {
  const menu: HeaderItem[] = [
    { name: "About us", section: "about" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 40;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black w-full z-10 fixed top-0 left-0">
      <div className="max-w-desktop w-full mx-auto flex justify-between items-center px-2">
        <div className="py-[14px]">
          <img
            onClick={() => scrollToSection("about")}
            src="/logo.png"
            className="h-11 max-sm:h-8 cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex gap-8 max-sm:gap-4 items-center font-outfit font-semibold text-base leading-6 text-white">
          {menu.map((item, index) => {
            return (
              <div
                onClick={() => scrollToSection(item.section)}
                key={index}
                className="max-lg:hidden"
              >
                <p className="cursor-pointer transition-all hover:scale-[1.05]">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Header;
