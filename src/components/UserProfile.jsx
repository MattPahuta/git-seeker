import { FiMapPin, FiLink, FiCalendar, FiMail } from 'react-icons/fi';
// <FiMapPin /> | <FiLink /> | <FiCalendar />
import { formatDate, formatCount, ensureProtocol } from "../utils/formatters";
import testAvatar from '../assets/avatar-temp.jpg'
// function UserMetaDataItem({ label, value, href}) {
//   const isAvailable = Boolean(value);

//   return (
//     <li>

//     </li>
//   )
// }

function Spinner() {
  return (
    <div
      role="status"
      aria-label="Loading user profile"
      className="mt-10 flex flex-col items-center gap-3 text-gray-500"
    >
      <svg
        aria-hidden="true"
        className="h-8 w-8 animate-spin text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
      </svg>
      <p className="text-sm">Fetching profile...</p>
    </div>
  );  
}

function UserProfile({ error }) {
  // if (loading) return <Spinner />;

  // if (error || !user) return null;

  return (
    <article className="p-6 space-y-4 sm:space-y-6 rounded-xl dark:bg-zinc-800">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <img
          src={testAvatar}
          // alt={`${user.login}'s GitHub avatar`}
          width={128}
          height={128}
          className="h-32 w-32 rounded-full object-cover shadow-md border-2 border-indigo-500"
        />
        <div className="text-center sm:text-left">
          <h2 className="mb-2 text-3xl sm:text-4xl font-semibold text-zinc-50">
            {/* {user.name || user.login} */}
            Matt Pahuta
          </h2>
          {/* <p>@{user.login}</p> */}
          <p className="text-lg text-indigo-400">@MattPahuta</p>
          <p>Joined November 28, 2017</p>
          {/* <div className="flex items-center gap-2">
            <FiCalendar
              aria-hidden="true"
              focusable="false"
              className="text-indigo-400"
            />
            <p>Joined November 28, 2017</p>
          </div> */}
        </div>
      </div>
      <p className="sm:text-lg leading-relaxed">
        {/* {user.bio || "This profile has no bio."} */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
        doloremque omnis qui hic quisquam cumque consequuntur.
      </p>

      {/* metadata list - set sr-only heading? */}
      {/* FiMapPin, FiLink, FiCalendar */}
      <ul
        role="list"
        aria-label="User metadata"
        className="text-sm sm:text-base flex flex-wrap gap-3.5">
        <li className="flex items-center gap-1.5">
          <FiMapPin
            aria-hidden="true"
            focusable="false"
            className="text-indigo-400"
          />
          California, U.S.A
        </li>
        <li className="flex items-center gap-1.5">
          <FiMail
            aria-hidden="true"
            focusable="false"
            className="text-indigo-400"
          />
          <a
            href=""
            className="rounded-sm hover:underline hover:text-indigo-400 focus-visible:outline-2 outline-offset-1 focus-visible:outline-indigo-400">
            mattpahutacodes@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-1.5 group">
          <FiLink
            aria-hidden="true"
            focusable="false"
            className="text-indigo-400"
          />
          <a
            href=""
            className="rounded-sm hover:underline hover:text-indigo-400 focus-visible:outline-2 outline-offset-1 focus-visible:outline-indigo-400">
            mattpahutacodes.dev
          </a>
        </li>
      </ul>
      {/* user stats table*/}
      <div className="p-4 rounded-md dark:bg-zinc-900">
        <table className="table-auto w-full border-collapse text-center">
          <caption className="sr-only">
            Key GitHub statistics for user
          </caption>
          <thead>
            <tr>
              <th className="font-semibold">Repos</th>
              <th className="font-semibold">Followers</th>
              <th className="font-semibold">Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">96</td>
              <td className="p-2">15</td>
              <td className="p-2">23</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default UserProfile;