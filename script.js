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
                copyBtn.innerText = '✓ СКОПИРОВАНО!';
                copyBtn.style.background = '#111';
                copyBtn.style.borderColor = '#ff5555';
                
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.background = '#0a0a0a';
                    copyBtn.style.borderColor = '#2a2a2a';
                }, 1800);
            } catch (err) {
                copyBtn.innerText = '✗ ОШИБКА';
                setTimeout(() => {
                    copyBtn.innerText = 'КОПИРОВАТЬ ЮЗЕРНЕЙМ';
                }, 1000);
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
        card.style.transform = 'translateY(15px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(card);
    });
});
