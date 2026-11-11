---
title: Private Generative AI platform
summary: A secure platform for experimenting with LLMs while keeping proprietary data inside the organization.
org: Empire Life
period: 2024 – 2026
stack: [Azure OpenAI, Azure AI Foundry, AKS, Key Vault, Terraform, ArgoCD]
metrics: ['Full data residency', 'PIPEDA compliant']
order: 4
---

**Problem.** The ML team needed to experiment with LLMs without exposing actuarial or claims data to external model providers.

**Approach.** I deployed a private Generative AI platform on Azure with full data residency, infrastructure as code and GitOps delivery, plus MLOps and observability practices for the services around it.

**Result.** Teams could iterate with LLMs while meeting PIPEDA compliance requirements, and model release cycles got shorter.
