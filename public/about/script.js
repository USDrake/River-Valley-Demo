'use strict';
// The reference image contains a sample .example email address; replace before publishing.
const CONTACT_EMAIL = 'john@rivervalleyplumbing.example';

const menuButton = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
function closeMobileNav() {
  mobileNav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
}
menuButton?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
mobileNav?.querySelectorAll('a, button').forEach(element => element.addEventListener('click', closeMobileNav));

const dropdown = document.querySelector('.nav-dropdown');
const dropdownTrigger = dropdown?.querySelector('.dropdown-trigger');
dropdownTrigger?.addEventListener('click', () => {
  const opened = dropdown.classList.toggle('open');
  dropdownTrigger.setAttribute('aria-expanded', String(opened));
});
document.addEventListener('click', event => {
  if (dropdown && !dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
    dropdownTrigger?.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('[data-modal]').forEach(trigger => trigger.addEventListener('click', () => {
  const dialog = document.getElementById(trigger.dataset.modal);
  if (dialog && !dialog.open) dialog.showModal();
}));
document.querySelectorAll('[data-close-modal]').forEach(trigger => trigger.addEventListener('click', () => trigger.closest('dialog')?.close()));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
}));
document.querySelectorAll('[data-switch-modal]').forEach(trigger => trigger.addEventListener('click', () => {
  trigger.closest('dialog')?.close();
  document.getElementById(trigger.dataset.switchModal)?.showModal();
}));

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form));
  const message = `River Valley Plumbing service request\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\n\nMessage:\n${data.message || 'No additional details.'}`;
  const subject = encodeURIComponent(`Service Request — ${data.service}`);
  const body = encodeURIComponent(message);
  status.textContent = 'Your mail application will open with your request. Please send the email to complete it.';
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMobileNav();
    dropdown?.classList.remove('open');
    dropdownTrigger?.setAttribute('aria-expanded', 'false');
  }
});
