import GameOfLife from "../components/GameOfLife";

function Home() {
  return (
    <main className="flex-grow space-y-14 px-4 py-24 leading-relaxed">
      <section className="flex flex-col lg:flex-row lg:gap-8 lg:mx-16">
        <div className="flex flex-col mb-16 lg:mb-0 max-w-72">
          <header className="">
            <h1 className="font-kare text-5xl font-bold text-nowrap">
              kavvata
            </h1>
            <h2 className="text-xl font-medium text-nowrap">Fullstack Dev</h2>

            <p className="mt-4 text-zinc-300">
              Desenvolvedor Full-Stack movido a{" "}
              <span className="text-zinc-50 font-medium font-kare text-xl">
                curiosidade
              </span>
              .{" "}
            </p>
          </header>
        </div>

        <section className="flex flex-col gap-4 flex-grow max-w-7xl">
          <div className="min-h-44">
            <GameOfLife />
          </div>
          <div className="text-zinc-400">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            <p>
              Sed, tempore odio mollitia, eaque commodi explicabo placeat
              numquam ad deleniti expedita minima sit delectus libero quisquam
              aliquid assumenda fugit doloremque impedit.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
