
function openWhatsApp() {
    const phoneNumber = '79224260595'; // номер в международном формате без +
    const message = encodeURIComponent('Здравствуйте!');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}

// Аккордеон - открыть/закрыть
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const faqItem = btn.closest('.faq-item');
    faqItem.classList.toggle('active');
  });
});


