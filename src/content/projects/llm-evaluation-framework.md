---
title: LLM evaluation framework
summary: A framework measuring groundedness, relevance and correctness, with human-in-the-loop calibration and automated regression tests.
org: Empire Life
period: 2024 – 2026
stack: [Ragas, Prompt Flow, MLflow, GitHub Actions]
metrics: ['95%+ validated accuracy']
featured: true
order: 3
---

**Problem.** Generative AI outputs are hard to trust in a regulated industry unless quality is measured systematically.

**Approach.** I designed an evaluation framework that scores groundedness, relevance and correctness, and worked with subject-matter experts to cross-calibrate automated scores against human judgment. Evaluations run as automated regression tests so changes to prompts, models or retrieval can be checked before release.

**Result.** The systems reached 95%+ validated accuracy, and the framework made releases safer and faster.
