/* ============================================
   MAIN.JS - Inicialização e Lógica Principal
   ============================================ */

// Dados do Carrossel de Antes e Depois.
// Para incluir um novo caso, copie um bloco completo, altere os textos e a imagem.
const carouselItems = [
    { 
        id: 1, 
        title: "Protocolo Martello Lift®", 
        desc: "Reposição de volume e sustentação",
        texto: "Resultado obtido de forma personalizada. Planejamento individual conforme as características anatômicas da paciente.",
        image: "assets/img/antes_depois_1.jpg"
    },
    { 
        id: 2, 
        title: "Protocolo Martello Lift®", 
        desc: "Rejuvenescimento global",
        texto: "Resultado obtido de forma personalizada. Planejamento individual conforme as características anatômicas da paciente.",
        image: "assets/img/antes_depois_2.jpg"
    },
    { 
        id: 3, 
        title: "Protocolo Martello Lift®", 
        desc: "Definição e harmonia",
        texto: "Resultado obtido de forma personalizada. Planejamento individual conforme as características anatômicas da paciente.",
        image: "assets/img/antes_depois_3.jpg"
    },
    { 
        id: 4, 
        title: "Protocolo Martello Lift®", 
        desc: "Restauração de volume",
        texto: "Resultado obtido de forma personalizada. Planejamento individual conforme as características anatômicas da paciente.",
        image: "assets/img/antes_depois_4.jpg"
    },
    { 
        id: 5, 
        title: "Protocolo Martello Lift®", 
        desc: "Sustentação e elevação",
        texto: "Resultado obtido de forma personalizada. Planejamento individual conforme as características anatômicas da paciente.",
        image: "assets/img/antes_depois_5.jpg"
    },
    { 
        id: 6, 
        title: "Protocolo Martello Lift®", 
        desc: "Transformação elegante",
        texto: "Resultado obtido de forma personalizada. Planejamento individual conforme as características anatômicas da paciente.",
        image: "assets/img/antes_depois_6.jpg"
    }
];

// Inicialização quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Dra. Fernanda Martello - Website iniciando...');
    
    initCarousel();
    initIntersectionObserver();
    initSmoothScroll();
    
    console.log('✅ Website carregado com sucesso!');
});

/* ========== CAROUSEL ========== */
function initCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    
    if (!carouselTrack) return;
    
    // Renderizar items do carrossel
    carouselItems.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'carousel-item card card-premium';
        itemElement.innerHTML = `
            <div class="carousel-item-image">
                <img src="${item.image}" alt="${item.title} - Antes e Depois" class="carousel-image">
            </div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <p>${item.texto}</p>
        `;
        carouselTrack.appendChild(itemElement);
    });
    
    // Lógica dos botões de navegação
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    let currentScroll = 0;
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            scrollCarousel(-350);
        });
        
        nextBtn.addEventListener('click', () => {
            scrollCarousel(350);
        });
    }
    
    function scrollCarousel(direction) {
        const carousel = document.getElementById('carousel');
        if (!carousel) return;
        
        currentScroll += direction;
        currentScroll = Math.max(0, currentScroll);
        
        carousel.style.scrollBehavior = 'smooth';
        carousel.scrollLeft = currentScroll;
    }
}

/* ========== INTERSECTION OBSERVER (Animações ao scroll) ========== */
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adicionar classe de animação
                if (entry.target.classList.contains('card')) {
                    entry.target.style.animation = 'fadeUp 0.6s ease-out forwards';
                }
                if (entry.target.classList.contains('section-image')) {
                    entry.target.style.animation = 'fadeInLeft 0.8s ease-out forwards';
                }
                if (entry.target.classList.contains('section-content')) {
                    entry.target.style.animation = 'fadeInRight 0.8s ease-out forwards';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar todos os elementos com animação
    document.querySelectorAll('.card, .section-image, .section-content').forEach(el => {
        observer.observe(el);
    });
}

/* ========== SMOOTH SCROLL PARA LINKS INTERNOS ========== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fechar menu mobile se aberto
                const navbarMenu = document.getElementById('navbarMenu');
                const menuToggle = document.getElementById('menuToggle');
                if (navbarMenu && navbarMenu.classList.contains('active')) {
                    navbarMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
}

/* ========== UTILITIES ========== */

/**
 * Função auxiliar para debounce (evitar múltiplas execuções)
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Função para detectar se o viewport é mobile
 */
function isMobile() {
    return window.innerWidth <= 768;
}

/**
 * Log com estilo
 */
function logInfo(message) {
    console.log(`%c${message}`, 'color: #C8A96A; font-weight: bold;');
}

logInfo('Scripts carregados com sucesso! 🚀');
