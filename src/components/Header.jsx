import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          Abhay Singh
        </h1>
        <div className="flex gap-6 text-xl">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="mailto:2k22.cscys32245@gmail.com" className="hover:text-gray-300">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
}
