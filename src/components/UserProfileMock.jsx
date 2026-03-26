import { FiMapPin, FiLink, FiCalendar, FiMail } from 'react-icons/fi';
// <FiMapPin /> | <FiLink /> | <FiCalendar />
import testAvatar from '../assets/avatar-temp.jpg'


function UserProfileMock({ user, loading, error }) {
  if (loading) return <Spinner />;

  if (error || !user) return null;

  return (
    <article className="p-6 space-y-4 sm:space-y-6 rounded-xl dark:bg-zinc-800">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <img
          src={testAvatar}
          alt="Test user avatar"
          width={128}
          height={128}
          className="h-32 w-32 rounded-full object-cover shadow-md border-2 border-indigo-500"
        />
        <div className="text-center sm:text-left">
          <h2 className="mb-2 text-3xl sm:text-4xl font-semibold text-zinc-50">
            Matt Pahuta
          </h2>
          <p className="text-lg text-indigo-400">@MattPahuta</p>
          <p className="text-gray-600 dark:text-slate-300">Joined November 28, 2017</p>
        </div>
      </div>
      <p className="sm:text-lg leading-relaxed">
        {/* {user.bio || "This profile has no bio."} */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
        doloremque omnis qui hic quisquam cumque consequuntur.
      </p>
      {/* metadata list - set sr-only heading? */}
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
              <th className="font-light">Repos</th>
              <th className="font-light">Followers</th>
              <th className="font-light">Following</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 text-lg sm:text-xl font-semibold">96</td>
              <td className="p-2 text-lg sm:text-xl font-semibold">15</td>
              <td className="p-2 text-lg sm:text-xl font-semibold">23</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default UserProfileMock;