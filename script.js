// Initialize Lucide Icons
lucide.createIcons();

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// PRELOADER
// ==========================================
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    gsap.to('.preload-text', {
        scale: 1.2,
        duration: 0.5,
        ease: "power2.out"
    });
    
    setTimeout(() => {
        gsap.to(preloader, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            onComplete: initHeroAnimations
        });
    }, 800);
});

// ==========================================
// HERO ENTRANCE
// ==========================================
function initHeroAnimations() {
    const tl = gsap.timeline();
    
    tl.to('.hero-title span', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
    })
    .to('.reveal-text', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8")
    .from('.slide-right', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.6")
    .from('.slide-left', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.8")
    .from('.slide-up', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.8");
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// MOBILE MENU
// ==========================================
const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
});

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    gsap.to(cursorFollower, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.15,
        ease: "power2.out"
    });
});

// Hover effects for cursor
const clickables = document.querySelectorAll('a, button, .work-card, .expertise-card');
clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// ==========================================
// SCROLL TRIGGER ANIMATIONS
// ==========================================

// About Section
gsap.to('.scroll-reveal-left', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out"
});

gsap.to('.scroll-reveal-right', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    x: 0,
    opacity: 1,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out"
});

// Expertise Cards
gsap.utils.toArray('.expertise-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out"
    });
});

// Stats
gsap.utils.toArray('.stat-item').forEach((stat, i) => {
    gsap.to(stat, {
        scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.15,
        ease: "power3.out"
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    
    ScrollTrigger.create({
        trigger: counter,
        start: 'top 90%',
        onEnter: () => {
            gsap.to(counter, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out"
            });
        },
        once: true
    });
});

// Timeline Items (Alternating fly-in directions with responsive offset)
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    const isOdd = i % 2 !== 0;
    const isMobile = window.innerWidth < 768;
    const offsetX = isMobile ? (isOdd ? 30 : -30) : (isOdd ? 80 : -80);
    
    gsap.fromTo(item, 
        {
            x: offsetX,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out"
        }
    );
});

// Work Cards
gsap.utils.toArray('.work-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out"
    });
});

// Section Headers
const sectionHeaders = document.querySelectorAll('.scroll-reveal-up');
sectionHeaders.forEach(header => {
    gsap.to(header, {
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    });
});

// ==========================================
// PARALLAX EFFECTS
// ==========================================
gsap.utils.toArray('section').forEach(section => {
    const bg = section.querySelector('img');
    if (bg && bg.parentElement.classList.contains('group')) return;
    
    if (bg) {
        gsap.to(bg, {
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            yPercent: 10,
            ease: "none"
        });
    }
});

// Re-initialize Lucide after dynamic content (if any added later)
setTimeout(() => {
    lucide.createIcons();
}, 2000);