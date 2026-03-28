import { FiCode, FiGitBranch, FiGitCommit, FiStar } from "react-icons/fi";
import { formatDate } from "../utils/formatters";

function RepoCard({ repo }) {
  return (
    
    <article className="p-5 flex flex-col gap-3 rounded-lg border border-zinc-700 bg-white dark:text-gray-300 dark:bg-zinc-800 shadow-md hover:scale-105 hover:border-indigo-500 hover:shadow-lg transition duration-300">
      <div className="">
        <h3 className="text-lg font-mono font-semibold leading-snug">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-sm text-indigo-400 hover:text-indigo-300 hover:underline focus-visible:outline-2 outline-offset-1 focus-visible:outline-indigo-400">
            <FiGitBranch aria-hidden="true" focusable="false" />
            {repo.name}
          </a>
        </h3>
        <p
          className={`flex-1 text-sm leading-relaxed ${repo.description ? "text-zinc-800 dark:text-zinc-100" : "text-gray-400"}`}>
          {repo.description || "No description provided."}
        </p>
      </div>
      <footer className="text-sm flex items-center justify-between gap-2 5">
        {/* language */}
        {repo.language ? (
          <span className="flex items-center gap-2">
            <FiCode
              aria-hidden="true"
              focusable="false"
              className="text-indigo-400"
            />
            <span>{repo.language}</span>
          </span>
        ) : (
          <span className="text-gray-400 italic">No language</span>
        )}
        {/* star count */}
        <span className="flex items-center gap-2">
          <FiStar
            aria-hidden="true"
            focusable="false"
            className="text-indigo-400"
          />
          <span>{repo.stargazers_count}</span>
        </span>
        {/* latest commit date */}
        <span className="flex items-center gap-2" title="Lastest commit">
          <FiGitCommit
            aria-hidden="true"
            focusable="false"
            className="text-indigo-400"
          />
          <time dateTime={repo.pushed_at}>{formatDate(repo.pushed_at)}</time>
        </span>
      </footer>
    </article>
  );
}

export default RepoCard;
