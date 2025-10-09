import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-stone-900 font-sans text-zinc-100">
      <Navbar />
      <main className="max-w-7xl flex-grow space-y-14 px-4 py-24 leading-relaxed lg:max-w-7xl">
        <section className='flex flex-col lg:flex-row lg:gap-8 lg:mx-16'>
          <div className='flex flex-col mb-16 lg:mb-0 max-w-72'>
            <header className="">
              <h1 className="text-4xl font-bold text-nowrap">
                kavvata
              </h1>
              <h2 className="text-xl font-medium text-nowrap">
                Fullstack Dev
              </h2>

              <p className='mt-4 text-zinc-300'>
                Desenvolvedor Full-Stack movido a
                {" "}<span className='text-zinc-100 font-medium'>curiosidade</span>.{" "}
              </p>

            </header>
          </div>
          <section className='flex flex-col gap-4 flex-grow'>
            <section id="about" className=' text-zinc-300'>
              <p className="">
                Desenvolvedor Full-Stack movido a curiosidade.
                Entusiasta de arquitetura de sistemas.
              </p>
            </section>

            <section id="experience">
              <h2 className="mb-3 text-xl font-semibold text-zinc-100">Experience</h2>
              <div className="group rounded-lg transition-colors flex flex-row max-w-3xl justify-between">
                <a href="/experience/unespar" className="flex flex-row gap-2 text-zinc-100 font-bold group-hover:text-sky-200 transition-colors mb-2">
                  <span className="font-medium">Fullstack developer intern</span>
                  <span className="font-bold">·</span>
                  <span className="">Unespar</span>
                </a>
                <div className='italic text-sm text-center'>
                  <span>Oct 2023 -  Oct 2025</span>
                </div>
              </div>
            </section>

            <section id="side-projects">
              <h2 className="mb-3 text-xl font-semibold text-zinc-100">Side Projects</h2>
            </section>

            <section id="now">
              <h2 className="mb-3 text-xl font-semibold text-zinc-100">Currently</h2>
              <ul className="list-inside list-disc space-y-1 text-zinc-300">
                <li>Experimenting with <strong>Clean Architecture</strong>, <strong>TDD</strong> and <strong>CI</strong></li>
                <li>Slowly crafting this portfolio with <strong>React + Tailwind</strong></li>
                <li>Reading and revisiting texts on epistemology of the programmer’s knowledge</li>
              </ul>

              <p className="mt-8 text-center text-zinc-500 italic">
                “If you lose the people, you lose the program.”
              </p>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home
