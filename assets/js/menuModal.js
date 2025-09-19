const menuBtn = document.getElementById('menu-btn');
const menuModal = document.getElementById('menu-modal');

menuBtn.addEventListener('click', () => {
    menuModal.classList.toggle('active');
});

// Close modal when link clicked
document.querySelectorAll('.modal a').forEach(link => {
    link.addEventListener('click', () => {
    menuModal.classList.remove('active');
    });
});