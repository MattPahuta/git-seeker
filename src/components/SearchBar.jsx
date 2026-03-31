import { useState } from "react";
import { FiSearch } from 'react-icons/fi';

// ToDo: Add React icons, Feather icons (Joy of React ref)
// ToDo: add magnifying glass to search button 
// - Below Small screens - magnifying glass only
// - Small and above - magnifying glass & Search

function SearchBar({ onSearch, loading }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    onSearch(trimmedValue);
  }

  return (
    <section role="search">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="username-input" className="sr-only">
          GitHub Username
        </label>
        <input
          id="username-input"
          type="text"
          value={inputValue}
          disabled={loading}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a GitHub username..."
          className="px-4 py-2 flex-1 text-base rounded-md placeholder:text-gray-400 placeholder:italic bg-white dark:bg-zinc-800 outline outline-gray-300 dark:outline-zinc-700 -outline-offset-1 focus-visible:outline-2 focus-visible:-outline-offset-2 focus:outline-indigo-600"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-md px-3 py-2 font-medium shadow-sm inline-flex items-center justify-center gap-2 disabled:opacity-50 bg-indigo-600 text-zinc-50 hover:cursor-pointer disabled:cursor-not-allowed hover:bg-indigo-800 active:bg-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-zinc-50 transition">
          {loading ? (
            "Searching..."
          ) : (
            <>
              <FiSearch aria-hidden="true" focusable="false" />
              Search
            </>
          )}
        </button>
      </form>
    </section>
  );
}

export default SearchBar;