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
