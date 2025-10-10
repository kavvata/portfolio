import GameOfLife from "../components/GameOfLife";
import { KareBold } from "../components/KareBold";
import imgCappellaSistinaUrl from "../../public/cappella_sistina_halftone.png";

function Home() {
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
          <div className="p-1 md:p-0">
            <GameOfLife />
          </div>
          <div className="text-zinc-400">
            <p className="text-zinc-200">Apaixonado por arte.</p>
            <p>
              Acredito que, onde há o toque do ser humano, inconsequentemente
              existe <KareBold>expressão</KareBold>. Observo isso nas mais
              antigas obras de arte. Os maiores museus do mundo estão rechados
              com produtos de marceneiros, pintores, vidreiros -{" "}
              <KareBold>Trabalho</KareBold>.
            </p>
          </div>
          <div className="mt-8 space-y-2">
            <figure>
              <img
                className="w-full rounded-lg"
                src={imgCappellaSistinaUrl}
                alt="Imagem do teto da capela sistina em bitmap, com o tema de cores Kanagawa."
              />
            </figure>
            <p className="text-center mb-8 text-sm text-zinc-500 italic">
              Exemplo de "Trabalho".
            </p>
          </div>
          <div className="text-zinc-400">
            <p className="text-zinc-200">
              Sinto que o mesmo existe dentro de sistemas.
            </p>
            <p>
              Por trás de cada rotina, estrutura de dados, wireframe e layout
              existe uma <KareBold>decisão</KareBold>, repleto de intenções
              humanas. A cada decisão, humores, personalidades e características
              do ambiente são expressas - as vezes se revelam em commits e
              blocos de comentários - muitas vezes evidente no próprio
              código-fonte.
            </p>
            <p>
              Porém, não só de código-fonte é composto o{" "}
              <KareBold>trabalho</KareBold> do dev. Existe um universo de
              contexto que não se traduz para o código, nem documentação ou
              prompt files. Naur argumentava que esses artefatos são{" "}
              <KareBold>estáticos</KareBold>, sendo uma grande contradição ao
              fato de que o mundo é um <KareBold>verbo</KareBold>. Problemas
              mutam constantemente.
            </p>
          </div>
          <div className="text-zinc-400">
            <p className="text-zinc-200">
              Assim, busco construir sistemas que se sustentam no tempo.
            </p>
            <p>
              Projetando arquiteturas robustas de <KareBold>back-end</KareBold>,
              mantendo automações, observabilidade e ambientes containerizados
              para maior escalabilidade; Na outra ponta, aplicando conceitos de
              design atômico e empatia técnica ao <KareBold>front-end</KareBold>
              , visando entregar uma experiência consistente que conversa com
              usuário final, e sempre mantendo <KareBold>comunicação</KareBold>{" "}
              <KareBold>ativa</KareBold> com colegas, gestores e usuários, pois
              acredito que é a partir das conversas interdisciplinares que o
              software se edifica.
            </p>
            <p>
              No fim, sigo curioso pelas formas que o pensamento pode tomar em
              um sistema, <KareBold>trabalhando</KareBold> em meus projetos e
              compartilhando o que aprendo pelo caminho.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
