import { Link } from "react-router-dom";

interface NavButtonProps {
  to: string;
}

export default function NavButton({ to }: NavButtonProps) {
  return (
    <Link to={to}>
      <button className="p-2 -translate-y-2 text-white bg-purple-500 hover:bg-purple-700 drop-shadow-lg outline outline-zinc-300/5 dark:bg-purple-700 dark:hover:bg-purple-500 rounded-xl hover:underline hover:-translate-y-2.5 dark:shadow-none dark:outline-none cursor-pointer">
        {to === "/" ? "Home" : to[0].toUpperCase() + to.slice(1)}{" "}
      </button>
    </Link>
  );
}
