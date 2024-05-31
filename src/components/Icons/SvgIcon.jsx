import { twMerge } from "tailwind-merge";

export default function SvgIcon({ className, children, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 50 50"
      className={twMerge(className)}
    >
      <g>{children}</g>
    </svg>
  );
}
