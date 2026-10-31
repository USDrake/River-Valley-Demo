'use strict';
// Sample contact info on this concept page. Replace with the real phone/email before launch.
const SERVICE_EMAIL = 'john@rivervalleyplumbing.example';
const menuToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');
function closeMobileMenu(){mobileNav?.classList.remove('open'); menuToggle?.setAttribute('aria-expanded','false'); menuToggle?.setAttribute('aria-label','Open navigation menu');}
menuToggle?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded',String(open)); menuToggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');});
mobileNav?.querySelectorAll('a,button').forEach(link=>link.addEventListener('click',closeMobileMenu));
const servicesDropdown=document.querySelector('.nav-dropdown');
const servicesToggle=document.getElementById('servicesToggle');
servicesToggle?.addEventListener('click',()=>{const open=servicesDropdown.classList.toggle('open'); servicesToggle.setAttribute('aria-expanded',String(open));});
document.addEventListener('click',event=>{if(servicesDropdown&&!servicesDropdown.contains(event.target)){servicesDropdown.classList.remove('open');servicesToggle?.setAttribute('aria-expanded','false');}});
const faqDialog=document.getElementById('faqDialog');
const requestDialog=document.getElementById('requestDialog');
const openDialog=(dialog)=>{if(!dialog?.open) dialog?.showModal();};
document.querySelectorAll('[data-open-faq]').forEach(btn=>btn.addEventListener('click',()=>openDialog(faqDialog)));
document.querySelectorAll('[data-open-request]').forEach(btn=>btn.addEventListener('click',()=>{faqDialog?.close(); openDialog(requestDialog);}));
document.querySelectorAll('dialog .dialog-close').forEach(btn=>btn.addEventListener('click',()=>btn.closest('dialog')?.close()));
for(const dialog of [faqDialog,requestDialog]){dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});}
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMobileMenu();});
const requestForm=document.getElementById('requestForm');
requestForm?.addEventListener('submit',event=>{event.preventDefault();if(!requestForm.reportValidity())return;const data=Object.fromEntries(new FormData(requestForm).entries());const subject=encodeURIComponent('Drain Cleaning Service Request');const body=encodeURIComponent(`River Valley Plumbing — Drain Cleaning Request\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nCity: ${data.city}\n\nDescription: ${data.message||'Not provided'}`);document.getElementById('requestStatus').textContent='Your email application should open with the prepared request. You must send the email to complete your request.';window.location.href=`mailto:${SERVICE_EMAIL}?subject=${subject}&body=${body}`;});
