import { useState } from "react";
import SearchBar from "./components/SearchBar";

const GITHUB_API = "https://api.github.com";

function App() {
  // core state variables
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        fetch(`${GITHUB_API}/users/${username}/repos?sort=pushed&per_page=6`),
      ]);
      // check for retrieval issues
      if (!userRes.ok)  {
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
      setError(error.message)
    } finally {
      setLoading(false);
    }

  }

  console.log({ user, repos, loading, error});

  return (
    <div className="min-h-screen px-4 py-10 text-slate-900 bg-gray-50 dark:bg-slate-900 dark:text-zinc-100">
      <header>
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight">GitSeeker</h1>
      </header>
      <main className="mx-auto max-w-3xl">
        <SearchBar onSearch={handleSearch} loading={loading} />

        {error && (
          <p role="alert" className="mb-4 text-sm text-red-600">
            {error}
          </p>
        )}

        {user && (
          <pre className="overflow-auto rounded-lg bg-gray-100 p-4">
            {JSON.stringify({ user, repos}, null, 2)}
          </pre>
        )}

      </main>
    </div>
  )
}

export default App
