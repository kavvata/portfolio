+++
title = 'Estudo de caso: UNESPAR'
date = 2026-06-07
+++

![Eu, Ministrando treinamento](/images/unespar/unespar-treinamento-2025.jpeg)

---

## Parte 1. Suporte técnico

![Eu, congelando na salado CPD](/images/unespar/selfie_with_servers.jpg)
Entrei como estagiário do suporte. Gostei do ambiente universitário tanto quanto eu gostei de ajudar.
Já cheguei a entrar logo que os portões abriam e, entre chamados e eventos acadêmicos, só saia na hora de fechar a universidade (aconteceu algumas vezes).
![Desenho da turma de matemática](/images/unespar/drawing_on_blackboard.jpg)
Durante esse período, aprendi a trabalhar com mais autonomia, conhecer a infraestrutura, documentar e melhorar fluxos, implementar novas ferramentas e me encantar por servir a comunidade acadêmica.
![Topologia desenhada enquanto conhecia o campus](/images/unespar/network_topology_sensitive_censor_this.jpg)

## Parte 2. Desenvolvimento

estudamos django por um mes, enquanto davamos andamento aos sistemas Java.

quando recebemos o codigo fonte nao estavamos preparados para o tamanho da bucha:
12 anos de codigo backend desenvolvidos sem seguir boas praticas de python, django e sem uma arquitetura estabelecida.
regra de negócio nas models ORM, views, decorators e templates.
framework praticamente in-house. mais de 80 entidades públicas possuiam convenio com a IFRN, o que renderizou a equipe original não disponível para sanar duvidas. Estavamos sozinhos. De novembro a abril, estudamos o SUAP. analisamos o código-fonte e suas nomenclaturas ambíguas, fixtures de testes unitários, relações de banco de dados, cada regra de negócio distribuída em cada camada da arquitetura do sistema e, ao final do mês, montamos nosso primeiro formulário de servidores.
_imagem do diagrama de classes resumido do servidor_
_imagem do form_
a partir daí, estávamos familiarizados com o projeto e o céu era o limite.
Uma coisa era clara, o IFRN funciona de maneira bem diferente da UNESPAR. Então tínhamos muitas regras de negócio para adaptar.
Nosso gestor organizou reuniões com diversas pró-reitorias para validar o funcionamento da ferramenta, mais notavelmente a de Pesquisa, onde fiquei responsável por realizar as adaptações e melhorias necessárias.

{{< video src=/images/unespar/suap-gource.mp4 width=600 >}}

---
