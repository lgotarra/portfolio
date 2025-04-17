import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full px-6 py-6 border-t bg-white dark:bg-neutral-900 flex flex-col sm:flex-row items-center justify-between text-sm">
      {/* Redes sociales a la izquierda */}
      <div className="flex gap-4 mb-4 sm:mb-0">
        <a
          href={process.env.NEXT_PUBLIC_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary hover:text-white transition"
        >
          <FaGithub size={18} />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary hover:text-white transition"
        >
          <FaLinkedin size={18} />
        </a>
      </div>

      {/* Texto al centro */}
      <div>© Laura Gotarra - {new Date().getFullYear()}</div>
    </footer>
  );
}
