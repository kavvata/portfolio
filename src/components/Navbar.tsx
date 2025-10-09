function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-900/60 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-mono text-sm text-zinc-300">
          ⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖
        </span>
        <ul className="flex gap-6 text-sm text-zinc-400">
          <li>
            <a
              href="/portfolio/"
              className="hover:text-zinc-100 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/portfolio/experience/"
              className="hover:text-zinc-100 transition-colors"
            >
              Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
