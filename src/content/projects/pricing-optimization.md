---
title: Dynamic pricing and price forecasting
summary: Forecasting and bandit-based pricing for bus and airline tickets, including the Price Lock feature.
org: Alibaba Travel
period: 2019 – 2020
stack: [Python, XGBoost, PyTorch, Time Series, Thompson Sampling, FastAPI, Docker]
metrics: ['90%+ forecast accuracy', '+5% profit margin']
order: 6
---

**Price Lock.** A time-series model forecast ticket price movements (90%+ accuracy), and its volatility scores powered a feature letting customers hold a fare for a fixed window.

**PriceMaster.** Three pricing-optimization microservices for bus ticket providers adjusted rates dynamically from predictive model outputs, driving a 5% increase in profit margins.

**Airline dynamic pricing.** A multi-armed bandit (Thompson Sampling) balanced revenue against booking conversion, validated through offline simulation.
