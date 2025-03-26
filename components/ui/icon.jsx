import icons from "../../constants/icons";
import { cn } from "../../lib/utils";

export default function Icon({ icon, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6", className)}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={icons[icon]} />
    </svg>
  );
}
