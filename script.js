/**
 * Rose Day - Interactive Romantic Webpage
 * JavaScript for animations and interactions
 */

// ============================================
// Floating Rose Petals Animation
// ============================================

class FloatingPetals {
    constructor() {
        this.container = document.getElementById('petalsContainer');
        this.petalCount = 15;
        this.init();
    }

    init() {
        // Create initial petals
        for (let i = 0; i < this.petalCount; i++) {
            setTimeout(() => {
                this.createPetal();
            }, i * 500);
        }

        // Continuously create new petals
        setInterval(() => {
            this.createPetal();
        }, 2000);
    }

    createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal-fall';

        // Random properties for natural variation
        const size = 15 + Math.random() * 15;
        const startX = Math.random() * 100;
        const duration = 8 + Math.random() * 7;
        const delay = Math.random() * 2;
        const rotation = Math.random() * 360;

        // Apply random styles
        petal.style.cssText = `
            width: ${size}px;
            height: ${size * 1.2}px;
            left: ${startX}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            transform: rotate(${rotation}deg);
            opacity: ${0.4 + Math.random() * 0.4};
        `;

        // Vary the color slightly for realism
        const hue = 350 + Math.random() * 20;
        const saturation = 70 + Math.random() * 20;
        const lightness = 45 + Math.random() * 15;
        petal.style.background = `radial-gradient(ellipse at 30% 30%, 
            hsl(${hue}, ${saturation}%, ${lightness + 10}%) 0%, 
            hsl(${hue}, ${saturation}%, ${lightness}%) 70%)`;

        this.container.appendChild(petal);

        // Remove petal after animation
        setTimeout(() => {
            petal.remove();
        }, (duration + delay) * 1000);
    }
}

// ============================================
// Interactive Blooming Rose
// ============================================

class BloomingRose {
    constructor() {
        this.rose = document.getElementById('rose');
        this.bloomMessage = document.getElementById('bloomMessage');
        this.isBloomed = false;
        this.init();
    }

    init() {
        this.rose.addEventListener('click', () => this.toggleBloom());

        // Add subtle idle animation
        this.addIdleAnimation();
    }

    toggleBloom() {
        this.isBloomed = !this.isBloomed;

        if (this.isBloomed) {
            this.bloom();
        } else {
            this.close();
        }
    }

    bloom() {
        this.rose.classList.add('bloomed');

        // Show message with delay
        setTimeout(() => {
            this.bloomMessage.classList.add('visible');
        }, 600);

        // Create sparkle effect
        this.createSparkles();
    }

    close() {
        this.rose.classList.remove('bloomed');
        this.bloomMessage.classList.remove('visible');
    }

    createSparkles() {
        const roseContainer = document.getElementById('roseContainer');
        const sparkleCount = 8;

        for (let i = 0; i < sparkleCount; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('span');
                sparkle.innerHTML = '✨';
                sparkle.style.cssText = `
                    position: absolute;
                    font-size: ${12 + Math.random() * 10}px;
                    left: ${40 + Math.random() * 60}%;
                    top: ${10 + Math.random() * 40}%;
                    animation: sparkle 1s ease-out forwards;
                    pointer-events: none;
                `;
                roseContainer.appendChild(sparkle);

                setTimeout(() => sparkle.remove(), 1000);
            }, i * 100);
        }
    }

    addIdleAnimation() {
        // Subtle swaying animation
        let angle = 0;
        setInterval(() => {
            if (!this.isBloomed) {
                angle += 0.02;
                const sway = Math.sin(angle) * 2;
                this.rose.style.transform = `rotate(${sway}deg)`;
            } else {
                this.rose.style.transform = 'rotate(0deg)';
            }
        }, 50);
    }
}

// ============================================
// Love Button & Overlay
// ============================================

class LoveOverlay {
    constructor() {
        this.button = document.getElementById('loveButton');
        this.overlay = document.getElementById('loveOverlay');
        this.closeButton = document.getElementById('closeOverlay');
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.showOverlay());
        this.closeButton.addEventListener('click', () => this.hideOverlay());

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.hideOverlay();
        });

        // Close on overlay background click
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.hideOverlay();
        });
    }

    showOverlay() {
        this.overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';

        // Create heart burst effect
        this.createHeartBurst();
    }

    hideOverlay() {
        this.overlay.classList.remove('visible');
        document.body.style.overflow = '';
    }

    createHeartBurst() {
        const hearts = ['💕', '💖', '💗', '❤️', '💝', '🌹'];
        const burstCount = 12;

        for (let i = 0; i < burstCount; i++) {
            setTimeout(() => {
                const heart = document.createElement('span');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.cssText = `
                    position: fixed;
                    left: 50%;
                    top: 50%;
                    font-size: ${20 + Math.random() * 20}px;
                    pointer-events: none;
                    z-index: 101;
                    animation: heartBurst 1.5s ease-out forwards;
                    --angle: ${(i / burstCount) * 360}deg;
                    --distance: ${100 + Math.random() * 100}px;
                `;
                document.body.appendChild(heart);

                setTimeout(() => heart.remove(), 1500);
            }, i * 50);
        }
    }
}

// ============================================
// Smooth Scroll Enhancement
// ============================================

class SmoothScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Add intersection observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }
}

// ============================================
// Add Dynamic Styles for Animations
// ============================================

function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 1;
                transform: scale(0) translateY(0);
            }
            50% {
                opacity: 1;
                transform: scale(1.2) translateY(-20px);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) translateY(-40px);
            }
        }

        @keyframes heartBurst {
            0% {
                transform: translate(-50%, -50%) rotate(0deg) translateX(0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--distance));
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Cursor Heart Trail (Optional romantic touch)
// ============================================

class HeartTrail {
    constructor() {
        this.enabled = true;
        this.init();
    }

    init() {
        let lastTime = 0;

        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastTime < 100) return; // Throttle
            lastTime = now;

            this.createHeart(e.clientX, e.clientY);
        });
    }

    createHeart(x, y) {
        const heart = document.createElement('span');
        heart.innerHTML = '♥';
        heart.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            color: rgba(198, 30, 58, 0.6);
            font-size: ${8 + Math.random() * 8}px;
            pointer-events: none;
            z-index: 99;
            animation: heartFloat 1s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1000);
    }
}

// Add heart float animation
function addHeartFloatStyle() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartFloat {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -150%) scale(0.5);
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Music Player
// ============================================

class MusicPlayer {
    constructor() {
        this.audio = document.getElementById('bgMusic');
        this.button = document.getElementById('musicBtn');
        this.isPlaying = false;
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.toggleMusic());

        // Handle audio events
        this.audio.addEventListener('play', () => this.updateUI(true));
        this.audio.addEventListener('pause', () => this.updateUI(false));
        this.audio.addEventListener('ended', () => this.updateUI(false));
    }

    toggleMusic() {
        if (this.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play().catch(err => {
                console.log('Audio playback failed:', err);
            });
        }
    }

    updateUI(playing) {
        this.isPlaying = playing;
        const textSpan = this.button.querySelector('.music-text');

        if (playing) {
            this.button.classList.add('playing');
            textSpan.textContent = 'Pause Music';
        } else {
            this.button.classList.remove('playing');
            textSpan.textContent = 'Play Music';
        }
    }
}

// ============================================
// Initialize Everything
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add dynamic styles first
    addDynamicStyles();
    addHeartFloatStyle();

    // Initialize all components
    new FloatingPetals();
    new BloomingRose();
    new LoveOverlay();
    new SmoothScrollAnimations();
    new HeartTrail();
    new MusicPlayer();

    // Console love message
    console.log('%c💕 Made with love 💕', 'color: #c41e3a; font-size: 20px; font-weight: bold;');
    console.log('%cHappy Rose Day! 🌹', 'color: #e63946; font-size: 16px;');
});
