class Carousel {
    constructor(selector) {
        this.carousel = document.querySelector(selector);
        this.track = document.getElementById('carouselTrack');
        this.prevBtn = document.getElementById('carouselPrev');
        this.nextBtn = document.getElementById('carouselNext');
        
        if (!this.carousel || !this.track) {
            console.warn('Carrossel não encontrado');
            return;
        }
        
        this.autoPlayTimer = null;
        this.intervaloTime = 5000; // 5 segundos
        this.isMoving = false; // Evita cliques múltiplos travando a animação
        
        this.init();
    }
    
    init() {
        // Habilita os botões removendo a opacidade/disabled antigos
        if (this.prevBtn) {
            this.prevBtn.removeAttribute('disabled');
            this.prevBtn.style.opacity = '1';
            this.prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.scroll(-1);
                this.resetAutoPlay();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.removeAttribute('disabled');
            this.nextBtn.style.opacity = '1';
            this.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.scroll(1);
                this.resetAutoPlay();
            });
        }
        
        // Toque/Swipe em dispositivos móveis
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            this.stopAutoPlay();
        }, { passive: true });
        
        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
            this.startAutoPlay();
        }, { passive: true });
        
        // Arrastar com o mouse (Drag)
        let isDown = false;
        let startX = 0;
        
        this.carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX;
            this.stopAutoPlay();
        });
        
        this.carousel.addEventListener('mouseleave', () => {
            if (isDown) {
                isDown = false;
                this.startAutoPlay();
            }
        });
        
        this.carousel.addEventListener('mouseup', (e) => {
            if (!isDown) return;
            isDown = false;
            const endX = e.pageX;
            this.handleSwipe(startX, endX);
            this.startAutoPlay();
        });

        // Inicia o movimento automático infinito
        this.startAutoPlay();
    }

    // Calcula dinamicamente o passo atual (largura do item + gap do CSS)
    getPasso() {
        const item = this.track.querySelector('.carousel-item');
        if (!item) return 350;
        const itemWidth = item.offsetWidth;
        const gap = parseFloat(getComputedStyle(this.track).gap) || 0;
        return itemWidth + gap;
    }
    
    startAutoPlay() {
        if (this.autoPlayTimer) return;
        this.autoPlayTimer = setInterval(() => {
            this.scroll(1); // Sempre avança para a direita
        }, this.intervaloTime);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
    
    scroll(direction) {
        if (this.isMoving) return; // Bloqueia novos cliques até a animação acabar
        
        const items = this.track.querySelectorAll('.carousel-item');
        if (items.length <= 1) return; // Sem itens suficientes para rodar loop

        this.isMoving = true;
        const passo = this.getPasso();

        // Ativa a transição suave do seu CSS para o movimento ocorrer
        this.track.style.transition = 'transform 0.5s ease-out';

        if (direction === 1) {
            // Avançar: Move o track para a esquerda
            this.track.style.transform = `translateX(-${passo}px)`;

            // Quando a animação terminar, move fisicamente o primeiro item para o final
            setTimeout(() => {
                this.track.style.transition = 'none'; // Desliga a transição temporariamente
                this.track.appendChild(this.track.firstElementChild); // Joga o 1º item pro fim
                this.track.style.transform = 'translateX(0)'; // Reseta a posição do bloco de forma invisível
                this.isMoving = false;
            }, 500); // 500ms bate exatamente com o tempo do seu CSS
        } else {
            // Voltar: Coloca o último item no início antes de animar, mas desloca o bloco para compensar
            this.track.style.transition = 'none';
            this.track.insertBefore(this.track.lastElementChild, this.track.firstElementChild);
            this.track.style.transform = `translateX(-${passo}px)`;

            // Força o navegador a processar a mudança de posição, depois anima voltando para o zero
            setTimeout(() => {
                this.track.style.transition = 'transform 0.5s ease-out';
                this.track.style.transform = 'translateX(0)';
            }, 50);

            setTimeout(() => {
                this.isMoving = false;
            }, 550);
        }
    }
    
    handleSwipe(startX, endX) {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                this.scroll(1); // Próximo
            } else {
                this.scroll(-1); // Anterior
            }
        }
    }
}

// Inicialização segura
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Carousel('#carousel'));
} else {
    new Carousel('#carousel');
}
