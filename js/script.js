// ===== БУРГЕР-МЕНЮ =====
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

if (burgerBtn && navMenu) {
  burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('open');
  });
}

// ===== ПОПАП «ВАШ ФИДБЕК» =====
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose');
const popupForm = document.getElementById('popupForm');
const loginBtn = document.getElementById('loginBtn');

if (loginBtn && overlay && popup) {
  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.add('active');
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

if (popupClose && overlay && popup) {
  popupClose.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
    document.body.style.overflow = '';
  });
}

if (overlay && popup) {
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      popup.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && popup && popup.classList.contains('active')) {
    overlay.classList.remove('active');
    popup.classList.remove('active');
    document.body.style.overflow = '';
  }
});

if (popupForm && overlay && popup) {
  popupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за ваш фидбек!');
    overlay.classList.remove('active');
    popup.classList.remove('active');
    document.body.style.overflow = '';
    popupForm.reset();
  });
}