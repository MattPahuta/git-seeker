import { useState } from "react";

const GITHUB_API = "https://api.github.com";

export function useGitHubSearch() {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  async function search(username) {
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

  return { user, repos, loading, error, search };
}
