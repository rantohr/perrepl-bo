type PropsBadgeCustom = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};
export default function BadgeCustom({
  label,
  active = false,
  onClick,
}: PropsBadgeCustom) {
  return (
    <span
      onClick={onClick}
      className={`
     text-xs font-bold 
    py-2 px-3 rounded-lg border
    hover:border-transparent hover:bg-violet-light  hover:text-white 
    cursor-pointer
    ${
      active
        ? "bg-violet-light text-white border-transparent"
        : "bg-transparent text-grey-3 border-transparent-grey"
    }
    `}
    >
      {label}
    </span>
  );
}
