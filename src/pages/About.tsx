import GameOfLife from "../components/GameOfLife";
import { KareBold } from "../components/KareBold";
import imgURL from "../../public/cappella_sistina_halftone.png";

function Home() {
  return (
    <main className="flex-grow space-y-14 px-4 py-24 leading-relaxed">
      <div className="flex flex-col lg:mx-16 lg:flex-row lg:gap-8">
        <section className="mb-16 flex max-w-72 flex-col lg:mb-0">
          <header className="">
            <h1 className="font-kare text-5xl font-bold text-nowrap">
              kavvata
            </h1>
            <h2 className="text-xl font-medium text-nowrap">Fullstack Dev</h2>

            <p className="mt-4 text-zinc-300">
              Desenvolvedor Full-Stack movido a <KareBold>curiosidade</KareBold>
              .{" "}
            </p>
          </header>
        </section>

        <section className="flex max-w-7xl flex-grow flex-col gap-4">
          <GameOfLife />
          <div className="text-zinc-400">
            <p className="text-zinc-200">Apaixonado por arte.</p>
            <p>
              Acredito que, onde há o toque do ser humano, inconsequentemente
              existe <KareBold>expressão</KareBold>. Observo isso nas mais
              antigas obras de arte. Os maiores museus do mundo estão rechados
              com produtos de marceneiros, pintores, vidreiros -{" "}
              <KareBold>Trabalho</KareBold>.
            </p>
            <div className="mt-8 space-y-2">
              <figure>
                <img
                  className="w-full rounded-lg"
                  src={imgURL}
                  alt="Imagem do teto da capela sistina."
                />
              </figure>
              <p className="text-center text-sm text-zinc-500 italic">
                Exemplo de Trabalho.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
