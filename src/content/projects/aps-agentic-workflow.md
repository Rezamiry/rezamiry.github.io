---
title: Agentic claims document summarization
summary: An event-driven agentic workflow that summarizes Attending Physician Statements end to end in production.
org: Empire Life
period: 2024 – 2026
stack: [LangGraph, Azure AI Foundry, Azure OpenAI, Document Intelligence, AKS, Kafka]
metrics: ['50% faster claim processing']
featured: true
order: 1
---

**Problem.** Underwriters and claims teams spent significant time reading long Attending Physician Statement (APS) documents before a decision could be made.

**Approach.** I architected and owned an event-driven agentic workflow on LangGraph and Azure AI that ingests APS documents, extracts and summarizes the clinically relevant content, and hands a structured summary to the claims team. The system is built around evaluation from day one (see the evaluation framework project).

**Result.** The workflow runs in production and cut claim processing time by 50%.
