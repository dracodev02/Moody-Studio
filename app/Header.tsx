"use client";

import { useState } from "react";

interface HeaderItem {
  name: string;
  section: string;
}

const Header = () => {
  const [activeSection, setActiveSection] = useState(0);
  const menu: HeaderItem[] = [
    { name: "About us", section: "about" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];
  const scrollToSection = (index: number, section: string) => {
    setActiveSection(index);
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
            onClick={() => scrollToSection(0, "about")}
            src="/logo.png"
            className="h-11 max-sm:h-8 cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex gap-8 max-sm:gap-4 items-center font-outfit font-semibold text-base leading-6 text-white">
          {menu.map((item, index) => {
            return (
              <div
                onClick={() => scrollToSection(index, item.section)}
                key={index}
                className="max-lg:hidden"
              >
                <p
                  className={`cursor-pointer transition-all hover:scale-[1.05] ${
                    activeSection === index ? "border-b" : ""
                  }`}
                >
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
