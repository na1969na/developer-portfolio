import Image from "next/image";
import ScrambleText from "./ScrambleText";

const HomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-6rem)] pt-40 pb-6 gap-2">
      <h1 className="text-8xl whitespace-nowrap font-black text-center tracking-tight">
        <span className="text-[#dfdcff] cursor-pointer">
          <ScrambleText text="FULL-STACK" />
        </span>{" "}
        <ScrambleText text="DEVELOPER" />
      </h1>
      <Image
        id="scramble-cursor"
        src="https://assets.codepen.io/16327/scramble-cursor.png"
        alt=""
        width={120}
        height={120}
        unoptimized
      />
      <div className="flex flex-col items-center">
        <p className="text-8xl whitespace-nowrap font-black text-center">
          <ScrambleText text="CREATING" />{" "}
          <ScrambleText text="SEAMLESS" className="text-[#dfdcff]" />
        </p>
        <p className="text-8xl whitespace-nowrap font-black text-center tracking-tight">
          <ScrambleText text="DIGITAL" className="text-[#dfdcff]" />{" "}
          <ScrambleText text="SOLUTIONS" />
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
