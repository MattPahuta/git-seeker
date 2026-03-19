import { useState } from "react";
const GITHUB_API = "https://api.github.com";

function App() {
  // core state variables
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // core API logic
  async function handleSearch(username) {
    // return if field is empty
    if (!username.trim()) return;
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
    <div className="min-h-screen px-4 py-10 text-slate-900 bg-gray-50 dark:bg-slate-800 dark:text-zinc-100">
      <main className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight">GitSeeker | GitHub User Search</h1>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(query);
          }}
          className="mb-6 flex gap-3"
        >
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} placeholder="Enter a GitHub username..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2"
          />
          <button type="submit" disabled={loading} className="rounded-lg px-5 py-2 disabled:opacity-50 dark:bg-slate-700 dark:text-zinc-50">
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

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
