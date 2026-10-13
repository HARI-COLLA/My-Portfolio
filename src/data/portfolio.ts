/**
 * Central portfolio content.
 * Edit this file to update text, links, skills, projects and experience.
 */

export const profile = {
  name: "Mallangi Harinath Reddy",
  shortName: "Harinath",
  monogram: "HR",
  headline: "Engineering Creative Solutions",
  title: "BTech Engineering Student | Cloud Computing Enthusiast | AI Enthusiast",
  phone: "+91 9398199717",
  email: "mallangiharinathreddy727@gmail.com",
  linkedin: "https://www.linkedin.com/in/hari-mallangi-0085a1300/",
  github: "https://github.com/HARI-COLLA",
  loopcodeUrl: "https://loopcode.heksync.in/",
  resumeUrl: "/Harinath_Mallangi_DevOps.pdf",
  objective:
    "Passionate about building innovative technology solutions that make a difference.",
  workPreferences: "Open to full-time opportunities anywhere in India (On-site, Hybrid, or Remote).",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "LoopCode", href: "#loopcode" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  introLabel: "HELLO, I'M",
  name: profile.name,
  taglineHighlight: "Engineering",
  taglineRest: "Creative Solutions",
  roleLine: "BTech Engineering Student | Cloud Computing Enthusiast | AI Enthusiast",
  summary:
    "Passionate about building innovative technology solutions that make a difference",
  stats: [
    { value: "10+", label: "Projects" },
    { value: "Fresher", label: "Years Experience" },
    { value: "100%", label: "Dedication" },
  ],
  techPills: ["Cloud Computing", "DevOps", "AI & LLMs", "Software Engineering"],
};

export const about = {
  heading: "About Me",
  subtitle: "Driven by curiosity, continuous learning, and engineering excellence.",
  headlinePrefix: "Building Modern Solutions with",
  headlineHighlight: "Engineering Precision",
  paragraphs: [
    "I'm a passionate B.Tech Engineering student with a deep love for technology, cloud computing, and intelligent systems. My journey in engineering is driven by curiosity and the desire to build practical solutions that create a meaningful, positive impact.",
    "Beyond coursework and internships, you'll find me exploring modern architectures, automating workflows, and collaborating on live products like LoopCode — projects that challenge my problem-solving mindset and push the boundaries of what's possible.",
    "I believe in the power of technology to turn ambitious ideas into dependable reality, and I'm committed to continuous learning, adaptability, and growth in this ever-evolving field.",
  ],
  highlights: [
    {
      title: "B.Tech Engineering",
      description: "Pursuing excellence in Computer Science & Cloud Computing with a focus on innovative problem-solving",
      icon: "GraduationCap" as const,
    },
    {
      title: "Problem Solver",
      description: "Passionate about designing efficient, reliable solutions to complex technical challenges",
      icon: "Target" as const,
    },
    {
      title: "Tech Enthusiast",
      description: "Always exploring cutting-edge cloud, DevOps, and AI technologies and their real-world applications",
      icon: "Heart" as const,
    },
    {
      title: "Quality Focused",
      description: "Committed to delivering high-quality, scalable, and maintainable engineering solutions",
      icon: "Award" as const,
    },
  ],
};

export type SkillCategory = "all" | "cloud" | "devops" | "observability" | "dev" | "ai";

export type Skill = {
  label: string;
  /** SVG file in /public/skills, when a real logo exists */
  icon?: string;
  /** Short text shown in a badge for abstract concepts */
  badge?: string;
  /** Brand accent color — used for badges and SVG colorization */
  color?: string;
  category: "cloud" | "devops" | "observability" | "dev" | "ai";
};

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "all", label: "All Technologies" },
  { id: "cloud", label: "Cloud & Infra" },
  { id: "devops", label: "DevOps & CI/CD" },
  { id: "observability", label: "Observability" },
  { id: "dev", label: "Languages & DBs" },
  { id: "ai", label: "AI & ML" },
];

export const skills: Skill[] = [
  // Cloud & Infrastructure
  { label: "AWS", icon: "amazonwebservices", color: "#FF9900", category: "cloud" },
  { label: "Terraform", icon: "terraform", color: "#844FBA", category: "cloud" },
  { label: "Linux", icon: "linux", color: "#FCC624", category: "cloud" },
  // Containers & Orchestration
  { label: "Docker", icon: "docker", color: "#2496ED", category: "devops" },
  { label: "Kubernetes", icon: "kubernetes", color: "#326CE5", category: "devops" },
  // CI/CD & Version Control
  { label: "Git", icon: "git", color: "#F05032", category: "devops" },
  { label: "GitHub", icon: "github", color: "#ffffff", category: "devops" },
  { label: "GitHub Actions", icon: "githubactions", color: "#2088FF", category: "devops" },
  { label: "Jenkins", icon: "jenkins", color: "#D24939", category: "devops" },
  { label: "Argo CD", icon: "argo", color: "#EF7B4D", category: "devops" },
  // Monitoring
  { label: "Prometheus", icon: "prometheus", color: "#E6522C", category: "observability" },
  { label: "Grafana", icon: "grafana", color: "#F46800", category: "observability" },
  { label: "CloudWatch", icon: "amazoncloudwatch", color: "#FF9900", category: "observability" },
  // Programming & Databases
  { label: "Python", icon: "python", color: "#3776AB", category: "dev" },
  { label: "SQL", badge: "SQL", color: "#60A5FA", category: "dev" },
  { label: "MySQL", icon: "mysql", color: "#4479A1", category: "dev" },
  { label: "MongoDB", icon: "mongodb", color: "#47A248", category: "dev" },
  { label: "React", icon: "react", color: "#61DAFB", category: "dev" },
  { label: "Node.js", icon: "nodedotjs", color: "#339933", category: "dev" },
  // AI & Machine Learning
  { label: "Machine Learning", badge: "ML", color: "#A78BFA", category: "ai" },
  { label: "Deep Learning", badge: "DL", color: "#A78BFA", category: "ai" },
  { label: "LLMs", badge: "LLM", color: "#C084FC", category: "ai" },
  { label: "LangChain", icon: "langchain", color: "#1C3C3C", category: "ai" },
  { label: "RAG", badge: "RAG", color: "#C084FC", category: "ai" },
  { label: "AI Agents", badge: "AI", color: "#C084FC", category: "ai" },
  { label: "Vector Databases", badge: "Vec", color: "#818CF8", category: "ai" },
  { label: "Embeddings", badge: "Emb", color: "#818CF8", category: "ai" },
];

export const loopcode = {
  heading: "Featured Product",
  name: "LoopCode — AI Coding Agent",
  status: "Live Product",
  url: profile.loopcodeUrl,
  description: [
    "LoopCode is a live AI-powered coding application that I'm building with my teammates. Inspired by the evolution of agentic development tools such as Google Antigravity and Amazon Kiro, our goal is to make AI-assisted software development more accessible, productive, and cost-effective.",
    "Our vision is to help developers move from ideas to implementation while keeping code quality, developer control, and affordability in focus.",
  ],
  features: [
    {
      title: "Codebase Understanding",
      description: "Help developers explore existing code and understand project context.",
      icon: "FolderSearch" as const,
    },
    {
      title: "AI-Assisted Development",
      description: "Support software development workflows, including coding and refactoring.",
      icon: "Code2" as const,
    },
    {
      title: "Planning and Implementation",
      description: "Help translate development requests into actionable implementation steps.",
      icon: "ListChecks" as const,
    },
    {
      title: "Cost-Conscious AI",
      description: "Aim to make high-quality AI-assisted development more affordable.",
      icon: "Coins" as const,
    },
  ],
  contribution:
    "I'm building LoopCode alongside my teammates and contributing to our shared product vision.",
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  keyPoints: string[];
  /** Identifier used to pick the architecture visual */
  visual: "pipeline" | "serverless" | "eks";
  /** Only set when a verified repository/demo URL is available */
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Microservices DevOps Pipeline",
    description:
      "Designed an automated deployment workflow for a Java microservice and provisioned Kubernetes infrastructure on AWS.",
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
      "Route 53",
    ],
    keyPoints: [
      "Provisioned an Amazon EKS cluster inside a VPC using Terraform.",
      "Built a CI/CD workflow using GitHub Actions and Argo CD.",
      "Used Docker to package applications into consistent container images.",
      "Applied Kubernetes orchestration as part of a microservices architecture.",
      "Configured load-balancer access and Route 53 DNS.",
      "Used Infrastructure as Code to manage cloud resources consistently.",
    ],
    visual: "pipeline",
  },
  {
    title: "Serverless Inventory Management System",
    description:
      "Designed a serverless inventory application with event-driven notifications and an authenticated frontend.",
    technologies: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "DynamoDB Streams",
      "SNS",
      "Cognito",
      "Amplify",
      "React",
    ],
    keyPoints: [
      "Developed a backend using AWS Lambda, API Gateway, and DynamoDB.",
      "Connected DynamoDB Streams to Lambda triggers to respond to inventory changes.",
      "Automated low-stock notifications through Amazon SNS.",
      "Deployed a React dashboard using AWS Amplify.",
      "Integrated Amazon Cognito authentication and role-based authorization.",
    ],
    visual: "serverless",
  },
  {
    title: "Kubernetes End-to-End Deployment on Amazon EKS",
    description:
      "Deployed a containerized 2048 game on Kubernetes and configured external access through AWS load balancing.",
    technologies: [
      "Docker",
      "Kubernetes",
      "Amazon EKS",
      "eksctl",
      "ALB Ingress",
      "IAM OIDC",
      "AWS Fargate",
    ],
    keyPoints: [
      "Created an EKS cluster using eksctl inside a custom VPC.",
      "Deployed workloads using Kubernetes Deployments, Services, and Namespaces.",
      "Configured the AWS Load Balancer Controller and ALB Ingress for external access.",
      "Integrated IAM OIDC for workload identity configuration.",
      "Used AWS Fargate to run workloads without managing EC2 worker nodes.",
    ],
    visual: "eks",
  },
];

export const experience = [
  {
    company: "Namaah Pvt Ltd",
    role: "DevOps Engineer Intern",
    dates: "March 2026 – September 2026",
    responsibilities: [
      "Built and maintained GitHub Actions pipelines to automate application build, test, and deployment workflows.",
      "Managed AWS EC2 application servers, including instance setup, configuration, and Security Group access.",
      "Packaged applications with Docker and deployed workloads on Amazon EKS using Kubernetes.",
      "Used Amazon CloudWatch logs, metrics, and alerts to investigate failures, perform root-cause analysis, and support application reliability.",
    ],
    technologies: ["AWS EC2", "Amazon EKS", "Docker", "Kubernetes", "GitHub Actions", "CloudWatch"],
  },
  {
    company: "F13 Technologies",
    role: "AWS Cloud Intern",
    dates: "October 2025 – January 2026",
    responsibilities: [
      "Managed AWS EC2, S3, RDS, VPC, and Security Groups supporting application environments.",
      "Built serverless workflows with AWS Lambda and API Gateway to automate backend operations.",
      "Applied S3 lifecycle policies to support storage cost optimization.",
      "Used IAM access controls to strengthen cloud resource security.",
    ],
    technologies: ["AWS EC2", "S3", "RDS", "VPC", "IAM", "Lambda", "API Gateway"],
  },
  {
    company: "Infosys Springboard",
    role: "Machine Learning Intern",
    dates: "October 2024 – December 2024",
    responsibilities: [
      "Built unsupervised anomaly-detection models using deep-learning autoencoders on healthcare provider data for fraud detection.",
      "Performed exploratory data analysis, preprocessing, and feature engineering.",
      "Documented findings for business stakeholders.",
    ],
    technologies: ["Machine Learning", "Deep Learning", "Anomaly Detection", "Data Preparation"],
  },
];

export const education = {
  degree: "B.Tech in Computer Science (Cloud Computing)",
  university: "Alliance University",
  graduationYear: "2026",
  cgpa: "8.2/10",
};

export const certification = {
  name: "AWS Cloud Practitioner Essentials",
  provider: "AWS Training",
  date: "November 2025",
};

export const achievement = {
  title: "Top 3 Finalist",
  event: "Code Sangram Hackathon",
};

export const learningFocus = {
  heading: "Currently Exploring",
  description:
    "I'm continuing to expand my knowledge of AI engineering and intelligent application development while building on my cloud and DevOps foundation.",
  areas: [
    {
      title: "Machine Learning & Deep Learning",
      description: "Model building, training, evaluation, and experimentation.",
      icon: "Brain" as const,
    },
    {
      title: "Large Language Models",
      description: "Tokenization, embeddings, transformers, and text generation.",
      icon: "MessagesSquare" as const,
    },
    {
      title: "Retrieval-Augmented Generation",
      description: "Retrieval pipelines, vector search, and grounded LLM responses.",
      icon: "DatabaseZap" as const,
    },
    {
      title: "AI Agents",
      description: "Tool calling, planning, and multi-step task execution.",
      icon: "Bot" as const,
    },
  ],
  closing:
    "My long-term goal is to combine cloud engineering with AI engineering to build, deploy, and operate reliable intelligent systems.",
};

export const contact = {
  heading: "Let's Build Something Great",
  description:
    "Open to full-time engineering opportunities across India, project collaborations, and building innovative technology solutions.",
};
