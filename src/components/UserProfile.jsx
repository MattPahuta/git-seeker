import { FiMapPin, FiLink, FiCalendar } from 'react-icons/fi';
// <FiMapPin /> | <FiLink /> | <FiCalendar />
import { formatDate, formatCount, ensureProtocol } from "../utils/formatters";

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
    <article>
      <div className="flex flex-col">
        <img 
          // src={user.avatar_url} 
          // alt={`${user.login}'s GitHub avatar`}
          width={96}
          height={96} 
          className='h-24 w-24 rounded-full shadow-md bg-gray-600 border-0'
        />
        <div>
          <h2>
            {/* {user.name || user.login} */}
            Matt Pahuta
          </h2>
          {/* <p>@{user.login}</p> */}
          <p>@MattPahuta</p>
        </div>
      </div>
      <p>
        {/* {user.bio || "This profile has no bio."} */}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse doloremque dicta autem omnis qui hic quisquam cumque consequuntur! Animi doloremque.
      </p>
      {/* metadata list - set sr-only heading? */}
      {/* FiMapPin, FiLink, FiCalendar */}
      <ul
        role='list'
        aria-label='User metadata'
        className='flex'
      >
        <li className="flex">
          <FiMapPin />
          California, U.S.A
        </li>
        <li className="flex">
          <FiCalendar />
          Joined November 28, 2017
        </li>
        <li className="flex">
          <FiLink />
          mattpahutacodes.dev
        </li>
      </ul>
      {/* user stats list */}
      <ul
        role='list'
        aria-label='Profile statistics'
      >
        <li className='flex'>
          170 repos
        </li>
        <li className='flex'>
          15 followers
        </li>
        <li className='flex'>
          23 following
        </li>

      </ul>
    </article>
  )
}

export default UserProfile;