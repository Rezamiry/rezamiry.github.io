export const site = {
  name: 'Reza Miry',
  title: 'Senior AI / ML Engineer',
  location: 'Toronto, Canada',
  url: 'https://rezamiry.github.io',
  description:
    'Reza Miry is a Senior AI/ML Engineer in Toronto building production-ready agentic and generative AI systems, MLOps pipelines and cloud ML platforms.',
  tagline:
    'I take AI from research to production: agentic workflows, RAG, and the MLOps around them.',
  email: 'rezmiry@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rezamiry',
  github: 'https://github.com/Rezamiry',
};

export const about = [
  'I’m a Machine Learning Engineer with 7+ years of experience and dual M.Sc. degrees in Statistics and Electrical Engineering, specializing in designing and deploying production-ready Generative AI and agentic solutions.',
  'From agentic workflows that cut insurance claim processing time by 50%, to a deep-learning KYC system serving 8+ million banking customers, I focus on scalable, reliable, high-impact AI systems. I own the work end to end: architecture, MLOps pipelines, and cloud deployment, without handing off between teams.',
  'I’m currently focused on production-ready agentic AI that bridges cutting-edge research and real business applications.',
];

export const stats = [
  { value: '7+', label: 'years in ML' },
  { value: '8M+', label: 'users served by KYC system' },
  { value: '50%', label: 'faster claim processing' },
  { value: '2', label: 'M.Sc. degrees' },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech?: string[];
};

export const experience: Job[] = [
  {
    role: 'Senior AI Engineer',
    company: 'Chubb',
    location: 'Toronto, ON',
    period: 'Jul 2026 – Present',
    bullets: [
      'Portfolio+ Studio: developing a portfolio optimization agent with demand-driven dynamic pricing.',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Empire Life',
    location: 'Toronto, ON',
    period: 'Jun 2024 – Jun 2026',
    bullets: [
      'Cut insurance claim processing time by 50% by owning end-to-end delivery of an event-driven agentic workflow (LangGraph + Azure AI) that summarizes Attending Physician Statement documents in production.',
      'Pioneered the enterprise’s first production RAG system over internal policy and claims documentation (Azure AI Search, GPT-4, Document Intelligence); it became the Customer Service team’s primary reference tool.',
      'Reached 95%+ validated accuracy with an LLM evaluation framework measuring groundedness, relevance and correctness, with human-in-the-loop SME calibration and automated regression testing.',
      'Deployed a private Generative AI platform for the ML team with full data residency, PIPEDA compliance, and no exposure of proprietary data to external model providers.',
      'Refactored legacy pipelines and established MLOps practices, shortening model release cycles and improving observability across production services.',
    ],
    tech: ['Azure AI Foundry', 'LangGraph', 'Azure OpenAI', 'AI Search', 'AKS', 'Terraform', 'ArgoCD', 'GitHub Actions', 'MLflow', 'FastAPI', 'Kafka', 'DataDog'],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'CareCanada',
    location: 'Toronto, ON',
    period: 'May 2023 – May 2024',
    bullets: [
      'Ran sentiment analysis and n-gram extraction over reviews with pre-trained LLMs.',
      'Fine-tuned an LLM to summarize and categorize doctors’ areas of expertise.',
      'Improved the recommender engine using sentiment and expertise signals, with a predicted 20% lift in CTR and conversion rate.',
    ],
  },
  {
    role: 'Research & Teaching Assistant',
    company: 'Brock University',
    location: 'St. Catharines, ON',
    period: 'Sep 2022 – Apr 2024',
    bullets: ['Research and teaching assistant roles alongside my M.Sc. in Statistics.'],
  },
  {
    role: 'ML Engineer, Team Lead / Data Scientist',
    company: 'Sadad Informatics Corp.',
    location: 'Tehran, Iran',
    period: 'May 2020 – May 2023',
    bullets: [
      'Led a team of 5 (data scientists, a data engineer, an ML engineer) as technical lead, setting ML architecture standards and owning delivery from POC to production.',
      'Scaled a KYC biometric system to 8+ million banking customers with a microservice ML architecture combining Face Authentication, Anti-Spoofing and Action Detection (90%+ accuracy).',
      'Cut processing time by 90% with MLOps best practices, sustaining 100+ requests/second at sub-second latency.',
      'Tuned models to a 1% False Acceptance Rate with a 5% False Rejection Rate to meet fraud-security requirements.',
      'Reduced customer churn by 25% with churn forecasting and revenue-based customer clustering.',
      'Increased sales by 5% with an A/B-tested collaborative-filtering recommender for the mobile banking app.',
    ],
    tech: ['PyTorch', 'TensorFlow', 'Docker', 'Kubernetes', 'MLflow', 'Kafka', 'RabbitMQ', 'Redis', 'PostgreSQL', 'FastAPI', 'Scala'],
  },
  {
    role: 'Data Scientist',
    company: 'Alibaba Travel Company',
    location: 'Tehran, Iran',
    period: 'Feb 2019 – May 2020',
    bullets: [
      'Price Lock: time-series model forecasting ticket price movements (90%+ accuracy) powering a feature that lets customers hold a fare.',
      'PriceMaster: three pricing-optimization microservices for bus ticket providers, driving a 5% increase in profit margins.',
      'Dynamic pricing: multi-armed bandit (Thompson Sampling) for airline fares, validated through offline simulation.',
    ],
    tech: ['Python', 'XGBoost', 'PyTorch', 'Docker', 'FastAPI', 'SQL'],
  },
  {
    role: 'Data Scientist',
    company: 'DGTeam',
    location: 'Tehran, Iran',
    period: 'Feb 2018 – Feb 2019',
    bullets: [
      'Built ML POCs for time-series trading signals (Forex, Nasdaq) and NLP-based social media mining (Word2Vec, LDA).',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Generative AI & Agents', items: ['RAG', 'Agentic AI', 'Multi-Agent Systems', 'LangGraph', 'LangChain', 'LlamaIndex', 'CrewAI', 'AutoGen', 'Microsoft Agent Framework', 'MCP', 'n8n', 'Function Calling'] },
  { group: 'LLMs & NLP', items: ['LLM Fine-Tuning', 'LLM Evaluation', 'Transformers', 'Hugging Face', 'vLLM', 'Ragas', 'Embeddings', 'Semantic Search'] },
  { group: 'ML & Deep Learning', items: ['PyTorch', 'TensorFlow', 'JAX', 'Scikit-learn', 'XGBoost', 'Reinforcement Learning', 'Computer Vision', 'Time Series'] },
  { group: 'MLOps & LLMOps', items: ['MLflow', 'Airflow', 'GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'LangSmith', 'OpenTelemetry', 'DataDog', 'A/B Testing'] },
  { group: 'Cloud & Data', items: ['Azure', 'GCP', 'AWS', 'Terraform', 'Databricks', 'Snowflake', 'PostgreSQL', 'pgvector', 'Pinecone', 'Elasticsearch', 'Redis', 'Kafka', 'Neo4j', 'Spark'] },
  { group: 'Engineering', items: ['Python', 'SQL', 'Scala', 'TypeScript', 'FastAPI', 'Flask', 'REST APIs', 'Microservices', 'Linux', 'System Design'] },
];

export const education = [
  { degree: 'M.Sc., Statistics', school: 'Brock University', place: 'St. Catharines, ON', period: '2022 – 2024' },
  { degree: 'M.Sc., Electrical Engineering (Digital Systems)', school: 'Sharif University of Technology', place: 'Tehran, Iran', period: '2015 – 2018' },
  { degree: 'B.Sc., Electrical & Electronics Engineering', school: 'Ferdowsi University of Mashhad', place: 'Mashhad, Iran', period: '2010 – 2015' },
];

export const certifications = [
  { name: 'AI Engineering Specialization', issuer: 'ByteByteGo', date: 'Dec 2025' },
  { name: 'SnowPro Core Certification', issuer: 'Snowflake', date: 'Oct 2025' },
  { name: 'Generative AI with Large Language Models', issuer: 'DeepLearning.AI & AWS', date: 'May 2024' },
  { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', date: '2018' },
];
