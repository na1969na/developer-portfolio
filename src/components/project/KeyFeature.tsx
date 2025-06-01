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
      <div className="flex items-center gap-2 mb-4">
        <Icon
          className={`${bgColor} text-black p-2 font-semibold rounded-full`}
          size={36}
          strokeWidth={3}
        />
        <h3
          className={`text-2xl font-semibold ${bgColor} text-black rounded-full px-4 py-2 w-fit`}
        >
          {title}
        </h3>
      </div>
      <p className="px-4">{description}</p>
    </div>
  );
};

export default KeyFeature;
