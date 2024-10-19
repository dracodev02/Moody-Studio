const Section2 = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full relative h-full max-w-desktop mx-auto">
        <div className="bg-sec2 w-full h-full absolute z-[2] top-0 left-0"></div>
        <img className="" src="/sec2.png" alt="" />
        <div className="flex flex-col max-w-[1192px] w-full mx-auto absolute z-[2] top-[108px] left-0 gap-14">
          <div className="relative">
            <p className="font-omega text-[72px] leading-[72px]  text-white ">
              our philosophy.
            </p>
            <p className="absolute top-0 left-0 pl-[2px] font-omega text-[72px] leading-[72px]   ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="700"
                height="72"
                viewBox="0 0 700 72"
              >
                <text x="0" y="70">
                  our philosophy.
                </text>
              </svg>
            </p>
          </div>
          <div className="max-w-[1192px] w-full mx-auto ">
            <p className="text-[52px] leading-[72px] font-outfit">
              “Limit is breakable! And we are here to robust and redefine what
              theWeb3 gaming landscape via the most addictive games"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
