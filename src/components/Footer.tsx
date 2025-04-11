import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full px-6 py-6 border-t bg-theme-2 dark:bg-neutral-900 flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-500">
      {/* Redes sociales a la izquierda */}
      <div className="flex gap-4 mb-4 sm:mb-0">
        <a
          href={process.env.NEXT_PUBLIC_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center bg-theme-2 dark:bg-neutral-800 rounded-full hover:bg-theme-5 dark:hover:bg-neutral-700 transition"
        >
          <FaGithub size={18} />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center bg-theme-2 dark:bg-neutral-800 rounded-full hover:bg-theme-5 dark:hover:bg-neutral-700 transition"
        >
          <FaLinkedin size={18} />
        </a>
      </div>

      {/* Texto al centro */}
      <div>© Laura Gotarra – {new Date().getFullYear()}</div>
    </footer>
  );
}
