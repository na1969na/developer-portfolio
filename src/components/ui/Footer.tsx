import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-gray-800 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Nana Okamoto. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://github.com/na1969na"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/nana-okamoto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:nanaokamoto.tech@gmail.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
