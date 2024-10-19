const OurProject = () => {
  return (
    <div className="max-w-[1232px] mx-auto p-10 max-md:p-2 overflow-hidden rounded-3xl">
      <div className="rounded-3xl overflow-hidden shadow-[0px_0px_72px_rgba(146,7,7,0.5)] py-10 relative border border-primary">
        <img
          src="/our-project.png"
          className="h-full w-full absolute top-0 left-0 -z-[1] brightness-[25%]"
          alt=""
        />

        <div className="relative">
          <p className="text-center font-omega text-[72px] leading-[72px] max-md:text-[40px] max-md:leading-[40px]">
            Our projects
          </p>
          <p className="absolute w-full top-1 text-center text-border font-omega text-[72px] leading-[72px] max-md:text-[40px] max-md:leading-[40px]">
            Our projects
          </p>
        </div>
        <div className="flex gap-10 max-sm:gap-5 items-center justify-center mt-[76px] py-10">
          <div className="rounded-xl h-[540px] max-sm:h-[200px] max-md:h-[400px] aspect-square grid place-items-center bg-[#530B0B] relative">
            <img
              src="bg-card-2.png"
              className="absolute w-full h-full top-0 left-0 opacity-10"
            />
            <p className="text-[52px] opacity-50 max-md:text-2xl">
              Coming soon
            </p>
          </div>
          <div className="scale-110 rounded-xl h-[540px] max-sm:h-[200px] max-md:h-[400px] aspect-square grid place-items-center bg-primary relative">
            <img
              src="bg-card-1.png"
              className="absolute w-full h-full top-0 left-0 opacity-10"
            />
            <p className="text-[52px] opacity-50 max-md:text-2xl">
              Coming soon
            </p>
          </div>
          <div className="rounded-xl h-[540px] max-sm:h-[200px] max-md:h-[400px] aspect-square grid place-items-center bg-[#530B0B] relative">
            <img
              src="bg-card-2.png"
              className="absolute w-full h-full top-0 left-0 opacity-10"
            />
            <p className="text-[52px] opacity-50 max-md:text-2xl">
              Coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurProject;
