import {
  FiGitBranch,
  FiGitCommit,
  FiStar,
} from "react-icons/fi";
import { formatDate, formatCount } from "../utils/formatters";

const LANGUAGE_COLORS = {
  JavaScript: "bg-yellow-300",
  TypeScript: "bg-blue-400",
  Python: "bg-green-400",
  Rust: "bg-orange-400",
  Go: "bg-cyan-400",
  HTML: "bg-orange-600",
  CSS: "bg-purple-800",
  Java: "bg-amber-400",
  Ruby: "bg-rose-300",
  "C#": "bg-indigo-300",
  "C++": "bg-pink-400",
  Shell: "bg-lime-300",
  Astro: "bg-orange-500"
};

const DEFAULT_LANGUAGE_COLOR = "bg-gray-100";

function RepoCard({ repo }) {
  const languageColor = LANGUAGE_COLORS[repo.language] ?? DEFAULT_LANGUAGE_COLOR;

  return (
    <article className="p-5 space-y-2 flex flex-col gap-3 rounded-lg bg-white dark:text-gray-300 dark:bg-zinc-800 shadow-md hover:scale-105 hover:border-indigo-500 hover:shadow-lg transition duration-300">
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
          className={`text-sm leading-relaxed ${repo.description ? "text-zinc-800 dark:text-zinc-100" : "text-gray-400"}`}>
          {repo.description || "No description provided."}
        </p>
      </div>
      <footer className="mt-auto text-sm flex items-center justify-between gap-2 5">
        <p className="w-full leading-0.5 flex gap-4 items-center justify-start">
          {/* language */}
          {repo.language ? (
            <span className="flex items-center gap-1">
              <span
                aria-hidden="true"
                className={`inline-block size-3 rounded-full ${languageColor}`}></span>
              <span>{repo.language}</span>
            </span>
          ) : (
            <span className="text-gray-400 italic">No language</span>
          )}
          {/* star count */}
          <span className="flex items-center gap-1">
            <FiStar
              aria-hidden="true"
              focusable="false"
              className="text-indigo-400"
            />
            <span>{formatCount(repo.stargazers_count)}</span>
          </span>
          {/* latest commit date */}
          <span
            className="flex items-center gap-1"
            title="Lastest commit">
            <FiGitCommit
              aria-hidden="true"
              focusable="false"
              className="text-indigo-400"
            />
            <time dateTime={repo.pushed_at}>
              {formatDate(repo.pushed_at)}
            </time>
          </span>
        </p>
      </footer>
    </article>
  );
}

export default RepoCard;
