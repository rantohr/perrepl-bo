import React from "react";

type PropsBadgeCustom = {
  label: string;
  icon?: any;
  active?: boolean;
  onClick?: () => void;
};
export default function BadgeCustom({
  label,
  icon,
  active = false,
  onClick,
}: PropsBadgeCustom) {
  return (
    <div
      onClick={onClick}
      className={`
      flex items-center gap-1
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
      {icon && React.cloneElement(icon, { style: { fontSize: "1.25rem" } })}
      {label}
    </div>
  );
}
