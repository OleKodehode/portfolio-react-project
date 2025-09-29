import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-100 text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-200 h-18 flex p-5 justify-between">
      <h5 className="text-3xl font-roboto">Kode-Ole</h5>
      <ul className="flex gap-5 text-2xl">
        <li>
          <NavButton to="/" />
        </li>
        <li>
          <NavButton to="projects" />
        </li>
        <li>
          <NavButton to="test" />
        </li>
      </ul>
    </nav>
  );
}
