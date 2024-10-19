import Header from "./Header";
import OurProject from "./OurProject";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Home() {
  return (
    <div>
      {/* <div className="uppercase font-omega text-[72px] leading-[72px] relative">
        <p>our philosophy.</p>
        <p className="m-0 font-omega absolute bottom-0 left-0">
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
      </div> */}
      <Header />
      <Section1 />
      <Section2 />
      <OurProject />
    </div>
  );
}
