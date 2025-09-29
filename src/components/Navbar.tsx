import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full dark:bg-zinc-800/50 dark:text-zinc-200 text-black h-18 flex p-5 justify-between">
      <h5 className="text-3xl">Kode-Ole</h5>
      <ul className="flex gap-5 text-2xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/test">Test Page</Link>
        </li>
      </ul>
    </nav>
  );
}
