import { useState, useEffect } from "react";
import { useGitHubSearch } from "./hooks/useGitHubSearch";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import RepoGrid from "./components/RepoGrid";

function App() {
  // state and logic for simple theme switch/detection
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme:dark)").matches,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function handleThemeToggle() {
    setIsDark((prev) => !prev);
  }

  const { user, repos, loading, error, search } = useGitHubSearch();

  return (
    <>
      <Header isDark={isDark} onToggle={handleThemeToggle} />
      <main className="w-full mx-auto max-w-3xl py-10 px-4 space-y-8">
        <SearchBar onSearch={search} loading={loading} />
        {error && (
          <div
            role="alert"
            aria-live="assertive"
            className="py-2 rounded-md text-lg font-medium text-center text-slate-50 bg-red-600">
            <p className="">{error}</p>
          </div>
        )}
        <UserProfile user={user} loading={loading} error={error} />
        <RepoGrid repos={repos} loading={loading} />
      </main>
      <Footer />
    </>
  );
}

export default App;
