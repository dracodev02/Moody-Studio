import background from "@/public/background.png";
const Section1 = () => {
  return (
    <div className="relative w-screen overflow-hidden h-screen">
      <div className="">
        <img
          src={background.src}
          className="w-screen h-screen absolute top-0 left-0 -z-[2]"
          alt=""
        />
        <div className="w-screen h-screen absolute opacity-50 top-0 left-0 bg-primary bg-gradientSec1 -z-[1]"></div>
        00000
        <div className="w-full bg-primary absolute bottom-0">
          <div className="w-full max-w-desktop mx-auto items-center flex gap-[72px] py-2">
            <div className="flex items-center gap-6 font-bold font-outfit text-base py-2 leading-5">
              <p>the kaiju of gaming sector</p>
              <p>starknet is our destination</p>
            </div>
            <div className="flex items-center gap-6 font-bold font-outfit text-base py-2 leading-5">
              <p>the kaiju of gaming sector</p>
              <p>starknet is our destination</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-desktop w-full mx-auto px-2 flex justify-between">
        <div className="flex flex-col gap-8 max-w-[710px] w-full pt-[362px]">
          <p className="uppercase text-[72px] leading-[72px] font-omega">
            moodiez studios
          </p>
          <p className="text-[24px] leading-[36px] font-outfit">
            MOODIEZ STUDIO is a game design and development studio dedicated to
            driving the widespread adoption of blockchain technology through our
            "RAGE" and "FURIOUS" On-chain game.
          </p>
        </div>
        <img
          src="/Subtract.png"
          className="h-[calc(100vh-61px)] max-h-[1040px] aspect-[610/1040]"
          alt=""
        />
      </div>
    </div>
  );
};
export default Section1;
