import { useState } from "react";

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
        className="mb-6 flex gap-3"
      >
        <label htmlFor="username-input" className="sr-only">GitHub Username</label>
        <input 
          id="username-input"
          type="text" 
          value={inputValue} 
          disabled={loading}
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter a GitHub username..."
          className="px-4 py-2 flex-1 text-base rounded-md placeholder:text-gray-400 bg-white dark:bg-gray-700 outline-1 -outline-offset-1 outline-slate-700 focus-visible:outline-2 focus-visible:-outline-offset-2 focus:outline-indigo-600"
        />
        <button 
          type="submit" 
          disabled={loading} 
          className="rounded-md px-4 py-2 font-medium disabled:opacity-50 dark:bg-gray-800 dark:text-gray-100 focus-visible:ring-2 focus-visible:ring-indigo-600 focus:outline-none">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </section>
  )
}

export default SearchBar;