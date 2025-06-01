//========== [NAVBAR FUNCTION] ==========//
let isMenuOpen = false;
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');

    const isOpen = hamburger.classList.contains('active');

    if (!isOpen) {
        hamburger.classList.add('active');
        navLinks.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        closeMenu();
    }
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');

    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

//========== [CLOSE NAVBAR (saat click diluar element)] ==========//
document.addEventListener('click', function (event) {
    if (isMenuOpen && !hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        closeMenu();
    }
});

//========== [SMOOTH SCROLL] ==========//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


//========== [HERO IMAGE EFFECT] ==========//
const tiltElements = document.querySelectorAll('.tilt-effect');

tiltElements.forEach(element => {
    element.addEventListener('mousemove', function (e) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (mouseY / rect.height) * -20;
        const rotateY = (mouseX / rect.width) * 20;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    element.addEventListener('mouseleave', function () {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
});

//========== [TYPING TITLE EFFECT (HERO)] ==========//
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, 1000); // Start setelah 1 detik
}

//========== [INITIAL TYPING EFFECT] ==========//
window.addEventListener('load', function () {
    const titleElement = document.querySelector('.titleHero');
    if (titleElement) {
        const originalText = titleElement.textContent;
        typeWriter(titleElement, originalText, 150);
    }
});

//========== [SCROLL REVEAL] ==========//
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;

    if (scrolled > 50) {
        navbar.style.backgroundColor = 'rgba(15, 15, 15, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 15, 15, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

//========== [NAVBAR FUNCTION] ==========//
function setActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

function handleVibesClick() {
    window.location.href = "src/vibin/justVibes.html";
}

//========== [FADE IN ANIMATION] ==========//
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

//========== [DOM LOADED CONTENT] ==========//
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(el => observer.observe(el));
});

window.addEventListener('scroll', setActiveNavItem);
window.addEventListener('load', setActiveNavItem);


//========== [PROJECT DATA] ==========//
const projects = [
    {
        id: 1,
        name: "TaskFlow",
        description: "Intuitive task management app built with .NET MAUI and PostgreSQL",
        image: "src/images/P1.jpg",
        technologies: ["MAUI", "PostgreSQL", "C#"]
    },
    {
        id: 2,
        name: "EzWare",
        description: "A convenient application for accessing projects",
        image: "src/images/P2.png",
        technologies: ["C++", "ImGui"]
    },
    {
        id: 3,
        name: "SAMP",
        description: "A Multiplayer Mod for Grand Theft Auto: San Andreas",
        image: "src/images/P3.webp",
        technologies: ["Pawn", "React", "CEF"]
    }
];

//========== [DATA SKILLS] ==========//
const skillCategories = {
    backend: [
        { name: "C#", icon: "fab fa-microsoft" },
        { name: "C++", icon: "fas fa-code" },
        { name: "Java", icon: "fab fa-java" },
        { name: ".NET", icon: "fab fa-microsoft" },
        { name: "Node.js", icon: "fab fa-node-js" }
    ],
    frontend: [
        { name: "React", icon: "fab fa-react" },
        { name: "XAML", icon: "fas fa-code" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "Html", icon: "fab fa-html5" },
        { name: "CSS", icon: "fab fa-css3-alt" }
    ],
    database: [
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Mysql", icon: "fas fa-database" }
    ],
    devops: [
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Github", icon: "fab fa-github" }
    ]
};


//========== [PROJECT FUNCTION] ==========//
let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

function createProjectCard(project, index) {
    return `
    <div class="project-card-wrapper ${index === currentIndex ? 'active' : ''}" data-index="${index}">
        <div class="project-card">
            <img src="${project.image}" alt="${project.name}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    </div>
`;
}

function createDot(index) {
    return `<span class="dot ${index === currentIndex ? 'active' : ''}" data-index="${index}"></span>`;
}

function initializeProjects() {
    const motionContainer = document.querySelector('.motion-container');
    const dotIndicators = document.getElementById('dotIndicators');

    // buat project cards
    motionContainer.innerHTML = projects.map((project, index) => createProjectCard(project, index)).join('');

    // buat dots project
    dotIndicators.innerHTML = projects.map((_, index) => createDot(index)).join('');

    // dot click listener
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            setCurrentIndex(index);
        });
    });
}

function setCurrentIndex(index) {
    if (index === currentIndex) return;

    const oldIndex = currentIndex;
    currentIndex = index;

    // update card
    const cards = document.querySelectorAll('.project-card-wrapper');
    cards.forEach((card, i) => {
        card.classList.remove('active', 'exit');
        if (i === currentIndex) {
            card.classList.add('active');
        } else if (i === oldIndex) {
            card.classList.add('exit');
        }
    });

    // update dots
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function handleNext() {
    setCurrentIndex((currentIndex + 1) % projects.length);
}

function handlePrev() {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
}

//========== [SWIPE FUNCTION (project cards)] ==========//
function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
}

function handleTouchMove(e) {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
}

function handleTouchEnd() {
    if (!isDragging) return;

    const deltaX = currentX - startX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
            handlePrev();
        } else {
            handleNext();
        }
    }

    isDragging = false;
}

//========== [DRAG FUNCTION] ==========//
function handleMouseDown(e) {
    startX = e.clientX;
    isDragging = true;
}

function handleMouseMove(e) {
    if (!isDragging) return;
    currentX = e.clientX;
}

function handleMouseUp() {
    if (!isDragging) return;

    const deltaX = currentX - startX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
            handlePrev();
        } else {
            handleNext();
        }
    }

    isDragging = false;
}

//========== [SKILLS FUNCTION] ==========//
function createSkillItem(skill) {
    return `
    <div class="skill-item">
        <i class="${skill.icon} skill-icon"></i>
        <span>${skill.name}</span>
    </div>
`;
}

function createSkillCategory(categoryName, skills) {
    const title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    return `
    <div class="skill-category">
        <h3 class="category-title">${title}</h3>
        <div class="category-skills">
            ${skills.map(skill => createSkillItem(skill)).join('')}
        </div>
    </div>
`;
}

function initializeSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = Object.entries(skillCategories)
        .map(([category, skills]) => createSkillCategory(category, skills))
        .join('');

    // skill scroll animasi
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });
}

//========== [INISIASI DOM LOADER (all elements)] ==========//
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
    initializeSkills();

    // event untuk project swiper
    const projectSwiper = document.getElementById('projectSwiper');

    // Touch events
    projectSwiper.addEventListener('touchstart', handleTouchStart, { passive: true });
    projectSwiper.addEventListener('touchmove', handleTouchMove, { passive: true });
    projectSwiper.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Mouse events
    projectSwiper.addEventListener('mousedown', handleMouseDown);
    projectSwiper.addEventListener('mousemove', handleMouseMove);
    projectSwiper.addEventListener('mouseup', handleMouseUp);
    projectSwiper.addEventListener('mouseleave', handleMouseUp);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            handlePrev();
        } else if (e.key === 'ArrowRight') {
            handleNext();
        }
    });

    // Auto-slide functionality (optional)
    // setInterval(handleNext, 5000);
});

//========== [INISIASI EFEK ANIMASI] ==========//
document.addEventListener('DOMContentLoaded', function () {
    // (all contact items and social links)
    const contactItems = document.querySelectorAll('.contact-item');
    const socialLinks = document.querySelectorAll('.social-link');

    // (add animation class to elements)
    function animateElements(elements, baseDelay = 0) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate');
            }, baseDelay + (index * 100));
        });
    }

    //========== [INTERSECTION FOR ANIMATION] ==========//
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                animateElements(contactItems, 100);

                
                animateElements(socialLinks, 400);

                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    
    const contactContent = document.querySelector('.contact-content');
    if (contactContent) {
        observer.observe(contactContent);
    }

    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    
    socialLinks.forEach(link => {
        link.addEventListener('click', function () {
            const platform = this.classList[1];
            console.log(`Clicked on ${platform} link`);
        });
    });

    //========== [PHONE & EMAIL CLICK EVENT] ==========//
    const phoneLink = document.querySelector('a[href^="tel:"]');
    const emailLink = document.querySelector('a[href^="mailto:"]');

    if (phoneLink) {
        phoneLink.addEventListener('click', function () {
            console.log('Phone number clicked');
        });
    }

    if (emailLink) {
        emailLink.addEventListener('click', function () {
            console.log('Email clicked');
        });
    }
});

function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

//========== [HANDLE RESPONSIVE ADDJUSTMENT] ==========//
window.addEventListener('resize', function () {
    console.log('Window resized');
});


window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});


const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;

            if (el.classList.contains('fade-up')) {
                el.classList.add('fade-up-visible');
            } else if (el.classList.contains('fade-left')) {
                el.classList.add('fade-left-visible');
            } else if (el.classList.contains('fade-right')) {
                el.classList.add('fade-right-visible');
            } else if (el.classList.contains('zoom-in')) {
                el.classList.add('zoom-in-visible');
            } else {
                el.classList.add('visible');
            }

            observerReveal.unobserve(el); // hanya animasi 1x
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .zoom-in, .fade-in-element');
    animatedElements.forEach(el => observerReveal.observe(el));
});
  