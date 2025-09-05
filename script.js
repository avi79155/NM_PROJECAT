// A simple module for managing the portfolio.
const portfolio = (() => {
    // DOM Elements
    const projectsContainer = document.querySelector('[data-js-projects]');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('.section');

    // -- Functions --

    // Toggles mobile navigation
    const handleNavbar = () => {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }));
    };

    // Fetches and displays project data
    const loadProjects = async () => {
        try {
            const response = await fetch('data/projects.json');
            const projects = await response.json();
            
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;
                projectsContainer.appendChild(projectCard);
            });
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    // Adds scroll-based animations to sections
    const setupScrollAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        sections.forEach(section => observer.observe(section));
    };

    // Initializes all functions
    const init = () => {
        handleNavbar();
        loadProjects();
        setupScrollAnimations();
    };

    return { init };
})();

// Start the portfolio when the document is ready
document.addEventListener('DOMContentLoaded', portfolio.init);
