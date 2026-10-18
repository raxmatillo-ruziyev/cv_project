// 1. Sahifa pastga tushganda navbarga xira orqa fon qo'shish (CSS dagi .navbar.scrolled)
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// 2. "Contact me" tugmasi bosilganda sahifa oxiridagi #contact (footer) bo'limiga o'tish
// Eslatma: linklar orasidagi silliq scroll CSS dagi `scroll-behavior: smooth` orqali ishlaydi
const contactBtn = document.querySelector('.nav-btn');
const contactSection = document.querySelector('#contact');

if (contactBtn && contactSection) {
  contactBtn.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
}