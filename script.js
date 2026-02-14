// ===== CONFIGURACIÓN DE MENSAJES PERSONALIZADOS PARA ELLA =====
const loveMessages = [
    {
        title: "💜 PARA MI NOVIA HERMOSA 💜",
        text: `Desde el momento en que llegaste a mi vida, todo cambió para siempre. Tus ojos se convirtieron en mi lugar favorito, tu sonrisa en mi refugio y tu amor en mi razón de ser.

Cada día a tu lado es un regalo que valoro más de lo que las palabras pueden expresar. Eres la persona que ilumina mis mañanas, que alegra mis tardes y que hace que mis noches sean más cálidas.

Este 14 de febrero quiero recordarte lo especial que eres para mí. No solo porque es el día del amor, sino porque cada momento contigo merece ser celebrado.

Eres mi mejor amiga, mi confidente, mi compañera de aventuras y el amor de mi vida. Contigo he aprendido lo que significa amar de verdad, sin condiciones, sin límites, con el alma.

Gracias por existir, por cruzarte en mi camino y por permitirme amarte. Prometo seguir haciéndote feliz cada día, cuidarte, respetarte y amarte con todo mi ser.

TE AMO, HOY Y SIEMPRE. 💜`,
        signature: "Tu novio que te adora"
    }
];

// ===== VARIABLES GLOBALES =====
let currentMessageIndex = 0;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    initStars();
    initParticles();
    initFloatingHearts();
    initHeartParticles();
    initCountdown();
    initHeartInteraction();
    initPhotoCaption();
    initSmoothScroll();

    // ✅ CORREGIDO: Asegurar que el modal empieza oculto
    const modal = document.getElementById('loveMessageContainer');
    modal.style.display = 'none';
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';

    // ✅ CORREGIDO: Prevenir scroll del fondo cuando el modal está abierto
    modal.addEventListener('wheel', (e) => {
        e.preventDefault();
    }, { passive: false });
});

// ===== 1. SISTEMA DE ESTRELLAS =====
function initStars() {
    const starsLayer = document.getElementById('starsLayer');
    const starCount = 400;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 5;
        star.style.animation = `twinkle ${duration}s ease-in-out infinite`;
        star.style.animationDelay = delay + 's';
        star.style.boxShadow = `0 0 ${size * 5}px rgba(159, 122, 255, ${Math.random() * 0.5 + 0.3})`;
        starsLayer.appendChild(star);
    }
}

// ===== 2. SISTEMA DE PARTÍCULAS =====
function initParticles() {
    const particlesLayer = document.getElementById('particlesLayer');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        const colors = ['#9f7aff', '#b794f4', '#d6bcfa', '#e9d8fd'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = `radial-gradient(circle, ${color}, ${color}cc)`;
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        const moveX = (Math.random() - 0.5) * 200;
        particle.style.setProperty('--moveX', moveX + 'px');
        particle.style.animation = `floatParticle ${duration}s linear infinite`;
        particle.style.animationDelay = delay + 's';
        particlesLayer.appendChild(particle);
        setTimeout(() => { particle.remove(); }, duration * 1000);
    }
    
    setInterval(createParticle, 300);
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createParticle(), i * 50);
    }
}

// ===== 3. CORAZONES FLOTANTES =====
function initFloatingHearts() {
    const floatingElements = document.getElementById('floatingElements');
    
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        const hearts = ['💜', '🪻', '💕', '💞', '💖', '💗', '💓'];
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        const size = Math.random() * 20 + 20;
        heart.style.fontSize = size + 'px';
        const duration = Math.random() * 6 + 8;
        const delay = Math.random() * 3;
        const moveX = (Math.random() - 0.5) * 200;
        heart.style.setProperty('--moveX', moveX + 'px');
        heart.style.animation = `floatHeart ${duration}s linear infinite`;
        heart.style.animationDelay = delay + 's';
        heart.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        floatingElements.appendChild(heart);
        setTimeout(() => { heart.remove(); }, duration * 1000);
    }
    
    setInterval(createFloatingHeart, 500);
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createFloatingHeart(), i * 100);
    }
}

// ===== 4. PARTÍCULAS DEL CORAZÓN =====
function initHeartParticles() {
    const heartParticles = document.getElementById('heartParticles');
    
    function createHeartParticle() {
        const particle = document.createElement('div');
        particle.className = 'heart-particle';
        const angle = Math.random() * Math.PI * 2;
        const radius = 80;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 2;
        particle.style.animation = `heartSparkle ${duration}s ease-out infinite`;
        particle.style.animationDelay = delay + 's';
        heartParticles.appendChild(particle);
        setTimeout(() => { particle.remove(); }, (duration + delay) * 1000);
    }
    
    setInterval(createHeartParticle, 200);
}

// ===== 5. CONTADOR REGRESIVO =====
function initCountdown() {
    function updateCountdown() {
        const now = new Date();
        const valentineDay = new Date(2026, 1, 14, 19, 0, 0);
        const diff = valentineDay - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            document.getElementById('countdown').innerHTML = `💜 Faltan: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== 6. INTERACCIÓN DEL CORAZÓN - CORREGIDO ✅ =====
function initHeartInteraction() {
    const heart3D = document.querySelector('.heart-premium');
    
    heart3D.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        createHeartExplosion();
        showMessage(0);
        
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
    
    heart3D.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    heart3D.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// ===== 7. EXPLOSIÓN DE CORAZONES =====
function createHeartExplosion() {
    const count = 40;
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = ['💜', '🪻', '💕', '💖', '💗', '💓', '💞'][Math.floor(Math.random() * 7)];
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 40 + 30) + 'px';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 300 + 200;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance - 100;
            heart.style.setProperty('--moveX', tx + 'px');
            heart.style.animation = `floatHeart 2s ease-out forwards`;
            document.body.appendChild(heart);
            setTimeout(() => { heart.remove(); }, 2000);
        }, i * 30);
    }
}

// ===== 8. MOSTRAR MENSAJE - CORREGIDO ✅ =====
function showMessage(index) {
    const container = document.getElementById('loveMessageContainer');
    const title = document.getElementById('messageTitle');
    const text = document.getElementById('messageText');
    const signature = document.getElementById('messageSignature');
    const roses = document.getElementById('messageRoses');
    
    title.textContent = loveMessages[index].title;
    text.innerHTML = '';
    signature.textContent = loveMessages[index].signature;
    roses.innerHTML = '🌹🌹🌹';
    
    // Mostrar el modal correctamente
    container.style.display = 'flex';
    container.style.opacity = '1';
    container.style.visibility = 'visible';
    
    // Efecto de escritura
    typeWriterEffect(text, loveMessages[index].text);
}

// ===== 9. EFECTO DE ESCRITURA =====
function typeWriterEffect(element, text) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 20);
        }
    }
    
    type();
}

// ===== 10. CERRAR MENSAJE - CORREGIDO ✅ =====
function closeMessage() {
    const container = document.getElementById('loveMessageContainer');
    
    container.style.animation = 'fadeOut 0.3s ease forwards';
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.display = 'none';
        container.style.visibility = 'hidden';
        container.style.opacity = '0';
        container.style.animation = '';
    }, 350);
}

// ===== 11. TEXTO DINÁMICO DE LA FOTO =====
function initPhotoCaption() {
    const captions = [
        "La mujer que ilumina mis días 💜",
        "Mi razón de ser 🪻",
        "Eres mi todo 💕",
        "La dueña de mi corazón 💖",
        "Mi amor eterno 💗",
        "Eres perfecta 💓",
        "Te amo infinito 💞"
    ];
    
    let index = 0;
    const captionElement = document.getElementById('captionText');
    
    function changeCaption() {
        captionElement.style.opacity = '0';
        captionElement.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            index = (index + 1) % captions.length;
            captionElement.textContent = captions[index];
            captionElement.style.opacity = '1';
            captionElement.style.transform = 'translateY(0)';
        }, 500);
    }
    
    captionElement.style.transition = 'all 0.5s ease';
    setInterval(changeCaption, 4000);
}

// ===== 12. SCROLL SUAVE =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== 13. ANIMACIÓN DE ENTRADA =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animación del título
    const titleWords = document.querySelectorAll('.title-word');
    titleWords.forEach((word, index) => {
        word.style.animation = `titlePulse 3s ease-in-out infinite ${index * 0.2}s`;
    });
});