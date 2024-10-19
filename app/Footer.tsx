import { FaDiscord, FaTelegram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-primary mt-10">
      <div className="max-w-desktop px-2 flex justify-between">
        <img src="logo-footer.png" className="max-md:w-[30%]" />
        <div className="flex flex-col items-center justify-end max-md:justify-center gap-4 max-md:gap-2 md:mb-8">
          <p className="text-2xl max-md:text-base">Join the community</p>
          <div className="divide-x divide-white">
            <div className="inline-block px-4">
              <FaXTwitter className="text-2xl cursor-pointer" />
            </div>
            <div className="inline-block px-4">
              <FaDiscord className="text-2xl text-white/50" />
            </div>
            <div className="inline-block px-4">
              <FaTelegram className="text-2xl text-white/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
