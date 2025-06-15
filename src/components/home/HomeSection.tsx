import ScrambleText from "./ScrambleText";

const HomeSection = () => {
  return (
    <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl flex flex-col items-center justify-center h-[calc(100vh-6rem)] pt-20 md:pt-40 pb-6">
      <h1 className="whitespace-nowrap font-black text-center tracking-tight">
        <span className="text-[#dfdcff]">
          <ScrambleText text="FULL-STACK" />
        </span>{" "}
        <ScrambleText text="DEVELOPER" />
      </h1>
      <div className="flex flex-col items-center">
        <p className="whitespace-nowrap font-black text-center">
          <ScrambleText text="CREATING" />{" "}
          <ScrambleText text="SEAMLESS" className="text-[#dfdcff]" />
        </p>
        <p className="whitespace-nowrap font-black text-center tracking-tight">
          <ScrambleText text="DIGITAL" className="text-[#dfdcff]" />{" "}
          <ScrambleText text="SOLUTIONS" />
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
