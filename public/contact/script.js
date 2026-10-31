'use strict';
// Replace the sample details below with production contact information before publishing.
const CONTACT_EMAIL = 'john@rivervalleyplumbing.example';
const toggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
function closeMenu(){mobileNav?.classList.remove('open'); toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open navigation');}
toggle?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
mobileNav?.querySelectorAll('a,button').forEach(item=>item.addEventListener('click',closeMenu));
const dropdown=document.querySelector('.nav-dropdown');const dropdownTrigger=document.querySelector('.service-trigger');
dropdownTrigger?.addEventListener('click',()=>{const open=dropdown.classList.toggle('open');dropdownTrigger.setAttribute('aria-expanded',String(open));});
document.addEventListener('click',e=>{if(dropdown&&!dropdown.contains(e.target)){dropdown.classList.remove('open');dropdownTrigger?.setAttribute('aria-expanded','false');}});
const faq=document.getElementById('faq-dialog');
document.querySelectorAll('[data-open-faq]').forEach(button=>button.addEventListener('click',()=>faq?.showModal()));
document.getElementById('faq-close')?.addEventListener('click',()=>faq?.close());
faq?.addEventListener('click',e=>{if(e.target===faq)faq.close();});
faq?.querySelector('.dialog-request')?.addEventListener('click',()=>faq.close());
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const form=document.getElementById('service-form');const status=document.getElementById('form-status');
form?.addEventListener('submit',e=>{
 e.preventDefault();if(!form.reportValidity())return;
 const data=Object.fromEntries(new FormData(form).entries());
 const subject=encodeURIComponent('Service Request — '+data.service);
 const body=encodeURIComponent(`River Valley Plumbing service request\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nCity: ${data.city}\nService: ${data.service}\n\nMessage: ${data.message||'None provided.'}`);
 status.textContent='Your email application will open with the request. Please send the email to complete your request.';
 window.location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});


// Prefill the existing inquiry form when arriving from a service card that has no standalone page.
const requestedService = new URLSearchParams(window.location.search).get('service');
if (requestedService && form) {
  const select = form.querySelector('select[name="service"]');
  const normalize = text => text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const mapping = {
    'generalplumbing': 'General Plumbing',
    'generalplumbingrepairs': 'General Plumbing',
    'residentialplumbing': 'General Plumbing',
    'specializedplumbing': 'Other / Not Sure',
    'waterheaterservices': 'Water Heater Repair or Replacement',
    'waterheaterrepairorreplacement': 'Water Heater Repair or Replacement',
    'leakdetectionpiperepair': 'Leak Detection'
  };
  const wanted = mapping[normalize(requestedService)] || requestedService;
  if (select) {
    const option = [...select.options].find(x => x.textContent === wanted || x.value === wanted);
    if (option) select.value = option.value;
  }
  // Preserve the service detail even when the dropdown category is more general.
  const message = form.querySelector('textarea[name="message"]');
  if (message && ['Residential Plumbing', 'Specialized Plumbing'].includes(requestedService)) {
    message.value = 'I would like information about ' + requestedService + '. ';
  }
}
