'use strict';
// Edit these placeholders when the business's real phone number and email are available.
const SERVICE_EMAIL = 'john@rivervalleyplumbing.example';
const SERVICE_ENDPOINT = ''; // Optional: an actual POST endpoint for live website submissions.

const menuToggle = document.querySelector('#menuToggle');
const mobileNav = document.querySelector('#mobileNav');
menuToggle?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const dropdown = document.querySelector('.nav-dropdown');
dropdown?.querySelector('.dropdown-trigger')?.addEventListener('click', () => {
  const isOpen = dropdown.classList.toggle('open');
  dropdown.querySelector('.dropdown-trigger').setAttribute('aria-expanded', String(isOpen));
});
document.addEventListener('click', event => {
  if (dropdown && !dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
    dropdown.querySelector('.dropdown-trigger').setAttribute('aria-expanded', 'false');
  }
});

const serviceSelect = document.getElementById('serviceSelect');
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});

document.querySelectorAll('[data-modal]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const dialog = document.getElementById(trigger.dataset.modal);
    dialog?.showModal();
  });
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelectorAll('[data-close-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => dialog.close());
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
});

const form = document.querySelector('#serviceForm');
const formStatus = document.querySelector('#formStatus');
form?.addEventListener('input', event => {
  if (event.target.matches('input, textarea, select')) event.target.removeAttribute('aria-invalid');
});
form?.addEventListener('submit', async event => {
  event.preventDefault();
  formStatus.classList.remove('error');
  formStatus.textContent = '';
  const required = [...form.querySelectorAll('[required]')];
  const invalid = required.find(field => !field.value.trim() || !field.checkValidity());
  if (invalid) {
    invalid.setAttribute('aria-invalid', 'true');
    formStatus.classList.add('error');
    formStatus.textContent = 'Please complete all required fields with valid information.';
    invalid.focus();
    return;
  }
  const data = Object.fromEntries(new FormData(form).entries());
  const message = `New River Valley Plumbing service request\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nCity: ${data.city}\nService needed: ${data.service}\n\nMessage:\n${data.message || 'No additional message.'}`;
  if (SERVICE_ENDPOINT) {
    try {
      const result = await fetch(SERVICE_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!result.ok) throw new Error('Submission failed');
      form.reset();
      formStatus.textContent = 'Thank you! Your service request has been sent.';
    } catch {
      formStatus.classList.add('error');
      formStatus.textContent = 'We could not submit the request. Please call (360) 555-1234.';
    }
    return;
  }
  // With no backend supplied, this safely opens a prefilled message for the visitor to send.
  const subject = encodeURIComponent(`Service Request: ${data.service} — ${data.name}`);
  const body = encodeURIComponent(message);
  const destination = `mailto:${SERVICE_EMAIL}?subject=${subject}&body=${body}`;
  formStatus.textContent = 'Your email application will open with your request. Please send the message there to complete it.';
  window.location.href = destination;
});
