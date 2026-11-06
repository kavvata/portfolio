+++
date = '2026-09-25T23:28:53-03:00'
draft = false
title = 'Qual o valor do código-fonte?'
+++

Quanto você paga em assinatura? Dá pra somar: streaming, app de música, armazenamento em nuvem. Por trás de cada um desses serviços, existe um código-fonte. Quanto vale um código-fonte? Com a IA gerando código em minutos, essa pergunta ficou mais difícil de responder. E a discussão nem é nova: já se falava disso em 1985, com o artigo [Programação como Construção de Teoria](https://pages.cs.wisc.edu/~remzi/Naur.pdf).

---

## Teoria?

Nesse artigo, Naur argumenta que o código-fonte tem pouco -- se não nenhum -- valor. Para Naur, o que trás valor à um projeto de software é o entendimento do desenvolvedor sobre o `problema` e como o `produto` de software interage com esse problema.
Esse entendimento -- chamado de `teoria` -- é o fator determinante para decidir como o código-fonte deve ser escrito, de forma que o mesmo não se torne [bagunçado e difícil de realizar manutenções no futuro](https://www.gitclear.com/the_ai_code_quality_maintainability_gap).

Para isso, o desenvolvedor deve compreender o máximo de facetas do problema, quem são os usuários finais do `produto` e ter domínio da engenharia de software.
Esse artigo identifica que o código-fonte e a documentação são ineficazes em transmitir a `teoria` de um desenvolvedor para outro. Naur defende que somente a `comunicação` clara entre a equipe de desenvolvedores, a equipe de gestores e os usuários finais pode fornecer os fundamentos para que um desenvolvedor construa sua própria `teoria`.

Por exemplo: o código-fonte e a documentação são "fotografias" da `teoria` dos desenvolvedores. Paradas, congeladas no tempo, enquanto o `problema` é um processo, evoluindo e se transformando constantemente na vida real, junto com a `teoria` de cada pessoa da equipe. Por conta disso, a `teoria` determina como o código-fonte deve ser atualizado.

```
teoria = produto vs problema
```

## O desenvolvedor foi substituído?

A pandemia apenas endossou os argumentos de Naur, 35 anos depois de sua publicação. O lockdown aumentou exponencialmente o uso da internet. [A demanda de desenvolvimento de software aumentou](https://web.archive.org/web/20220322160801/https://hired.com/2022-state-of-software-engineers/), junto com o ingresso de juniores no mercado. O mercado de tecnologia se viu inundado de startups com `produto` mediano, a escrita do código-fonte tornou-se um gargalo para a indústria e as práticas de crunch ganharam espaço nas empresas de software. Essa instabilidade fez com que o desenvolvedor que dominava a escrita de código-fonte, mas com pouca `teoria` e pouca `comunicação` tivessem dificuldades para se destacar no mercado. O blog [Code is more run than read (2023)](https://olano.dev/blog/code-is-run-more-than-read/) do Olano ilustra essa dinâmica, onde o autor compara o valor do código-fonte com outras partes que revolvem o `produto` de software, como a infraestrutura, os usuários e o negócio em si.

Já no pós-pandemia, tivemos contato com o uso de LLMs para desenvolvimento de software. O código-fonte mediano, agora, pode ser gerado em alguns minutos comparado com a época anterior: onde levava-se dias para atender as mesmas tarefas com prazos apertados. Isso eliminou o gargalo de escrita de código-fonte, mas o modelo de negócio permaneceu o mesmo: botar `produto` mediano em produção. Assim, o valor de escrever código depreciou. Por conta disso, os salários dos devs estagnaram, e os que tinham pouca `teoria` acabaram em lay-offs.

```
teoria > código-fonte
```

## Qual o futuro do desenvolvedor?

Hoje em dia, muitas discussões sobre como será o futuro do desenvolvimento gira em torno do conceito de [devs interdisciplinares](https://jurnal.ilcagam.org/index.php/jsti/article/view/34). Como soluções de software podem ser geradas rapidamente, o desenvolvedor deve ir além do conhecimento técnico.
Isto é, tudo indica que o dev do futuro deve conhecer bem todas as partes do `produto`, como o mesmo interage com o `problema` e `comunicar` essa interação com clareza para as partes interessadas. Aliado a isso, o dev do futuro aplica de boas praticas de engenharia de software para que o `produto` continue sendo fácil de manter no futuro, mesmo quando utilizando [máquinas de geração de código-fonte mediano](https://arxiv.org/abs/2603.27249).

Ou seja, o dev do futuro é o mesmo dev de 1985, aquele que tem uma boa `teoria` construída:

```
teoria + comunicação + engenharia = valor
```
