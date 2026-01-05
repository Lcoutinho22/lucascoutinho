document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initSmoothScroll();
    initScrollReveal();
    initContactForm();
});

function initNavbar () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(!hamburger) return;

    hamburger.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.gap = '20px';
        navLinks.style.backgroundColor = 'var(--color-bg-secondary)';
        navLinks.style.padding = '20px 24px';
        navLinks.style.borderBottom = '1px solid var(--color-border)';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if(window.innerWidth <= 968){
                navLinks.style.display = 'none';
            }
        });
    });
}

function initSmoothScroll(){
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement){
                const offsetTop = targetElement.offsetTop - 20;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.service-card, .project-card, .differential-item');

    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
    });

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const servico = document.getElementById('servico').value;
    const orcamento = document.getElementById('orcamento').value;
    const objetivo = document.getElementById('objetivo').value;

    const servicoTexto = {
    'landing': 'Landing Page de Alta Conversão',
    'card': 'Card Digital Interativo',
    'ads': 'Criativos para Anúncios',
    'ia': 'Imagens com IA',
    'completo': 'Projeto Completo'
    };

    const orcamentoTexto = {
    '100-200': 'R$ 100.00 - R$ 200.00',
    '300-500': 'R$ 300.00 - R$ 500.00',
    '500-1k': 'R$ 500.00 - R$ 1000.00',
    '1k-2k': 'R$ 1000.00 - R$ 2000.00'
    };

    const mensagem = `
*Nova Solicitação de Consultoria*

*Nome:* ${nome}
*E-mail:* ${email}
*Serviço:* ${servicoTexto[servico]}
*Investimento:* ${orcamentoTexto[orcamento]}
*Objetivo:* ${objetivo}
    `.trim();

    const numeroWhatsApp = '5532998079220';
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    window.open(urlWhatsApp, '_blank');

    form.reset();
    });
}

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});