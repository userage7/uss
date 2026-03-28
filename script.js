document.addEventListener('DOMContentLoaded', () => {
    // Кнопка копирования юзернейма
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const username = copyBtn.getAttribute('data-contact') || 'petlyavk';
            const fullUsername = `@${username}`;
            
            try {
                await navigator.clipboard.writeText(fullUsername);
                const originalText = copyBtn.innerText;
                copyBtn.innerText = '✅ скопировано!';
                copyBtn.style.background = '#2a2a2a';
                copyBtn.style.borderColor = '#5eff5e';
                
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.background = '#1e1e1e';
                    copyBtn.style.borderColor = '#3a3a3a';
                }, 1800);
            } catch (err) {
                copyBtn.innerText = '❌ ошибка';
                setTimeout(() => {
                    copyBtn.innerText = 'копировать юзернейм';
                }, 1000);
                console.warn('copy failed', err);
            }
        });
    }

    // Плавная анимация появления элементов
    const cards = document.querySelectorAll('.price-card, .about-card, .contact-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.4s ease';
        observer.observe(card);
    });

    // Дополнительный эффект для ссылки контакта (защита от ботов / просто стиль)
    const contactLink = document.getElementById('contactLink');
    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            console.log('Переход на контакт @petlyavk');
        });
    }

    // Динамический глитч-эффект для заголовка по таймеру (искусственная "помеха")
    let glitchInterval;
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        let activeGlitch = false;
        const triggerRandomGlitch = () => {
            if (!activeGlitch && Math.random() < 0.25) {
                activeGlitch = true;
                glitchElement.style.animation = 'glitch-anim 0.2s infinite';
                setTimeout(() => {
                    glitchElement.style.animation = '';
                    activeGlitch = false;
                }, 200);
            }
        };
        glitchInterval = setInterval(triggerRandomGlitch, 4000);
    }

    // Обработка кнопки создателя - можно дополнительно логировать, но ссылка уже есть
    const creatorBtn = document.querySelector('.creator-btn');
    if (creatorBtn) {
        creatorBtn.addEventListener('click', () => {
            // просто переход на t.me/morozfp
        });
    }
});
