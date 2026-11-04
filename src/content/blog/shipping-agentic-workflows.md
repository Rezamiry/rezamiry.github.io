---
title: "What I learned shipping agentic workflows in a regulated company"
description: "Evaluation first, humans in the loop, and boring infrastructure: lessons from taking agents from demo to production."
date: 2026-11-04
tags: [agents, llmops, evaluation]
---

Demos of agentic systems are easy. Production is where it gets interesting, especially in a regulated industry like insurance. Here are the lessons that have held up for me.

## 1. Build the evaluation framework before the agent

If you can't measure groundedness, relevance and correctness, you can't tell whether a change helped. I build the evaluation harness first, calibrate it against subject-matter experts, and then run it as an automated regression test on every change to prompts, retrieval or models.

## 2. Keep humans in the loop where trust is earned

Human-in-the-loop review isn't a sign the system is weak. It's how you cross-calibrate automated scores with expert judgment, and how you earn the right to automate more over time.

## 3. Data residency is a design constraint, not an afterthought

When proprietary data can't leave your environment, the platform has to be private from the start: network boundaries, secrets management, infrastructure as code and clear audit trails.

## 4. Boring infrastructure wins

Event-driven workflows, container orchestration, CI/CD and observability aren't glamorous, but they're what keeps an agent running reliably after the demo is over.

*This is a starter post. More to come on RAG, agent architectures and LLMOps.*
