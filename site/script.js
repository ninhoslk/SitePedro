// Countdown Timer
(function () {
  let hours = 2, minutes = 47, seconds = 33;
  const hEl = document.getElementById('cd-h');
  const mEl = document.getElementById('cd-m');
  const sEl = document.getElementById('cd-s');
  const pad = n => n.toString().padStart(2, '0');
  setInterval(() => {
    seconds--;
    if (seconds < 0) { seconds = 59; minutes--; }
    if (minutes < 0) { minutes = 59; hours--; }
    if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
    hEl.textContent = pad(hours);
    mEl.textContent = pad(minutes);
    sEl.textContent = pad(seconds);
  }, 1000);
})();

// Scroll Reveal
(function () {
  const observer = new IntersectionObserver(
    entries => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// Phone Mask
(function () {
  const phoneInput = document.getElementById('phone');
  if (!phoneInput) return;
  phoneInput.addEventListener('input', function () {
    let d = this.value.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 2) this.value = d;
    else if (d.length <= 7) this.value = '(' + d.slice(0, 2) + ') ' + d.slice(2);
    else this.value = '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
  });
})();

// Lead Form
(function () {
  const form = document.getElementById('lead-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const msg = encodeURIComponent('Olá Pedro! Meu nome é ' + name + '. Tenho interesse no treino personalizado!');
    window.open('https://wa.me/5500000000000?text=' + msg, '_blank');
  });
})();
