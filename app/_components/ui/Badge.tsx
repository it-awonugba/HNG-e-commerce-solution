import Image from "next/image";

type BadgeProps = {
  type: string;
  title: string;
  icon: string;
};

export default function Badge({ type, title, icon }: BadgeProps) {
  let bg;
  if (type === "red") {
    bg = "bg-primary";
  }
  if (type === "blue") {
    bg = "bg-blue-400";
  }
  if (type === "orange") {
    bg = "bg-[#FFB30E]";
  }
  return (
    <div
      className={`flex items-center py-1 px-4 gap-2 rounded-md  text-white ${bg}`}
    >
      <div>
        <Image
          src={icon}
          width={19}
          height={19}
          alt="bookmark"
          className="w-3 h-3"
        />
      </div>
      <div className="text-sm">{title}</div>
    </div>
  );
}
