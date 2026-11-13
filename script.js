const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  // Replace 91XXXXXXXXXX with your WhatsApp number, including country code.
  const whatsappNumber = '919886891340'; // Primary enquiry number; change if you prefer another number.
  const data = new FormData(event.currentTarget);
  const message = [
    'Hello Excellent Hardware Solution,',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Enquiry type: ${data.get('type')}`,
    `Requirement: ${data.get('message')}`
  ].join('\n');
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
});
