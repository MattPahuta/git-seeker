import { FiGithub, FiSun, FiMoon } from "react-icons/fi";

function Header({ isDark, onToggle }) {
  return (
    <header className="py-8 border-b border-gray-300 dark:border-zinc-700">
      <div className="max-w-3xl px-4 mx-auto flex items-center justify-between">
        <h1 className="inline-flex items-center gap-2 text-3xl font-mono font-extrabold tracking-tight text-indigo-600 dark:text-indigo-200">
          <FiGithub aria-hidden="true" focusable="false" />
          GitSeeker
        </h1>
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={isDark}
          aria-label={
            isDark ? "Switch to light mode" : "Switch to dark mode"
          }
          className="rounded-lg border border-gray-200 bg-gray-50 p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:border-zinc-700 dark:bg-transparent dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-white hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-indigo-600">
          {isDark ? (
            <FiSun
              className="size-5"
              aria-hidden="true"
              focusable="false"
            />
          ) : (
            <FiMoon
              className="size-5"
              aria-hidden="true"
              focusable="false"
            />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
