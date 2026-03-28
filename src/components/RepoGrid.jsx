import RepoCard from "./RepoCard";

function RepoGrid({ repos, loading }) {
  if (loading || repos.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold dark:text-zinc-50">Latest Repositories</h2>
      
      <ul className="grid gap-4 sm:grid-cols-2 auto-rows-min">
        {repos.map((repo) => (
          <li key={repo.id}>
            <RepoCard repo={repo} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RepoGrid;