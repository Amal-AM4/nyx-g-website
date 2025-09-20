const menuBtn = document.getElementById('menu-btn');
const menuModal = document.getElementById('menu-modal');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    menuModal.classList.toggle('active-modal');
});

closeBtn.addEventListener('click', () => {
    menuModal.classList.remove('active-modal');
});

// Close modal when link clicked
document.querySelectorAll('.modal a').forEach(link => {
    link.addEventListener('click', () => {
        menuModal.classList.remove('active-modal');
    });
});
