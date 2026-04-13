import { FiHeart } from "react-icons/fi";

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-300 dark:border-zinc-700">
      <div className="max-w-3xl px-4 mx-auto flex items-center justify-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Made with{" "}
          <FiHeart
            aria-hidden="true"
            focusable="false"
            className="size-4 inline-flex text-indigo-600 dark:text-indigo-200"
          />{" "}
          in React. Coded by{" "}
          <a
            href="https://mattpahuta.com"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-sm hover:cursor-pointer hover:underline hover:text-indigo-400 focus-visible:outline-2 outline-offset-1 focus-visible:outline-indigo-400">
            Matt Pahuta
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
