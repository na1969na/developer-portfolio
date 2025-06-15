import { LucideIcon } from "lucide-react";

interface KeyFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
}

const KeyFeature = ({
  icon: Icon,
  title,
  description,
  bgColor,
}: KeyFeatureProps) => {
  return (
    <div className="flex flex-col max-w-xl">
      <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
        <Icon
          className={`${bgColor} text-black p-1.5 md:p-2 font-semibold rounded-full`}
          size={28}
          strokeWidth={2.5}
        />
        <h3
          className={`text-lg md:text-2xl font-semibold ${bgColor} text-black rounded-full px-3 md:px-4 py-1 md:py-2 w-fit`}
        >
          {title}
        </h3>
      </div>
      <p className="px-2 md:px-4 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default KeyFeature;
