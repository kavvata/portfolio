+++
date = '2026-09-25T23:28:53-03:00'
draft = false
title = 'What is the value of source code?'
+++

How much do you pay in subscriptions? You can add them up: streaming, a music app, cloud storage. Behind each of those services there is source code. How much is source code worth? With AI generating code in minutes, this question has become harder to answer. And the discussion is not new: it can be traced back to 1985, with the paper [Programming as Theory Making](https://pages.cs.wisc.edu/~remzi/Naur.pdf).

---

## Theory?

In this paper, Naur argues that source code has little — if any — value. For Naur, what brings value to a software project is the developer's understanding of the `problem` and how the software `product` interacts with that problem.
That understanding — called `theory` — is the deciding factor in how source code should be written, so that it does not become a mess that is hard to maintain in the future.

To do this, the developer must grasp as many facets of the problem as possible, understand who the end users of the `product` are, and have command of software engineering.
The paper identifies that source code and documentation are ineffective at conveying a developer's `theory` to another developer. Naur defends that only clear `communication` between the development team, the management team, and end users can provide the foundation for a developer to build their own `theory`.

For example: source code and documentation are "photographs" of the developers' `theory`. Static, frozen in time, while the `problem` is a process, constantly evolving and transforming in the real world, together with each person on the team's `theory`. Because of this, `theory` determines how the source code should be updated.

```
theory = product vs problem
```

## Was the developer replaced?

The pandemic only endorsed Naur's arguments, 35 years after the paper's publication. Lockdowns exponentially increased internet usage. Demand for software development grew, along with the influx of juniors into the market. The tech market found itself flooded with startups shipping `mediocre` products, writing source code became a bottleneck for the industry, and crunch practices gained ground in software companies. This instability made it hard for developers who had mastered writing source code but had little `theory` and little `communication` to stand out in the market. Olano's blog post [Code is more run than read (2023)](https://olano.dev/blog/code-is-run-more-than-read/) illustrates this dynamic, in which the author compares the value of source code to the other parts that surround the software `product`, such as infrastructure, users, and the business itself.

Then, in the post-pandemic era, we came into contact with the use of LLMs for software development. Mediocre source code can now be generated in minutes, compared to the previous era — when it took days to carry out the same tasks under tight deadlines. This eliminated the bottleneck of writing source code, but the business model stayed the same: ship `mediocre` products to production. Along with the bottleneck, this change also carried off the developers who had little `theory`, through layoffs.

```
theory > source code
```

## What is the future of the developer?

These days, many discussions about the future of development revolve around the concept of the interdisciplinary developer. Since software solutions can be generated quickly, the developer must go beyond technical knowledge.
That is to say, all signs point to the developer of the future knowing all the parts of the `product` well, how it interacts with the `problem`, and `communicating` that interaction clearly to the stakeholders. On top of that, the developer of the future applies good software engineering practices so that the `product` continues to be easy to maintain in the future, even when relying on machines that generate mediocre source code.

In other words, the developer of the future is the same developer from 1985 — the one with a well-built `theory`:

```
theory + communication + engineering = value
```
