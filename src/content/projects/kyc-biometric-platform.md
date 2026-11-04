---
title: KYC biometric identity verification
summary: A microservice ML platform for remote identity verification, scaled to millions of banking customers.
org: Sadad Informatics
period: 2020 – 2023
stack: [PyTorch, TensorFlow, FaceNet, Docker, Kubernetes, Kafka, RabbitMQ, Redis, FastAPI]
metrics: ['8M+ customers', '90% faster processing', '1% FAR / 5% FRR', '100+ req/s, sub-second latency']
featured: true
order: 5
---

**Problem.** A mobile banking provider needed fast, secure remote identity verification at national scale.

**Approach.** I led the ML team through a POC covering Face Authentication, Liveness (Anti-Spoofing), Action Detection and Deepfake Detection with CNNs and FaceNet, then designed the production microservice architecture and event-driven pipeline around it. MLOps practices cut processing time by 90%.

**Result.** The system serves 8+ million banking customers at 100+ requests per second with sub-second latency, tuned to a 1% False Acceptance Rate and 5% False Rejection Rate.
