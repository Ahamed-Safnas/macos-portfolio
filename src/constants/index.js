const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Generative AI & LLM Engineering",
    items: ["LangChain", "Hugging Face Transformers", "OpenAI API", "Gemini API", "Llama 2/3", "Mistral", "QLoRA Fine-Tuning", "AI Agents & Agentic Workflows", "Multi-Agent Systems"],
  },
  {
    category: "Retrieval & Knowledge Systems",
    items: ["RAG", "GraphRAG", "FAISS", "Pinecone", "ChromaDB", "pgvector", "Hybrid Search", "MMR Retrieval", "Cross-Encoder Re-Ranking"],
  },
  {
    category: "MLOps & AI Platform Engineering",
    items: ["Docker", "Kubernetes", "DVC", "MLflow", "GitHub Actions", "CI/CD Pipelines", "Model Versioning", "Automated Deployment", "Monitoring & Observability"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS (EC2, ECS, ECR, S3, IAM, Secrets Manager)", "Google Cloud Platform", "Linux"],
  },
  {
    category: "AI Security & Responsible AI",
    items: ["IAM & RBAC", "Secrets Management", "Secure Model Deployment", "LLM Guardrails", "Data Privacy"],
  },
  {
    category: "Backend & System Design",
    items: ["FastAPI", "Flask", "REST APIs", "Microservices Architecture", "Distributed Systems", "Scalable AI Architecture"],
  },
  {
    category: "Data & Databases",
    items: ["PySpark", "ETL Pipelines", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Ahamed-Safnas",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ahamed-safnas-8a968723b",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/mail.svg",
    bg: "#4bcb63",
    link: "mailto:safnas2042ahamed@gmail.com",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
    category: "library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
    category: "memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
    category: "places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
    category: "people",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
    category: "favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
    title: "Library Stacks",
    category: "library",
    favorite: true,
  },
  {
    id: 2,
    img: "/images/gal2.png",
    title: "Memory Lane",
    category: "memories",
  },
  {
    id: 3,
    img: "/images/gal3.png",
    title: "City View",
    category: "places",
    favorite: true,
  },
  {
    id: 4,
    img: "/images/gal4.png",
    title: "Friendship",
    category: "people",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "MultiDocChat",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-30",
      children: [
        {
          id: 1,
          name: "MultiDocChat Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "MultiDocChat is a production-ready conversational RAG system built with FastAPI, LangChain, and FAISS.",
            "Users can upload PDF, DOCX, and TXT files and chat with their content using Groq and Gemini LLMs with session-based memory.",
            "It uses MMR-based retrieval with HuggingFace embeddings and an LCEL pipeline that rewrites follow-up questions as standalone queries for accurate multi-turn conversations.",
            "CI/CD is fully automated with GitHub Actions, deploying a Dockerized image to AWS ECS Fargate via ECR, with secrets managed through AWS Secrets Manager.",
          ],
        },
        {
          id: 2,
          name: "multidocchat.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Ahamed-Safnas/MultiDocChat",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "multidocchat.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "VisaFlow",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] right-20",
      children: [
        {
          id: 1,
          name: "VisaFlow Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "VisaFlow is a production-ready MLOps pipeline for US visa approval prediction, automating the lifecycle from data ingestion to model serving.",
            "AWS S3 and MongoDB integration reduced data retrieval latency and enabled robust model versioning for team collaboration.",
            "The ecosystem is containerized with Docker and exposes RESTful APIs via FastAPI, ensuring 100% environment reproducibility across dev, staging, and production.",
            "Automated MLOps workflows use GitHub Actions and YAML-based configs for seamless CI/CD and continuous model retraining.",
          ],
        },
        {
          id: 2,
          name: "visaflow.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Ahamed-Safnas/VisaFlow",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "visaflow.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Medical Chatbot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Medical Chatbot Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An end-to-end medical chatbot using the Google Gemini API, LangChain, and Pinecone, enabling context-aware, real-time medical query responses via a Flask web app.",
            "A Retrieval-Augmented Generation (RAG) pipeline processes medical PDFs, generates vector embeddings, and performs efficient semantic search with Pinecone.",
            "Backend (Python, Flask, LangChain) and frontend (HTML, CSS, Bootstrap) were both designed with secure environment configs and optimized performance.",
            "Deployed via a CI/CD pipeline using GitHub Actions and AWS (EC2, S3, IAM) for automated testing and deployment.",
          ],
        },
        {
          id: 2,
          name: "medical-chatbot.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Ahamed-Safnas/Medical-Chatbot",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "medical-chatbot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "ML Pipeline with DVC",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-40",
      windowPosition: "top-[45vh] left-16",
      children: [
        {
          id: 1,
          name: "ML Pipeline with DVC Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A fully automated and reproducible ML pipeline for sentiment classification on tweets.",
            "Uses DVC to version data, features, and models, covering every stage from data ingestion to deployment.",
            "Built to demonstrate reproducible experiment tracking and pipeline automation as core MLOps practices.",
          ],
        },
        {
          id: 2,
          name: "ml-pipeline-dvc.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Ahamed-Safnas/ML-Pipeline-with-DVC",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ml-pipeline-dvc.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-4.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Engineer Behind the Models",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I'm Ahamed 👋, an AI/ML Engineer specializing in production-grade LLM systems, RAG pipelines, and MLOps.",
        "I hold a B.Eng. in Computer & Information System Engineering from NED University, and I currently work as an Associate Software Engineer (AI/ML) at Al Tharfo, building end-to-end pipelines with Docker, Kubernetes, MLflow, and CI/CD.",
        "My focus is bridging data science and scalable software engineering — turning research prototypes into deployable, reliable systems using LangChain, FAISS, Pinecone, and cloud platforms like AWS and GCP.",
        "Outside of shipping models, you'll find me fine-tuning LLMs for fun, exploring agentic workflows, or diving into the latest RAG architecture papers 🤖",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };