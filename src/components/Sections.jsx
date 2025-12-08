import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Code2 } from 'lucide-react';

export function HeroSection({ text }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 w-full">
        <div className="space-y-6">
          <h1 className="text-7xl font-bold">Hi, I'm <span className="text-blue-600">Praneeth</span><br/>Sai Chunchu.</h1>
          <p className="text-2xl text-blue-600">{text}<span className="animate-pulse">|</span></p>
          <div className="w-20 h-1 bg-black dark:bg-white"></div>
          <p className="text-xl font-bold">Machine Learning & MLOps Engineer,</p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Software Engineer, with knowledge in Python, MLOps,<br/>
            Machine Learning, Cloud, Data Analytics and<br/>
            Production ML Systems.
          </p>
        </div>
        
        <div className="relative flex justify-center">
          <img 
            src="/photo.png" 
            alt="Praneeth Sai Chunchu"
            className="w-96 h-96 object-cover border-8 border-white dark:border-gray-800"
          />
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ scrollToSection }) {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-bold text-center mb-20">About Me.</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-20 h-1 bg-black dark:bg-white"></div>
          <p className="text-2xl leading-relaxed">I'm passionate about <strong>building end-to-end machine learning solutions</strong>, studying and organizing data, and constantly learning about new <strong>technologies</strong></p>
          <div className="grid md:grid-cols-2 gap-8 pt-6">
            <div>
              <h3 className="font-bold text-2xl mb-4">• My Skills Are:</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">Python, PyTorch, TensorFlow, scikit-learn, MLflow, Docker, Kubernetes, AWS, FastAPI, Apache Airflow, and Production ML Systems.</p>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">• My Weaknesses Are:</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">I laugh at my own jokes.</p>
            </div>
          </div>
          <div className="pt-6">
            <button onClick={() => scrollToSection('contact')} className="bg-black dark:bg-white dark:text-black text-white px-10 py-4 rounded-full flex items-center space-x-2 hover:opacity-90 transition">
              <Send className="w-5 h-5" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StrengthsSection() {
  return (
    <section id="strengths" className="py-24 bg-gray-100 dark:bg-gray-900 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-bold text-center mb-20">Strengths</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-10 border-4 border-black dark:border-white transform transition hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-blue-600 mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
                <path d="M8 21h8" strokeWidth="2"/>
                <path d="M12 17v4" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Software Engineering and Machine Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">I am passionate about building robust software and machine learning systems, with expertise in full-stack development, RESTful APIs, and end-to-end ML pipelines. I specialize in LLM fine-tuning, training optimization, and inference acceleration, including custom CUDA kernels for performance-critical workloads. From RAG pipelines to CNN-based computer vision systems, I leverage Python, PyTorch, TensorFlow, Django, Flask, and FastAPI to deliver scalable, high-quality solutions that combine strong software engineering with cutting-edge ML techniques.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-10 border-4 border-black dark:border-white transform transition hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-blue-600 mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 3v18h18" strokeWidth="2"/>
                <path d="M18 17l-4-4-4 4-4-8" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Problem Solving</h3>
            <p className="text-gray-600 dark:text-gray-300">I have a strong background in problem-solving and algorithmic thinking, having solved 420+ problems on LeetCode and 100+ on GeekforGeeks using Python and SQL. My practice spans a wide range of topics, including arrays, strings, linked lists, stacks, queues, trees, graphs, dynamic programming, backtracking, sliding window techniques, hashing, sorting algorithms, and advanced graph algorithms such as Dijkstra and Bellman-Ford. This consistent practice has helped me develop efficient coding skills, optimized solutions, and a deep understanding of data structures and algorithms, forming a solid foundation for tackling both software engineering and data science challenges.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-10 border-4 border-black dark:border-white transform transition hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 bg-blue-600 mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Cloud</h3>
            <p className="text-gray-600 dark:text-gray-300">I enjoy building cloud-native ML and data pipelines on AWS, using services like S3, Lambda, EKS, Glue, and SageMaker. In my previous projects, I implemented scalable ETL workflows, automated ML pipelines, and deployed models as SageMaker Endpoints, while setting up CI/CD with CodePipeline and CodeBuild. Holding AWS Certified Machine Learning Engineer and Cloud Practitioner certifications, I’m passionate and excited about leveraging the cloud to design efficient, secure, and production-ready systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="exp" className="py-24 bg-gray-100 dark:bg-gray-900 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-bold text-center mb-20">Work Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-3xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <span className="text-white font-bold text-3xl">U</span>
            </div>
            <h3 className="text-xl font-bold mb-1">UAB</h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Research Assistant</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Sep 2025 - Present • USA</p>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Architected and developed NeuroStage, an AI-powered neuroimaging platform with modular Python design to streamline brain MRI preprocessing and quality validation.</span></li>
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Integrated multiple LLMs (GPT, Claude, Gemini) for automated DICOM metadata extraction and classification, benchmarking model performance to identify optimal solutions for production deployment with 92% accuracy. </span></li>
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Built intelligent agentic workflows that automatically convert, classify, and validate brain imaging data through multistage pipelines, reducing manual analysis time by 80% while maintaining research-grade quality standards.</span></li>
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Partnered with radiologists and researchers to define AI features, translate clinical needs into technical specs, and deliver intuitive, data-driven user experiences (manuscript in preparation).</span></li>
            </ul>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-3xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <span className="text-white font-bold text-3xl">L</span>
            </div>
            <h3 className="text-xl font-bold mb-1">LifeSizeAgent.ai</h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">AI/ML Intern</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Mar 2025 - Sep 2025 • Remote, USA</p>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Designed and deployed generative AI technologies including multimodal LLM agents using LangChain, implementing autonomous reasoning systems for production applications serving 100K+ daily interactions.</span></li>
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Developed large-scale ML training pipelines using PyTorch with distributed training across GPU clusters, implementing memory-efficient strategies and mixed-precision optimization for sub-200ms inference.</span></li>
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Conducted experimentation with foundation model architectures, implementing post-training techniques including fine-tuning, alignment, and distillation for domain-specific applications.</span></li>
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Built scalable data processing infrastructure with automated ETL pipelines, implementing data curation and quality validation for training generative AI models at scale.</span></li>
            </ul>
          </div>
          
          <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-3xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <span className="text-white font-bold text-3xl">K</span>
            </div>
            <h3 className="text-xl font-bold mb-1">KaarTech Solutions</h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Machine Learning Engineer - ML</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Dec 2022 - Dec 2023 • India</p>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Built distributed training infrastructure for 7B+ parameter models using DeepSpeed ZeRO-3 across 32-GPU clusters, achieving 88% scaling efficiency and 4.2x training speedup.</span></li>
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Optimized models for production through INT8 quantization, 60% pruning, and knowledge distillation, achieving 5.8x inference speedup while serving 50M+ daily predictions with less than 1% accuracy loss.</span></li>
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Developed custom CUDA/Triton kernels for efficient attention mechanisms, enabling 16K context windows with 70% memory reduction and 3.2x throughput in production pipelines. Implemented MLOps platform with automated CI/CD, experiment tracking, and A/B testing for 25+ production models, reducing deployment cycles from 2 weeks to 18 hours.</span></li>
              <li className="flex items-start"><span className="text-blue-600 dark:text-blue-400 mr-2 mt-0.5">▸</span><span>Productionized research models through distributed training optimizations and performance profiling, reducing infrastructure costs by 65% while maintaining model quality and research velocity.</span></li>
            </ul>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="proj" className="py-24 bg-white dark:bg-gray-800 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl font-bold text-center mb-20">Personal Projects.</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="h-64 bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
              <span className="text-white text-2xl font-bold z-10 group-hover:scale-110 transition-transform">MLOps Pipeline</span>
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 opacity-20 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-blue-400 opacity-30 rounded-lg group-hover:rotate-45 transition-transform"></div>
            </div>
            <div className="p-8">
              <span className="text-gray-500 text-sm font-medium">— Project</span>
              <h3 className="text-2xl font-bold my-3 group-hover:text-blue-500 transition-colors">End-to-End MLOps Pipeline</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">Designed and implemented a modular 6-stage MLOps pipeline orchestrated with Apache Airflow, covering end-to-end workflows from data ingestion and ETL to model training and production prediction. Integrated MLflow for comprehensive experiment tracking, automated hyperparameter optimization, model versioning, and registry management. Containerized the entire workflow using Docker and established CI/CD pipelines with GitHub Actions to ensure seamless deployment. Exposed and served trained models through FastAPI microservices, enabling scalable, low-latency inference. Implemented real-time monitoring of data quality, drift detection, and model performance metrics using Prometheus and Grafana dashboards, ensuring reliability and continuous improvement of deployed models.</p>
              <a href="https://github.com/Pranthinks/Turbine_RUL_MLPipeline" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-80 transition group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="h-64 bg-gradient-to-br from-slate-800 via-zinc-700 to-neutral-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
              <span className="text-white text-2xl font-bold z-10 group-hover:scale-110 transition-transform">Attendance System</span>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-cyan-500 opacity-20 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-cyan-400 opacity-30 rounded-full group-hover:scale-125 transition-transform"></div>
            </div>
            <div className="p-8">
              <span className="text-gray-500 text-sm font-medium">— Project</span>
              <h3 className="text-2xl font-bold my-3 group-hover:text-cyan-500 transition-colors">Attendance Management System</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">Engineered a real-time, AI-powered attendance system leveraging Django for backend services, OpenCV with CNN/HOG-based face detection, and 128-D face embeddings for automated biometric check-ins. Containerized the application with Docker and deployed it on AWS EKS using Kubernetes and Terraform for scalable, cloud-native orchestration with Infrastructure as Code (IaC). Designed and automated a CI/CD pipeline to streamline code integration, infrastructure provisioning, and model updates. Built an end-to-end solution including face capture pipelines, secure authentication, and an interactive admin dashboard for real-time attendance analytics and reporting.</p>
    
              <a href="https://github.com/Pranthinks/Attendance_Management_System" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-80 transition group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="h-64 bg-gradient-to-br from-neutral-800 via-stone-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
              <span className="text-white text-2xl font-bold z-10 group-hover:scale-110 transition-transform">Transformer Enc - Dec</span>
              <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-500 opacity-20 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
              <div className="absolute bottom-4 right-4 w-24 h-1 bg-indigo-400 opacity-40 group-hover:w-32 transition-all"></div>
            </div>
            <div className="p-8">
              <span className="text-gray-500 text-sm font-medium">— Project</span>
              <h3 className="text-2xl font-bold my-3 group-hover:text-indigo-500 transition-colors">Transformer-Based Neural Machine Translation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">Built a complete Transformer encoder-decoder architecture from scratch in PyTorch for English-to-German translation, implementing multi-head attention, causal masking, positional encoding, and layer normalization. The 3-layer model with 8 attention heads and ~10M parameters was trained on the Multi30k dataset using mixed precision (FP16), gradient clipping, AdamW optimization, and LR scheduling for efficient convergence. I implemented both greedy decoding and beam search strategies, achieving grammatically correct translations. Additionally, I fine-tuned T5-Small for comparison, analyzing BLEU scores and optimizing decoder KV-cache utilization, which reinforced my understanding of attention mechanisms, inference optimization, and the trade-offs between different decoding approaches.</p>
              
              <a href="https://github.com/Pranthinks/Machine_Translation-Eng-to-German-" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-80 transition group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              </a>
            </div>
          </div>

          {/* Second Row of Projects */}
          <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="h-64 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
              <span className="text-white text-2xl font-bold z-10 group-hover:scale-110 transition-transform">AWS Maintenance</span>
              <div className="absolute top-4 right-4 w-12 h-12 bg-gray-500 opacity-20 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-gray-400 opacity-30 rounded-lg group-hover:rotate-45 transition-transform"></div>
            </div>
            <div className="p-8">
              <span className="text-gray-500 text-sm font-medium">— Project</span>
              <h3 className="text-2xl font-bold my-3 group-hover:text-gray-600 transition-colors">AWS-Powered Predictive Analytics Pipeline for Engine Health Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">I developed a production-grade, cloud-native MLOps pipeline for predicting the Remaining Useful Life (RUL) of turbofan engines on AWS Cloud. The system uses AWS Glue for scalable ETL pipelines, ingesting data from multiple APIs into S3. The six-stage workflow is orchestrated via SageMaker Pipelines, including drift detection, feature engineering with tsfresh, model training, and dynamic inference. Models are deployed as SageMaker Endpoints for real-time predictions, with observability enabled via CloudWatch metrics and alarms. Experiment tracking and model versioning are maintained with DagsHub MLflow, ensuring reproducibility. CI/CD is fully automated using CodePipeline, CodeBuild, and Dockerized ECR images. The architecture is secure, scalable, and optimized for high availability and performance in production environments.</p>
              <a href="https://github.com/Pranthinks/AWS_Turbine_rul_pipeline" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-80 transition group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="h-64 bg-gradient-to-br from-zinc-900 via-neutral-800 to-stone-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
              <span className="text-white text-2xl font-bold z-10 group-hover:scale-110 transition-transform">Multi Agent</span>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-zinc-500 opacity-20 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-zinc-400 opacity-30 rounded-full group-hover:scale-125 transition-transform"></div>
            </div>
            <div className="p-8">
              <span className="text-gray-500 text-sm font-medium">— Project</span>
              <h3 className="text-2xl font-bold my-3 group-hover:text-zinc-600 transition-colors">Multi-Agent AI Music Generation System</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">Developed an autonomous AI music generation system using a multi-agent architecture with LangChain and Google Gemini 2.0. The system features three specialized agents: a Music Agent that generates mood-based AI music using HuggingFace's ACE-Step API, a Billing Agent that manages subscription payments and customer tracking via JSON database, and a Marketing Agent that creates preview samples and posts to social media platforms. I built a Flask web interface for real-time interaction and implemented a scheduler for fully autonomous operation, handling daily music generation, social media marketing, and monthly billing cycles. The system uses LLM-based prompt classification to intelligently route requests to appropriate agents, demonstrating practical multi-agent orchestration and automated business workflows.</p>
 
              <a href="https://github.com/Pranthinks/Multi-Agent-Music-Generation-System" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-80 transition group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="h-64 bg-gradient-to-br from-neutral-800 via-stone-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
              <span className="text-white text-2xl font-bold z-10 group-hover:scale-110 transition-transform">Custom CNN</span>
              <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-500 opacity-20 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
              <div className="absolute bottom-4 right-4 w-24 h-1 bg-indigo-400 opacity-40 group-hover:w-32 transition-all"></div>
            </div>
            <div className="p-8">
              <span className="text-gray-500 text-sm font-medium">— Project</span>
              <h3 className="text-2xl font-bold my-3 group-hover:text-indigo-500 transition-colors">CNN from Scratch</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">Developed a custom CNN in PyTorch with 6 convolutional layers using 3×3 and 5×5 kernels for multi-scale feature extraction, along with batch normalization and dropout (0.8) for stability and regularization, achieving 90% test accuracy in classifying four Telugu cinema actors. Implemented a robust preprocessing pipeline with face detection, alignment, resizing, normalization, and tensor conversion, while optimizing training with Adam optimizer and cross-entropy loss for multi-class classification. The model was deployed as a Flask REST API and integrated with a React frontend to enable real-time inference, resulting in a production-ready, end-to-end full-stack application that seamlessly combines computer vision, deep learning, and web technologies.</p>
              
              <a href="https://github.com/Pranthinks/CNN_Imageclassifier" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:opacity-80 transition group-hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CertificationsSection() {
  const certs = [
    { name: "AWS Certified Machine Learning Engineer", sub: "Associate Level", issuer: "Amazon Web Services", link: "https://www.credly.com/badges/9353b379-062e-496c-b4dd-24b58d46bfd3/public_url", grad: "from-orange-600 to-red-600", badge: "AWS", year: "2024" },
    { name: "Complete MLOps Bootcamp", sub: "Production ML Systems", issuer: "Udemy", link: "https://www.udemy.com/certificate/UC-54241a38-3b9e-4b7e-a8a9-cdae8f63a11d/", grad: "from-purple-600 to-blue-600", badge: "MLOps", year: "2024" },
    { name: "Databricks Certified Data Engineer", sub: "Associate Level", issuer: "Databricks", link: "https://credentials.databricks.com/2e9e3002-f703-426f-a13f-4db9383f77d7#acc.zk9XrA6P", grad: "from-red-600 to-yellow-600", badge: "DATA", year: "2024" },
    { name: "Machine Learning in Production", sub: "By Andrew Ng", issuer: "DeepLearning.AI", link: "https://credentials.databricks.com/2e9e3002-f703-426f-a13f-4db9383f77d7#acc.zk9XrA6P", grad: "from-emerald-600 to-cyan-600", badge: "ML", year: "2024" },
    { name: "AWS Certified Cloud Practitioner", sub: "Foundational", issuer: "Amazon Web Services", link: "https://www.credly.com/badges/b6e01c32-21c4-4bee-b0e8-984017e20140/public_url", grad: "from-yellow-600 to-red-600", badge: "CLOUD", year: "2023" },
    { name: "Python for Computer Vision", sub: "OpenCV & Deep Learning", issuer: "Udemy", link: "https://www.udemy.com/certificate/UC-2e9d7ff2-8465-4b4e-b18c-2f3eb5731020/", grad: "from-blue-600 to-teal-600", badge: "CV", year: "2023" }
  ];

  return (
    <section id="certs" className="py-24 bg-gray-100 dark:bg-gray-900 px-8">
      <style>{`
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(-12deg); } 50% { transform: translateY(-10px) rotate(-12deg); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 5px 15px rgba(0,0,0,0.1); } 50% { box-shadow: 0 10px 30px rgba(0,0,0,0.2); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        
        .cert-card { animation: slideUp 0.7s ease-out both; }
        .cert-card:nth-child(1) { animation-delay: 0.1s; }
        .cert-card:nth-child(2) { animation-delay: 0.2s; }
        .cert-card:nth-child(3) { animation-delay: 0.3s; }
        .cert-card:nth-child(4) { animation-delay: 0.4s; }
        .cert-card:nth-child(5) { animation-delay: 0.5s; }
        .cert-card:nth-child(6) { animation-delay: 0.6s; }
        
        .float-badge { animation: float 3s ease-in-out infinite; }
        
        .cert-card:hover .card-inner { 
          transform: translateY(-10px) scale(1.02); 
          animation: glow 2s ease-in-out infinite;
        }
        
        .cert-card:hover .shimmer-line {
          animation: shimmer 2s linear infinite;
        }
        
        .shimmer-line {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 200% 100%;
        }
        
        .cert-card:hover .badge-glow {
          box-shadow: 0 0 20px currentColor;
        }
        
        .cert-card:hover .arrow-bounce {
          animation: arrowBounce 0.6s ease-in-out infinite;
        }
        
        @keyframes arrowBounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-bold mb-4">Certifications.</h2>
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-16 h-1 bg-blue-600 rounded"></div>
            <div className="w-16 h-1 bg-purple-600 rounded"></div>
            <div className="w-16 h-1 bg-pink-600 rounded"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Industry-recognized credentials in ML, Cloud & Data Engineering</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className="cert-card group block">
              <div className="card-inner bg-white dark:bg-gray-800 rounded-2xl p-6 border-4 border-black dark:border-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                
                {/* Shimmer effect on hover */}
                <div className="shimmer-line absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100"></div>
                
                {/* Top section with issuer and badge */}
                <div className="flex justify-between items-start mb-5">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2 tracking-wide">{c.issuer}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${c.grad} text-white shadow-md`}>
                      {c.year}
                    </span>
                  </div>
                  
                  {/* Floating animated badge */}
                  <div className={`badge-glow w-16 h-16 flex items-center justify-center bg-gradient-to-br ${c.grad} rounded-xl transform -rotate-12 float-badge shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-0`}>
                    <span className="text-white font-black text-sm tracking-tight">{c.badge}</span>
                  </div>
                </div>

                {/* Certificate title */}
                <h3 className="text-xl font-black mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {c.name}
                </h3>
                
                {/* Subtitle */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-semibold">{c.sub}</p>

                {/* Bottom action bar */}
                <div className="flex justify-between items-center pt-4 border-t-2 border-gray-300 dark:border-gray-700">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">View Credential</span>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${c.grad} flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg`}>
                    <svg className="arrow-bounce w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Corner accent gradient */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${c.grad} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`}></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [formStatus, setFormStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xovlowan', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-900 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl transform rotate-45"></div>
          <h2 className="text-6xl font-bold">Contact Me.</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Feel free to reach out and send me a message anytime.</p>
          <div className="w-32 h-1 bg-blue-600"></div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl">
              <Mail className="w-6 h-6 text-blue-600" />
              <span>praneethsaichunchu@gmail.com</span>
            </div>
            <a href="https://www.linkedin.com/in/contactpraneeth/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
              <Linkedin className="w-6 h-6 text-blue-600" />
              <span>Professional Network</span>
            </a>
            <a href="https://github.com/Pranthinks" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
              <Github className="w-6 h-6 text-blue-600" />
              <span>Code Repository</span>
            </a>
            <a href="https://leetcode.com/u/Praneeth_Sai/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
  <Code2 className="w-6 h-6 text-blue-600" />
  <span>Leetcode Profile</span>
</a>
          </div>
        </div>
        
        <div className="bg-black p-8 rounded-2xl">
          <h3 className="text-white text-2xl font-bold mb-6">Send Me A Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input 
                name="name" 
                placeholder="First Name" 
                required
                className="bg-transparent border border-gray-600 text-white p-4 rounded-xl placeholder-gray-400 focus:border-blue-600 focus:outline-none" 
              />
              <input 
                name="email" 
                type="email"
                placeholder="Email" 
                required
                className="bg-transparent border border-gray-600 text-white p-4 rounded-xl placeholder-gray-400 focus:border-blue-600 focus:outline-none" 
              />
            </div>
            <input 
              name="subject" 
              placeholder="Subject" 
              required
              className="w-full bg-transparent border border-gray-600 text-white p-4 rounded-xl placeholder-gray-400 focus:border-blue-600 focus:outline-none" 
            />
            <textarea 
              name="message" 
              placeholder="Message" 
              rows="5" 
              required
              className="w-full bg-transparent border border-gray-600 text-white p-4 rounded-xl placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            ></textarea>
            
            {formStatus === 'success' && (
              <div className="bg-green-600 text-white p-3 rounded-xl text-center">
                Message sent successfully!
              </div>
            )}
            {formStatus === 'error' && (
              <div className="bg-red-600 text-white p-3 rounded-xl text-center">
                Failed to send message. Please try again.
              </div>
            )}
            
            <button 
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition flex items-center space-x-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer({ scrollToSection }) {
  const [visitorCount, setVisitorCount] = React.useState('---');

  React.useEffect(() => {
    // Fetch and increment visitor count with new counter key
    fetch('https://api.counterapi.dev/v1/pranthinks-portfolio-react/visits/up')
      .then(response => response.json())
      .then(data => {
        setVisitorCount(data.count);
      })
      .catch(error => {
        console.error('Error fetching visitor count:', error);
        setVisitorCount('---');
      });
  }, []);

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">© 2025 Praneeth Sai Chunchu. All rights reserved.</p>
          <div className="flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About</button>
            <button onClick={() => scrollToSection('proj')} className="hover:text-blue-400 transition">Projects</button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
            {visitorCount} visitors
          </p>
        </div>
      </div>
    </footer>
  );
}