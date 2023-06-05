// utils
import { cn } from "../../utlis";

interface IProps {
  label: string;
  position?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  children: React.ReactNode;
}

const Tooltip = ({
  label,
  position,
  wrapperClassName,
  labelClassName,
  children,
}: IProps) => {
  const ToolTipPositions: any = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 translate-y-2",
    left: "right-full top-1/2 transform -translate-y-1/2 -translate-x-2",
    right: "left-full top-1/2 transform -translate-y-1/2 translate-x-2",
  };

  const ArrowPositions: any = {
    top: "-bottom-1 left-1/2 transform -translate-x-1/2 border-t-transparent border-l-transparent",
    bottom:
      "-top-1 left-1/2 transform -translate-x-1/2 border-b-transparent border-r-transparent",
    left: "-right-1 top-1/2 transform -translate-y-1/2 border-l-transparent border-b-transparent",
    right:
      "-left-1 top-1/2 transform -translate-y-1/2 border-r-transparent border-t-transparent",
  };

  return (
    <div className={cn("relative group", wrapperClassName)}>
      <p
        // w-auto whitespace-nowrap
        className={cn(
          "transition-all absolute z-10 duration-150 bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100",
          "border border-[#EBEBF9]",
          ToolTipPositions[position || "top"],
          labelClassName
        )}
      >
        {label}

        <span
          className={cn(
            "absolute h-2 w-2 rotate-45 border border-[#EBEBF9] bg-white",
            ArrowPositions[position || "top"]
          )}
        />
      </p>

      {children}
    </div>
  );
};

export default Tooltip;
