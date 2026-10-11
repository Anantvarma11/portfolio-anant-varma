import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Overlay = () => {
  useEffect(() => {
    // Fade in text elements as they scroll into view
    const sections = gsap.utils.toArray('.fade-in-text');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    });
  }, []);

  return (
    <div className="scroll-container">
      {/* 1. HERO */}
      <section className="section hero-section" id="hero">
        <div className="fade-in-text glass-card">
          <h1 className="title-display">ANANT VARMA</h1>
          <p className="title-display" style={{ fontSize: '1.2rem', letterSpacing: '0.15em', color: 'var(--accent)', textAlign: 'center', margin: '0 auto' }}>
            AI/ML Engineer | Multi-Agent Systems | Generative AI
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <a href="https://github.com/Anantvarma11" target="_blank" rel="noopener noreferrer">github</a> &bull; 
            <a href="https://www.linkedin.com/in/anant-varma-379a6b287/" target="_blank" rel="noopener noreferrer">linkedin</a> &bull; 
            <a href="mailto:anantvarma.work@gmail.com">anantvarma.work@gmail.com</a>
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            +91 8839713266 • Bhopal, India
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">DOWNLOAD RESUME</a>
          </div>
        </div>
      </section>

      <div style={{ height: '40vh' }}></div>

      {/* 2. ABOUT */}
      <section className="section about-section" id="about">
        <div className="fade-in-text glass-card" style={{ maxWidth: '700px' }}>
          <h2 className="title-display">Professional Summary</h2>
          <p>
            Final year B.Tech Cybersecurity student with 8+ months of industry experience architecting multi-agent AI systems and LLM-powered platforms across two U.S. remote internships.
          </p>
          <p>
            Co-inventor on 6 granted patents and registered designs (India & UK) across AI, IoT, and cybersecurity. Published an open-source Python security toolkit to PyPI. Seeking an AI/ML internship to apply hands-on skills in agentic workflows, RAG pipelines, and production-grade generative AI engineering.
          </p>
        </div>
      </section>

      <div style={{ height: '40vh' }}></div>

      {/* 3. SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="fade-in-text glass-card" style={{ marginLeft: 'auto', maxWidth: '600px' }}>
          <h2 className="title-display">Technical Skills</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'right' }}>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>AI / ML</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>LangGraph, Google ADK, Multi-Agent Systems, RAG, Vector Databases, Embeddings, Prompt Engineering, PyTorch, TensorFlow, NLP, Agentic AI, n8n</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Languages</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Python, JavaScript, TypeScript, SQL, Solidity, C++ (Arduino)</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Frameworks</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>FastAPI, React, Next.js 14/15, Express.js, Dash, Plotly, TailwindCSS</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Databases</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>PostgreSQL, SQLite, Redis, Elasticsearch, Firebase, AstraDB (Vector DB), Prisma ORM</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>DevOps</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Docker, Docker Compose, nginx, Git, GitHub Actions</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Cybersecurity</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Nmap, ClamAV, YARA, Burp Suite, Metasploit, Scapy</p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '40vh' }}></div>

      {/* 4. EXPERIENCE */}
      <section className="section timeline-section" id="experience" style={{ alignItems: 'flex-start', paddingLeft: '5vw' }}>
        <div className="fade-in-text glass-card">
          <h2 className="title-display">Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px' }}>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Founding AI Engineer Intern</h3>
              <h4 style={{ color: 'var(--accent)', fontWeight: 'normal', marginBottom: '1rem' }}>Unimind &bull; Jun 2026 – Aug 2026 &bull; Remote</h4>
              <ul className="elegant-list">
                <li>Founding engineering team member contributing to the development of Arka, an AI-powered call fraud detection platform.</li>
                <li>Building scalable backend services with Python, FastAPI, WebSockets, Redis, PostgreSQL, and Docker.</li>
                <li>Developing AI pipelines using Gemini LLM, Llama, Groq Whisper STT, Sarvam, ElevenLabs TTS, and Qdrant.</li>
                <li>Implementing fraud detection, intent analysis, semantic search, and risk scoring for real-time voice applications.</li>
                <li>Collaborating closely with the founding team to design, build, and iterate on core product features.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>AI/ML Engineer Intern</h3>
              <h4 style={{ color: 'var(--accent)', fontWeight: 'normal', marginBottom: '1rem' }}>DataObserve &bull; Feb 2026 – Apr 2026 &bull; Houston, TX (Remote)</h4>
              <ul className="elegant-list">
                <li>Architected an AI agent ecosystem managing frontend, database, and API layers, reducing ML pipeline failure rate by ~30% through systematic edge-case testing covering 15+ failure scenarios.</li>
                <li>Engineered algorithmic trading logic in a multi-agent LLM/SLM framework; improved signal accuracy by 15% by integrating multi-layer noise filtration with a centralized data source-of-truth.</li>
                <li>Embedded structured user feedback loops into the agent development cycle, reducing iteration cycles by 2x and improving end-to-end reliability across agent handoffs.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Machine Learning Engineer Intern</h3>
              <h4 style={{ color: 'var(--accent)', fontWeight: 'normal', marginBottom: '1rem' }}>exera AI &bull; Dec 2025 – Feb 2026 &bull; West Des Moines, IA (Remote)</h4>
              <ul className="elegant-list">
                <li>Built OlympusOS, an enterprise multi-agent AI chatbot platform orchestrating 7 parallel specialized agents via LangGraph, reducing agent response latency by ~80% through optimized context management.</li>
                <li>Refactored agentic flows and prompt pipelines, cutting API overhead by eliminating redundant LLM calls and improving context window utilization across conversational agents.</li>
                <li>Designed and deployed document ingestion pipelines supporting PDF, DOCX, and structured data extraction, accelerating downstream analysis workflows for internal QA teams.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Cyber security intern</h3>
              <h4 style={{ color: 'var(--accent)', fontWeight: 'normal', marginBottom: '1rem' }}>The Red Users &bull; Oct 2024 – Nov 2024 &bull; Remote</h4>
              <ul className="elegant-list">
                <li>Immersed in cybersecurity focusing on vulnerability testing and threat analysis, actively participating in cyber threat hunting and penetration testing.</li>
                <li>Applied theoretical knowledge in practical settings to enhance technical skills and deepen understanding of the cybersecurity landscape and vulnerability assessments.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '40vh' }}></div>

      {/* EDUCATION & PUBLICATIONS */}
      <section className="section about-section" id="education" style={{ alignItems: 'flex-start', paddingLeft: '5vw' }}>
        <div className="fade-in-text glass-card" style={{ maxWidth: '800px' }}>
          <h2 className="title-display">Education & Publications</h2>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>B.Tech CSE — Cybersecurity Specialization</h3>
            <h4 style={{ color: 'var(--accent)', fontWeight: 'normal' }}>VIT Bhopal University &bull; 2023–2027</h4>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>IEEE Publication (CONIT 2026)</h3>
            <h4 style={{ color: 'var(--accent)', fontWeight: 'normal', marginBottom: '0.5rem' }}>6th International Conference on Intelligent Technologies</h4>
            <p style={{ color: '#ccc' }}>
              Presented paper entitled: <strong>"IoT-Enabled Stress Monitoring Using a Hybrid Ensemble Learning and 1D-CNN for Continuous Health Tracking"</strong>.
            </p>
          </div>
        </div>
      </section>

      <div style={{ height: '40vh' }}></div>

      {/* HACKATHONS */}
      <section className="section skills-section" id="hackathons" style={{ alignItems: 'flex-end', paddingRight: '5vw' }}>
        <div className="fade-in-text glass-card" style={{ maxWidth: '800px', textAlign: 'right' }}>
          <h2 className="title-display">Hackathons & Awards</h2>
          
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Johns Hopkins Health Hackathon</h3>
            <ul className="elegant-list" style={{ textAlign: 'left', direction: 'ltr', display: 'inline-block' }}>
              <li>Built a low-cost IoT-enabled heart rate monitoring solution using PPG sensors and ESP32.</li>
              <li>Integrated real-time alert system with web/mobile dashboards for abnormal readings using Wi-Fi/Bluetooth communication.</li>
              <li>Developed in C++ (Arduino IDE), focusing on cost-efficiency and remote monitoring for resource-limited environments.</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>MP Police Hackathon</h3>
            <ul className="elegant-list" style={{ textAlign: 'left', direction: 'ltr', display: 'inline-block' }}>
              <li>Created a Gamified Traffic Awareness & Reward System using Unity & Firebase.</li>
              <li>Designed interactive traffic scenarios and quizzes, incentivized via points-to-cash rewards using wallet/coupon APIs.</li>
              <li>Enhanced public engagement with traffic safety, making rule-learning interactive and rewarding.</li>
            </ul>
          </div>
        </div>
      </section>

      <div style={{ height: '40vh' }}></div>

      {/* CERTIFICATIONS */}
      <section className="section about-section" id="certifications" style={{ alignItems: 'flex-start', paddingLeft: '5vw' }}>
        <div className="fade-in-text glass-card">
          <h2 className="title-display">Certifications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="https://www.credly.com/badges/89594f5c-ba29-406f-be22-d17fb3f80bac" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>Credly Verified Certification ↗</a>
            <a href="https://coursera.org/share/4656ab70de6950e9dc2c64af820ff646" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>Coursera Verified Certification ↗</a>
            <a href="https://coursera.org/share/a96d1abd30d749283aa6827e2a7fe3cf" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>Coursera Verified Certification ↗</a>
            <a href="https://coursera.org/share/18ecd6d429a9224b8ae5ca4b2ef539fa" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>Coursera Verified Certification ↗</a>
          </div>
        </div>
      </section>

      <div style={{ height: '40vh' }}></div>

      {/* 5. PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="fade-in-text glass-card">
          <h2 className="title-display" style={{ marginBottom: '2rem' }}>Key Projects</h2>
          
          <div className="project-block flagship">
            <h3>Sentinel-X</h3>
            <p style={{ maxWidth: '800px', fontSize: '1.1rem', color: '#ccc' }}>
              Engineered a local-first cybersecurity platform integrating a 6-agent AI system with real-world security tools (Nmap, ClamAV, YARA); packaged and published as an open-source Python library on PyPI. Built a multi-provider LLM layer with streaming, session memory, and provider failover.
            </p>
            <div className="project-stack">Python &bull; LangGraph &bull; Claude/GPT &bull; Nmap &bull; Docker</div>
          </div>

          <div className="project-block flagship">
            <h3>Data-Medic (Ideation)</h3>
            <p style={{ maxWidth: '800px', fontSize: '1.1rem', color: '#ccc' }}>
              An adaptive, LLM-powered data engineering co-pilot orchestrator that autonomously detects pipeline failures and schema drift, diagnosing root causes and deploying fixes via dbt/Airflow.
            </p>
            <div className="project-stack">Python &bull; dbt &bull; Airflow &bull; Neo4j &bull; LLM</div>
          </div>

          <div className="project-block">
            <h3>AI Support Desk</h3>
            <p>End-to-End Enterprise Support Desk System with automated ticket classification, vector retrieval for past resolutions, and multi-agent routing workflows.</p>
            <div className="project-stack">FastAPI &bull; OpenAI &bull; LangChain &bull; Qdrant &bull; React</div>
          </div>

          <div className="project-block">
            <h3>Personalized Mental Health AI (Ideation)</h3>
            <p>Generative AI support system offering emotion-aware empathetic responses, mood tracking, and adaptive privacy-first coping strategies for personalized mental health care.</p>
            <div className="project-stack">Generative AI &bull; LLM &bull; Privacy-First</div>
          </div>

          <div className="project-block">
            <h3>Trading Algorithm App</h3>
            <p>Full-stack algorithmic trading interface combining algorithmic backtesting via Pandas with a modern Next.js frontend dashboard for signal visualization.</p>
            <div className="project-stack">Next.js &bull; Pandas &bull; Finance &bull; Algorithmic Trading</div>
          </div>


          <div className="project-block">
            <h3>Homomorphic Encryption Platform</h3>
            <p>Desktop platform implementing BFV homomorphic encryption for secure computation on encrypted data. Enables computation without decryption — privacy-preserving AI inference with authenticated UI.</p>
            <div className="project-stack">Python &bull; BFV &bull; Desktop App &bull; Cryptography</div>
          </div>

          <div className="project-block">
            <h3>Frontend Flow</h3>
            <p>Open-source AI-powered workflow automation integrating Cursor, n8n, ComfyUI, and local AI models. Enables no-code/low-code AI pipeline construction for non-technical users.</p>
            <div className="project-stack">n8n &bull; ComfyUI &bull; Ollama &bull; JavaScript &bull; React</div>
          </div>

          <div className="project-block">
            <h3>No-Pay Auction Portal (B2B)</h3>
            <p>A Web3 sealed-bid auction platform using Solidity 0.8.20 and a Commit-Reveal scheme as a trust engine, integrated with a Node.js/Express backend indexer and React frontend.</p>
            <div className="project-stack">Solidity &bull; Node.js &bull; Express &bull; React &bull; Web3</div>
          </div>

          <div className="project-block">
            <h3>ChemSphere Nexus</h3>
            <p>A Next.js 15 App Router B2B platform for agile chemical procurement, utilizing Prisma ORM, Auth.js, and Tailwind CSS.</p>
            <div className="project-stack">Next.js 15 &bull; Prisma &bull; PostgreSQL &bull; Tailwind</div>
          </div>


          <div className="project-block">
            <h3>Enterprise Migration Services</h3>
            <p>A production-ready React 18/TypeScript dashboard for Data Warehouse and DB migration strategies, featuring Google Cloud-inspired MUI v5 design.</p>
            <div className="project-stack">React 18 &bull; TypeScript &bull; Vite &bull; Material-UI</div>
          </div>

          <div className="project-block">
            <h3>Advanced Network Scanner</h3>
            <p>Engineered a multithreaded real-time scanning tool using ICMP and TCP SYN protocols with dynamic Dash-based topology visualizations, achieving a 40% reduction in scan latency.</p>
            <div className="project-stack">Python &bull; Scapy &bull; Dash &bull; Plotly &bull; Docker</div>
          </div>

          <div className="project-block">
            <h3>Smart Attendance System</h3>
            <p>An automated face recognition attendance marker (OpenCV/Python) coupled with an intelligent rule-based FAQ chatbot and SQLite data management.</p>
            <div className="project-stack">Python &bull; OpenCV &bull; SQLite &bull; Face Recognition</div>
          </div>

        </div>
      </section>

      <div style={{ height: '40vh' }}></div>

      {/* 6. PATENTS & IP */}
      <section className="section timeline-section" id="patents" style={{ alignItems: 'flex-end', paddingRight: '5vw' }}>
        <div className="fade-in-text glass-card">
          <h2 className="title-display">Patents & Intellectual Property</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Co-inventor on 2 granted patents (India) and 4 registered designs (UK & India):</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', textAlign: 'right' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>An Intelligent Security-Aware 6G-Enabled IoT Architecture Using Machine Learning for Cloud-Based Smart Cities</h4>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Utility Patent (India) &bull; Published Mar 2026 (App No. 202631008090 A)</div>
            </div>
            
            <div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>AI-Based Sustainable Agriculture Models for Disease Prevention and Crop Resilience</h4>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Utility Patent (India) &bull; Published Feb 2026 (App No. 202641008089 A)</div>
            </div>

            <div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>Computing Device for Optimizing Food Supply Chain Logistics (Registered Design)</h4>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Registered Design (India) &bull; Mar 2026 (Design No. 488379-001)</div>
            </div>

            <div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>A Quantum-Based Intelligent Testing Device for Sustainable Agriculture Monitoring and Prediction (Registered Design)</h4>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Registered Design (UK) &bull; Feb 2026 (Design No. 6505161)</div>
            </div>

            <div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>AI-Powered ERP Kiosk for Streamlined Tasks and Decision Support (Registered Design)</h4>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Registered Design (UK) &bull; Jan 2026 (Design No. 6502040)</div>
            </div>

            <div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>AI-Based Smart Forest Fire Detection System (Registered Design)</h4>
              <div style={{ color: 'var(--accent)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Registered Design (UK) &bull; Jan 2026 (Design No. 6502028)</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '40vh' }}></div>

      {/* 7. CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="fade-in-text glass-card">
          <h2 className="title-display">Initialize Connection</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="https://github.com/Anantvarma11" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}>GitHub</a>
            <a href="mailto:anantvarma.work@gmail.com" style={{ fontSize: '1.5rem' }}>Email</a>
            <a href="https://www.linkedin.com/in/anant-varma-379a6b287/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}>LinkedIn</a>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">DOWNLOAD RESUME</a>
          </div>
          <p style={{ marginTop: '4rem', fontSize: '0.8rem', opacity: 0.5 }}>© 2026 Anant Varma. All rights reserved.</p>
        </div>
      </section>

    </div>
  );
};

export default Overlay;
