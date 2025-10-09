import GameOfLife from "../components/GameOfLife";
import { KarenBold } from "../components/KarenBold";

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
              <KarenBold>curiosidade</KarenBold>.{" "}
            </p>
          </header>
        </div>

        <section className="flex flex-col gap-4 flex-grow max-w-7xl">
          <GameOfLife />
          <div className="text-zinc-400">
            <p className="text-zinc-200">Apaixonado por arte.</p>
            <p>
              Acredito que, onde há o toque do ser humano, inconsequentemente
              existe <KarenBold>expressão</KarenBold>. Observo isso nas mais
              antigas obras de arte. Os maiores museus do mundo estão rechados
              com frutos do trabalho manual de marceneiros, pintores, vidreiros.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
