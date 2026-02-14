// Sistema de Partículas Profesional
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 120;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posición aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Tamaño aleatorio
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Color variable (TONOS MORADOS)
        const colors = ['rgba(200, 170, 255, 0.7)', 'rgba(180, 140, 255, 0.7)', 'rgba(220, 190, 255, 0.7)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 ${size * 5}px ${particle.style.background}`;
        
        // Animación con delay aleatorio
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Efecto de ROSAS al mover el mouse
function initSubtleRoses() {
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.95) {
            const rose = document.createElement('div');
            rose.className = 'subtle-heart';
            // Alternar entre rosas y corazones morados
            const icons = ['🌹', '🥀', '💜', '✨'];
            rose.innerHTML = icons[Math.floor(Math.random() * icons.length)];
            rose.style.left = e.pageX - 10 + 'px';
            rose.style.top = e.pageY - 10 + 'px';
            rose.style.position = 'absolute';
            rose.style.animation = 'subtleFloat 3s forwards';
            rose.style.fontSize = '20px';
            document.body.appendChild(rose);
            
            setTimeout(() => {
                rose.remove();
            }, 3000);
        }
    });
}

// Animación de texto con efecto máquina de escribir
function typeWriterEffect() {
    const personalMessage = document.querySelector('.personal-message');
    const originalHTML = personalMessage.innerHTML;
    
    // Guardar las rosas decorativas
    const rosesTop = originalHTML.split('<div class="roses-decoration">')[1];
    const rosesBottom = originalHTML.split('</div>')[3];
    
    // Extraer solo el texto para la animación
    const textContent = "Desde que llegaste a mi vida, todo tiene más color. Tu sonrisa es mi hogar favorito, y tus ojos mi paz. Este 14 de febrero quiero recordarte lo especial que eres y lo mucho que significas para mí. ¿Me concedes el honor de pasar este día contigo, y hacerlo inolvidable?";
    
    personalMessage.innerHTML = `
        <div class="roses-decoration">
            <span class="rose-icon">🌹</span>
            <span class="rose-icon">🥀</span>
            <span class="rose-icon">🌹</span>
        </div>
        <span id="typing-text"></span>
        <div class="roses-decoration">
            <span class="rose-icon">🥀</span>
            <span class="rose-icon">🌹</span>
            <span class="rose-icon">🥀</span>
        </div>
    `;
    
    const typingElement = document.getElementById('typing-text');
    typingElement.style.fontSize = '18px';
    typingElement.style.lineHeight = '1.8';
    typingElement.style.color = 'rgba(255, 255, 255, 0.95)';
    
    let i = 0;
    function typeWriter() {
        if (i < textContent.length) {
            typingElement.innerHTML += textContent.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        } else {
            // Al terminar, agregar el texto resaltado
            typingElement.innerHTML = typingElement.innerHTML.replace(
                '¿Me concedes el honor de pasar este día contigo, y hacerlo inolvidable?',
                '<span class="highlight-text">¿Me concedes el honor de pasar este día contigo, y hacerlo inolvidable?</span>'
            );
        }
    }
    
    setTimeout(typeWriter, 500);
}

// ===== FUNCIÓN PRINCIPAL - CON EXPLOSIÓN DE ROSAS =====
function setupButton() {
    const button = document.getElementById('citaLink');
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 1. INTENTAR REPRODUCIR MÚSICA
        const audio = document.getElementById('bgMusic');
        audio.play().catch(e => console.log('Auto-play bloqueado:', e));
        
        // 2. CREAR EXPLOSIÓN DE ROSAS Y CORAZONES MORADOS
        for (let i = 0; i < 60; i++) {
            setTimeout(() => {
                const element = document.createElement('div');
                // ROSAS y elementos románticos
                const icons = ['🌹', '🥀', '💜', '✨', '🌸', '💕', '🌷', '🪻'];
                element.innerHTML = icons[Math.floor(Math.random() * icons.length)];
                element.style.position = 'fixed';
                element.style.left = '50%';
                element.style.top = '50%';
                element.style.fontSize = (Math.random() * 50 + 30) + 'px';
                element.style.color = ['#c9a9ff', '#b794f4', '#d9b0ff', '#eac7ff'][Math.floor(Math.random() * 4)];
                element.style.textShadow = '0 0 30px rgba(170, 130, 255, 0.9)';
                element.style.zIndex = '9999';
                element.style.pointerEvents = 'none';
                element.style.animation = `floatOut ${Math.random() * 2 + 1.5}s ease-out forwards`;
                
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 300 + 150;
                
                const style = document.createElement('style');
                style.innerHTML = `
                    @keyframes floatOut {
                        0% { transform: translate(-50%, -50%) scale(0.2); opacity: 0; }
                        20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                        100% { transform: translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% - ${Math.abs(Math.sin(angle) * distance)}px)) scale(0.3); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
                document.body.appendChild(element);
                
                setTimeout(() => {
                    element.remove();
                    style.remove();
                }, 3000);
            }, i * 15);
        }
        
        // 3. MOSTRAR MENSAJE ROMÁNTICO CON ROSAS
        const message = document.createElement('div');
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'linear-gradient(145deg, rgba(30, 10, 40, 0.98), rgba(40, 10, 45, 0.98))';
        message.style.backdropFilter = 'blur(30px)';
        message.style.padding = '50px 70px';
        message.style.borderRadius = '40px';
        message.style.border = '2px solid rgba(200, 160, 255, 0.6)';
        message.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(255, 255, 255, 0.1) inset, 0 0 100px rgba(170, 130, 255, 0.7)';
        message.style.zIndex = '10000';
        message.style.textAlign = 'center';
        message.style.animation = 'fadeInModal 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        message.style.maxWidth = '700px';
        
        message.innerHTML = `
            <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
                <span style="font-size: 50px; animation: roseFloat 2s infinite;">🌹</span>
                <span style="font-size: 60px; animation: bounce 2s infinite 0.3s;">💜</span>
                <span style="font-size: 50px; animation: roseFloat 2s infinite 0.6s;">🥀</span>
            </div>
            
            <h2 style="color: white; font-family: 'Playfair Display', serif; font-size: 42px; margin-bottom: 20px; letter-spacing: 2px; text-shadow: 0 0 20px rgba(200,160,255,0.7);">
                ¡Gracias, mi amor!
            </h2>
            
            <p style="color: rgba(255,255,255,0.95); font-size: 22px; margin-bottom: 30px; line-height: 1.8; font-family: 'Playfair Display', serif;">
                Sabía que dirías que sí 💜<br>
                <span style="color: #c9a9ff; font-size: 26px;">Eres la dueña de mi corazón</span><br>
                <br>
                El 14 de febrero será inolvidable,<br>
                porque lo pasaré a tu lado,<br>
                celebrando el amor más bonito del mundo:<br>
                <span style="color: #c9a9ff; font-size: 28px; font-weight: bold;">EL NUESTRO</span>
            </p>
            
            <div style="display: flex; justify-content: center; gap: 15px; margin: 30px 0;">
                <span style="font-size: 35px; animation: roseSpin 3s linear infinite;">🌹</span>
                <span style="font-size: 40px; animation: heartbeat 1.5s infinite;">💜</span>
                <span style="font-size: 35px; animation: roseSpin 3s linear infinite 0.5s;">🥀</span>
            </div>
            
            <div style="display: flex; justify-content: center; align-items: center; gap: 15px; margin-bottom: 20px;">
                <div style="width: 15px; height: 15px; background: #c9a9ff; border-radius: 50%; animation: pulse 1s infinite;"></div>
                <div style="color: white; font-size: 22px; letter-spacing: 2px;">TE AMO</div>
                <div style="width: 15px; height: 15px; background: #c9a9ff; border-radius: 50%; animation: pulse 1s infinite 0.3s;"></div>
            </div>
            
            <div style="width: 250px; height: 4px; background: rgba(255,255,255,0.1); border-radius: 10px; margin: 20px auto; overflow: hidden;">
                <div style="width: 100%; height: 100%; background: linear-gradient(90deg, #9f7aff, #c9a9ff, #b47cff); animation: loading 2s ease;"></div>
            </div>
            
            <p style="color: rgba(255,255,255,0.8); font-size: 18px; margin-top: 20px; font-style: italic;">
                "Eres mi persona favorita, hoy y siempre"<br>
                <span style="display: flex; justify-content: center; gap: 10px; margin-top: 15px;">
                    <span>🌹</span> Con todo mi corazón, [Tu Nombre] <span>🥀</span>
                </span>
            </p>
        `;
        
        document.body.appendChild(message);
        
        // 4. AÑADIR ANIMACIONES
        const animationsStyle = document.createElement('style');
        animationsStyle.innerHTML = `
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
            }
            @keyframes heartbeat {
                0%, 100% { transform: scale(1); }
                30% { transform: scale(1.2); }
                50% { transform: scale(1.1); }
                70% { transform: scale(1.2); }
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.5); opacity: 0.7; }
            }
            @keyframes loading {
                0% { width: 0%; }
                100% { width: 100%; }
            }
            @keyframes roseSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes roseFloat {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-10px) rotate(5deg); }
            }
        `;
        document.head.appendChild(animationsStyle);
        
        // 5. ANIMAR LA SALIDA DE LA PÁGINA
        document.body.classList.add('magic-exit');
        
        // 6. REDIRIGIR DESPUÉS DE 4 SEGUNDOS
        setTimeout(() => {
            window.location.href = 'index.html'; // Cambia esto si quieres
        }, 4000);
    });
}

// Contador elegante
function updateElegantCounter() {
    const now = new Date();
    const valentine = new Date(2026, 1, 14, 19, 0, 0);
    
    const diff = valentine - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const counterElement = document.createElement('div');
        counterElement.className = 'elegant-counter';
        counterElement.innerHTML = `🌹 Faltan ${days}d ${hours}h ${minutes}m ${seconds}s para nuestro día especial 🌹`;
        
        const existingCounter = document.querySelector('.elegant-counter');
        if (existingCounter) {
            existingCounter.remove();
        }
        
        document.body.appendChild(counterElement);
    }
}

// Inicializar todo
window.onload = function() {
    initParticles();
    initSubtleRoses(); // Cambiado de initSubtleHearts a initSubtleRoses
    setupButton();
    typeWriterEffect();
    updateElegantCounter();
    setInterval(updateElegantCounter, 1000);
    document.body.classList.add('loaded');
};