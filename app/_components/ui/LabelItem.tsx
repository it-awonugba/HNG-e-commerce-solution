type LabelProps = {
  type: string;
  text: string;
};

export default function LabelItem({ type, text }: LabelProps) {
  const colors = [
    {
      success: "text-[#03A900]",
      bg_success: "bg-[#EAFFF3]",
    },
    {
      danger: "text-[#F17228]",
      bg_danger: "bg-[#FFF2ED]",
    },
  ];

  let returnLabel;
  if (type === "success") {
    returnLabel = `${colors[0].bg_success} ${colors[0].success}`;
  }

  if (type === "danger") {
    returnLabel = `${colors[1].bg_danger} ${colors[1].danger}`;
  }
  return (
    <div
      className={`max-w-2/3 text-nowrap text-xs py-2 px-5 rounded-full ${returnLabel}`}
    >
      {text}
    </div>
  );
}
