import { FiMapPin, FiLink, FiCalendar, FiMail } from "react-icons/fi";

import {
  formatDate,
  formatCount,
  ensureProtocol,
} from "../utils/formatters";

function Spinner() {
  return (
    <div
      role="status"
      aria-label="Loading user profile"
      className="mt-12 flex flex-col items-center gap-4 text-gray-500">
      <svg
        aria-hidden="true"
        className="size-12 motion-safe:animate-spin text-indigo-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
        />
      </svg>
      <p className="text-lg">Fetching profile...</p>
    </div>
  );
}

function MetaListItem({ icon, value, href }) {
  const isAvailable = Boolean(value);

  return (
    <li className="flex items-center gap-1.5">
      <span aria-hidden="true" className="text-indigo-400">
        {icon}
      </span>

      {isAvailable && href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer nopener"
          className="rounded-sm hover:underline hover:text-indigo-400 focus-visible:outline-2 outline-offset-1 focus-visible:outline-indigo-400">
          {value}
        </a>
      ) : (
        <span
          className={`${isAvailable ? "text-zinc-800 dark:text-zinc-100" : "text-gray-400"}`}>
          {isAvailable ? value : "Not available"}
        </span>
      )}
    </li>
  );
}

function UserProfile({ user, loading, error }) {
  if (loading) return <Spinner />;

  if (error || !user) return null;

  return (
    <article className="p-6 space-y-4 sm:space-y-6 rounded-xl dark:bg-zinc-800">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s GitHub avatar`}
          width={128}
          height={128}
          className="h-32 w-32 rounded-full object-cover shadow-md border-2 border-indigo-500"
        />
        <div className="text-center sm:text-left">
          <h2 className="mb-2 text-3xl sm:text-4xl font-semibold text-zinc-50">
            {user.name || user.login}
          </h2>
          <p className="text-lg text-indigo-400">@{user.login}</p>
          <p className="text-gray-600 dark:text-slate-300">
            Joined{" "}
            <time datetime={user.created_at}>
              {formatDate(user.created_at)}
            </time>
          </p>
        </div>
      </div>
      <p
        className={`sm:text-lg leading-relaxed ${user.bio ? "font-mono" : "italic"}`}>
        {user.bio || "This profile has no bio."}
      </p>
    
      <ul
        role="list"
        aria-label="User metadata"
        className="text-sm sm:text-base flex flex-wrap gap-3.5">
        <MetaListItem icon={<FiMapPin />} value={user.location} />
        <MetaListItem
          icon={<FiMail />}
          value={user.email}
          href={`mailto:${user.email}`}
        />
        <MetaListItem
          icon={<FiLink />}
          value={user.blog}
          href={ensureProtocol(user.blog)}
        />
      </ul>

      <div className="p-4 rounded-md dark:bg-zinc-900">
        <table className="table-auto w-full border-collapse text-center">
          <caption className="sr-only">
            Key GitHub statistics for user
          </caption>
          <thead>
            <tr>
              <th className="font-light">Repos</th>
              <th className="font-light">Followers</th>
              <th className="font-light">Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 text-lg sm:text-xl font-semibold">
                {formatCount(user.public_repos)}
              </td>
              <td className="p-2 text-lg sm:text-xl font-semibold">
                {formatCount(user.followers)}
              </td>
              <td className="p-2 text-lg sm:text-xl font-semibold">
                {formatCount(user.following)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default UserProfile;
