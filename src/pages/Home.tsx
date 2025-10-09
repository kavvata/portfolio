import GameOfLife from "../components/GameOfLife";
import { KarenBold } from "../components/KarenBold";
import imgURL from "../../public/cappella_sistina_halftone.png";

function Home() {
  const BASE_URL = import.meta.env.BASE_URL;
  return (
    <main className="flex-grow space-y-14 px-4 py-24 leading-relaxed">
      <div className="flex flex-col lg:flex-row lg:gap-8 lg:mx-16">
        <section className="flex flex-col mb-16 lg:mb-0 max-w-72">
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
        </section>

        <section className="flex flex-col gap-4 flex-grow max-w-7xl">
          <GameOfLife />
          <div className="text-zinc-400">
            <p className="text-zinc-200">Apaixonado por arte.</p>
            <p>
              Acredito que, onde há o toque do ser humano, inconsequentemente
              existe <KarenBold>expressão</KarenBold>. Observo isso nas mais
              antigas obras de arte. Os maiores museus do mundo estão rechados
              com produtos de marceneiros, pintores, vidreiros -{" "}
              <KarenBold>Trabalho</KarenBold>.
            </p>
            <div className="mt-8 space-y-2">
              <figure>
                <img
                  className="w-full"
                  src={imgURL}
                  alt="Imagem do teto da capela sistina."
                />
              </figure>
              <p className="italic text-center text-sm text-zinc-500">
                Exemplo de Trabalho.
              </p>
            </div>
            <p>
              O conceito do artista surgiu somente após a revolução industrial.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
