let lastY = 0;
        let preventPullToRefresh = false;

        // Evento touchstart: Capturamos la posición inicial
        window.addEventListener('touchstart', (e) => {
            if (e.touches.length !== 1) return;
            lastY = e.touches[0].clientY;
            preventPullToRefresh = window.scrollY === 0;
        });

        // Evento touchmove: Prevenimos el comportamiento si se desplaza hacia abajo en la parte superior
        window.addEventListener('touchmove', (e) => {
            const currentY = e.touches[0].clientY;
            const upwardScroll = lastY - currentY < 0;
            if (preventPullToRefresh && upwardScroll) {
                e.preventDefault();
            }
        }, { passive: false });


let app = new GamePlayController();
