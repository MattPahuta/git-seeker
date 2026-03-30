import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import RepoGrid from "./components/RepoGrid";

const GITHUB_API = "https://api.github.com";

function App() {
  // core state variables
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme:dark)").matches,
  );
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  function handleThemeToggle() {
    setIsDark((prev) => !prev);
  }

  // core API logic
  async function handleSearch(username) {
    // reset state before new search
    setLoading(true);
    setError(null);
    setUser(null);
    setRepos([]);

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`${GITHUB_API}/users/${username}`),
        fetch(
          `${GITHUB_API}/users/${username}/repos?sort=pushed&per_page=6`,
        ),
      ]);
      // check for retrieval issues
      if (!userRes.ok) {
        if (userRes.status === 404) {
          throw new Error(`${username} not found.`);
        }
        throw new Error("Something went wrong. Please try again.");
      }

      const userData = await userRes.json();
      const reposData = reposRes.ok ? await reposRes.json() : [];

      setUser(userData);
      setRepos(reposData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  // console.log({ user, repos, loading, error});
  //   {
  //     user && (
  //       <pre className="overflow-auto rounded-lg p-4">
  //         {JSON.stringify({ user, repos }, null, 2)}
  //       </pre>
  //     );
  //   }

  return (
    <div className="min-h-screen text-zinc-900 bg-gray-50 dark:bg-zinc-900 dark:text-zinc-100">
      <Header isDark={isDark} onToggle={handleThemeToggle} />
      <main className="mx-auto max-w-3xl py-10 px-4 space-y-8">
        <SearchBar onSearch={handleSearch} loading={loading} />
        {error && (
          <p role="alert" className="mb-4 text-sm text-red-600">
            {error}
          </p>
        )}
        <UserProfile user={user} loading={loading} error={error} />
        <RepoGrid repos={repos} loading={loading} />
      </main>
    </div>
  );
}

export default App;
