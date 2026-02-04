// ================================
// Focusly Lite — JavaScript
// ================================

// ----------------
// Мобільне меню
// ----------------
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// ----------------
// Обробка форми (Formspree)
// ----------------
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        formStatus.textContent = 'Відправка...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = 'Повідомлення надіслано ✅';
                contactForm.reset();
            } else {
                formStatus.textContent = 'Помилка відправки ❌';
            }
        } catch (error) {
            formStatus.textContent = 'Сервер недоступний ⚠️';
        }
    });
}

// ----------------
// Плавна поява header при скролі
// ----------------
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// ----------------
// Консоль привітання
// ----------------
console.log('🎯 Focusly Lite — Фокусуйся на головному!');
