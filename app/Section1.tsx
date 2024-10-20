import background from "@/public/background.png";
const Section1 = () => {
  return (
    <div id="about" className="relative h-screen flex flex-col">
      <div className="">
        <img
          src={background.src}
          className="w-screen h-screen absolute top-0 left-0 -z-[2]"
          alt=""
        />
        <div className="w-full h-screen absolute opacity-50 top-0 left-0 bg-primary bg-gradientSec1 -z-[1]"></div>

        <img
          src="/Subtract.png"
          className="absolute right-0 top-0 z-0 max-h-[90%] max-lg:brightness-[35%]"
        />
      </div>
      <div className="relative z-[4] max-w-desktop w-full mx-auto px-2 flex justify-between flex-1 items-center">
        <div className="flex flex-col max-w-[740px] gap-8 w-full">
          <p className="uppercase text-[72px] leading-[72px] font-omega max-md:text-[40px] max-md:leading-[40px]">
            moodiez studios.
          </p>
          <p className="text-[24px] leading-[36px] font-outfit max-md:text-2xl">
            MOODIEZ STUDIO is a game design and development studio dedicated to
            driving the widespread adoption of blockchain technology through our
            "RAGE" and "FURIOUS" On-chain game.
          </p>
        </div>
      </div>
      <div className="w-full bg-primary py-2 overflow-hidden whitespace-nowrap slider-container">
        <div className="slider">
          <p className="inline-block px-9 uppercase font-bold font-outfit text-balance leading-5 py-2">
            <span className="px-3">the kaiju of gaming sector</span>
            <span className="px-3">starknet is our destination</span>
          </p>{" "}
          <p className="inline-block px-9 uppercase font-bold font-outfit text-balance leading-5 py-2">
            <span className="px-3">the kaiju of gaming sector</span>
            <span className="px-3">starknet is our destination</span>
          </p>{" "}
          <p className="inline-block px-9 uppercase font-bold font-outfit text-balance leading-5 py-2">
            <span className="px-3">the kaiju of gaming sector</span>
            <span className="px-3">starknet is our destination</span>
          </p>{" "}
          <p className="inline-block px-9 uppercase font-bold font-outfit text-balance leading-5 py-2">
            <span className="px-3">the kaiju of gaming sector</span>
            <span className="px-3">starknet is our destination</span>
          </p>{" "}
          <p className="inline-block px-9 uppercase font-bold font-outfit text-balance leading-5 py-2">
            <span className="px-3">the kaiju of gaming sector</span>
            <span className="px-3">starknet is our destination</span>
          </p>{" "}
          <p className="inline-block px-9 uppercase font-bold font-outfit text-balance leading-5 py-2">
            <span className="px-3">the kaiju of gaming sector</span>
            <span className="px-3">starknet is our destination</span>
          </p>
          <p className="inline-block px-9 uppercase font-bold font-outfit text-balance leading-5 py-2">
            <span className="px-3">the kaiju of gaming sector</span>
            <span className="px-3">starknet is our destination</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Section1;
