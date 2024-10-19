const OurProject = () => {
  return (
    <div className="w-full">
      <div className="max-w-desktop w-full mx-auto ">
        <div className="overflow-hidden rounded-[24px] border-2 border-[#530B0B] shadow-ourProject">
          <img src="/our-project.png" className=" h-full" alt="" />
          <div className="pt-[72px] pb-14 h-full absolute top-0 left-0 z-[2]">
            <div className="relative">
              <p className="font-omega text-[72px] leading-[72px]  text-white ">
                Our projects
              </p>
              <p className="absolute top-0 left-0 pl-[2px] font-omega text-[72px] leading-[72px]   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="700"
                  height="72"
                  viewBox="0 0 700 72"
                >
                  <text x="0" y="70">
                    Our projects
                  </text>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurProject;
