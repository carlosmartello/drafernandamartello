/* ============================================
   HEADER.JS - Lógica do Header e Navbar
   ============================================ */

class Header {
    constructor() {
        this.header = document.getElementById('header');
        this.menuToggle = document.getElementById('menuToggle');
        this.navbarMenu = document.getElementById('navbarMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        if (!this.header) return;
        
        this.scrollThreshold = 50;
        this.isMenuOpen = false;
        
        this.init();
    }
    
    init() {
        // Evento de scroll
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Toggle do menu mobile
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
        }
        
        // Fechar menu ao clicar em um link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.isMenuOpen) {
                    this.toggleMenu();
                }
            });
        });
        
        // Fechar menu ao redimensionar para desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isMenuOpen) {
                this.toggleMenu();
            }
        });
    }
    
    handleScroll() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > this.scrollThreshold) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
    
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        
        if (this.navbarMenu) {
            this.navbarMenu.classList.toggle('active', this.isMenuOpen);
        }
        
        if (this.menuToggle) {
            this.menuToggle.classList.toggle('active', this.isMenuOpen);
        }
        
        // Prevenir scroll do body quando menu está aberto
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    }
}

// Inicializar header
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new Header();
    });
} else {
    new Header();
}
