const projects = [
    {
        title: "Engineering Portfolio Template",
        description: "Modern, responsive portfolio platform built for final-year developer students to showcase projects, technical skills, internships, and certifications with strong visual hierarchy and recruiter-focused presentation.",
        link: "https://project-1-nu-nine.vercel.app/",
        category: "Portfolio"
    },
    {
        title: "Engineering Portfolio Template",
        description: "Modern, responsive portfolio platform designed for early-career developers with 1 year of experience to showcase projects, technical skills, internships, and practical learning with a clean and structured presentation.", link: "https://portfolio-nine-sigma-10.vercel.app/",
        category: "Portfolio"
    },
    {
        title: "Engineering Portfolio Template",
        description: "Enterprise-grade portfolio platform crafted for developers with 12+ years of experience to showcase large-scale projects, system architecture expertise, technical leadership, and proven delivery across complex production environments.",
        link: "https://marimuthu-dev-portfolio.vercel.app/",
        category: "Portfolio"
    },
    {
        title: "EduSphere School Portal",
        description: "Responsive school website designed to manage academic information, announcements, admissions, and student engagement through a structured and accessible digital experience.",
        link: "https://school-website-blush-six.vercel.app/",
        category: "Education"
    },
    {
        title: "Streamline SCM",
        description: "Smart supply chain management system that optimizes inventory tracking, vendor coordination, and logistics workflows with real-time operational visibility.",
        link: "https://project-3-scm.vercel.app/",
        category: "Enterprise"
    },
    {
        title: "FlowSync Workflow",
        description: "Dynamic workflow automation platform that enhances team collaboration, task tracking, and operational efficiency through structured process management.",
        link: "https://project-4-wf.vercel.app/",
        category: "Automation"
    },
    {
        title: "MediCore Healthcare System",
        description: "Secure healthcare management platform built to streamline patient records, appointment scheduling, and clinical operations with privacy-first architecture.",
        link: "https://project-5-hc.vercel.app/",
        category: "Healthcare"
    }
];

const apps = [
    {
        title: "EtherNote",
        description: "Secure, cloud-synced note management app designed for professionals to capture ideas, manage tasks, and organize structured documentation with seamless cross-device access.",
        link: "https://ethernote.vercel.app",
        category: "Productivity"
    },
    {
        title: "Layout Lab",
        description: "AI-powered layout assistant designed to generate structured UI compositions, optimize visual hierarchy, and accelerate design workflows with intelligent automation.",
        link: "https://layout-lab-five.vercel.app",
        category: "Artificial Intelligence"
    },
    {
        title: "QRNest",
        description: "Advanced QR management platform for generating, tracking, and analyzing dynamic QR codes with real-time analytics and secure redirection capabilities.",
        link: "https://qr-nest-app.vercel.app",
        category: "Utility"
    }
];

const projectsContainer = document.getElementById("projectsContainer");
const appsContainer = document.getElementById("appsContainer");
const floatingIconsContainer = document.getElementById("floatingIcons");

// Project Icons (SVG paths for abstract shapes)
const abstractShapes = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>', // Layout
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>', // Code
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>', // Layers
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>', // Info/Abstract
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>' // Hexagon
];

function initFloatingIcons() {
    for (let i = 0; i < 15; i++) {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        icon.innerHTML = abstractShapes[Math.floor(Math.random() * abstractShapes.length)];

        const size = Math.random() * 40 + 20;
        icon.style.width = `${size}px`;
        icon.style.height = `${size}px`;
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.top = `${Math.random() * 100}%`;
        icon.style.animationDelay = `${Math.random() * 5}s`;
        icon.style.animationDuration = `${Math.random() * 10 + 10}s`;

        floatingIconsContainer.appendChild(icon);
    }
}

function createCard(item, index) {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="card-glow"></div>
        <div class="card-content">
            <div class="card-tag">${item.category}</div>
            <h2 class="project-title">${item.title}</h2>
            <p class="project-description">${item.description}</p>
            <a href="${item.link}" class="project-btn" target="_blank">
                <span>View ${item.category === 'Portfolio' || item.category === 'Education' || item.category === 'Enterprise' || item.category === 'Automation' || item.category === 'Healthcare' ? 'Project' : 'App'}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
        </div>
    `;

    // Mouse follow glow effect
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });

    return card;
}

function renderSection(data, container) {
    data.forEach((item, index) => {
        container.appendChild(createCard(item, index));
    });
}

initFloatingIcons();
renderSection(projects, projectsContainer);
renderSection(apps, appsContainer);
