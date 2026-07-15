/* ============================================
   FAQ.JS - Lógica do Acordeão de FAQ
   ============================================ */

class FAQ {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        
        if (this.faqItems.length === 0) {
            console.warn('Nenhum item FAQ encontrado');
            return;
        }
        
        this.init();
    }
    
    init() {
        this.faqItems.forEach((item, index) => {
            const toggle = item.querySelector('.faq-toggle');
            const content = item.querySelector('.faq-content');
            
            if (!toggle || !content) return;
            
            // Event listener para o toggle
            toggle.addEventListener('click', () => {
                this.toggleItem(item, index);
            });
            
            // Permitir abrir com Enter/Space
            toggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleItem(item, index);
                }
            });
        });
    }
    
    toggleItem(item, index) {
        const isActive = item.classList.contains('active');
        
        if (isActive) {
            // Fechar
            this.closeItem(item);
        } else {
            // Fechar todos os outros
            this.faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    this.closeItem(otherItem);
                }
            });
            
            // Abrir este
            this.openItem(item);
        }
    }
    
    openItem(item) {
        item.classList.add('active');
        const content = item.querySelector('.faq-content');
        
        if (content) {
            // Forçar reflow para ativar a animação
            content.style.maxHeight = content.scrollHeight + 'px';
            
            // Atualizar altura se o conteúdo mudar
            const observer = new MutationObserver(() => {
                content.style.maxHeight = content.scrollHeight + 'px';
            });
            
            observer.observe(content, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }
    }
    
    closeItem(item) {
        item.classList.remove('active');
        const content = item.querySelector('.faq-content');
        
        if (content) {
            content.style.maxHeight = '0px';
        }
    }
}

// Inicializar FAQ
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new FAQ();
    });
} else {
    new FAQ();
}
