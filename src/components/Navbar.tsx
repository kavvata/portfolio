import { KareBold } from "./KareBold";

function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-900/60 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/portfolio/" className="hover:text-zinc-100 transition-colors">
          <span className="font-kare text-lg">[k]</span>
        </a>
        <ul className="flex gap-6 text-sm text-zinc-400">
          <li>
            <a
              href="/portfolio/"
              className="hover:text-zinc-100 transition-colors"
            >
              <span className="font-kare text-lg">[h]</span> Home
            </a>
          </li>
          <li>
            <a
              href="/portfolio/experience/"
              className="hover:text-zinc-100 transition-colors"
            >
              <span className="font-kare text-lg">[e]</span> Expêriencia
            </a>
          </li>
          <li>
            <a
              href="/portfolio/experience/"
              className="hover:text-zinc-100 transition-colors"
            >
              <span className="font-kare text-lg">[p]</span> Projetos
            </a>
          </li>
          <li>
            <a
              href="/portfolio/blog/"
              className="hover:text-zinc-100 transition-colors"
            >
              <span className="font-kare text-lg">[e]</span> Blog
            </a>
          </li>
          <li>
            <a
              href="/portfolio/about/"
              className="hover:text-zinc-100 transition-colors"
            >
              <span className="font-kare text-lg">[s]</span> Sobre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
