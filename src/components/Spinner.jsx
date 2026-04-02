function Spinner() {
  return (
    <div
      role="status"
      aria-label="Loading user profile"
      aria-live="polite"
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
      <p className="text-lg">Loading profile...</p>
    </div>
  );
}

export default Spinner;