import GameOfLife from "../components/GameOfLife";
import { KareBold } from "../components/KareBold";

function Home() {
  return (
    <main className="flex-grow space-y-14 px-4 py-24 leading-relaxed">
      <div className="flex flex-col justify-between lg:flex-row lg:gap-8 lg:mx-16">
        <section className="flex flex-col mb-16 lg:mb-0 max-w-72">
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
          <div className="mt-11">
            <ul className="flex flex-row gap-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://github.com/kavvata/"
                  target="_blank"
                  className="hover:text-zinc-100 transition-colors"
                >
                  <span className="font-kare text-lg">[g]</span> Github
                </a>
              </li>
              <div className="border-0 border-r text-zinc-500" />
              <li>
                <a
                  href="https://www.linkedin.com/in/gabriel-kavata-leandro-734256286"
                  className="hover:text-zinc-100 transition-colors"
                  target="_blank"
                >
                  <span className="font-kare text-lg">[l]</span> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-4 flex-grow max-w-7xl">
          <GameOfLife />
          <div className="text-zinc-400">
            <p className="text-zinc-200">
              Entusiasta de arquiteturas escaláveis.
            </p>
            <p>
              Tenho interesse em sistemas que se sustentam no tempo, construídos
              com boas práticas de <KareBold>backend</KareBold>, automação e{" "}
              <KareBold>observabilidade</KareBold>. Trabalho em ambientes{" "}
              <KareBold>containerizados</KareBold>, buscando previsibilidade,
              manutenção simples e crescimento orgânico junto ao produto.
            </p>
            <p className="text-zinc-200 mt-8">
              Dedicado a interfaces que fazem sentido.
            </p>
            <p>
              Busco enxergar o front-end como um espaço de equilíbrio entre
              intenção e clareza. Gosto de pensar a{" "}
              <KareBold>atomicidade</KareBold> e a arquitetura de interface como
              meios de traduzir propósito, com{" "}
              <KareBold>empatia técnica</KareBold> e consistência na
              experiência.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
