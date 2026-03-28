import { FiGithub } from "react-icons/fi";

function Header() {
  return (
    <header className="py-10">
      <div className="max-w-3xl mx-auto flex">
        <h1 className="inline-flex items-center gap-2 text-3xl font-mono font-extrabold tracking-tight text-zinc-900 dark:text-indigo-200">
          <FiGithub aria-hidden="true" focusable="false" />
          GitSeeker
        </h1>
      </div>
    </header>
  );
}

export default Header;
