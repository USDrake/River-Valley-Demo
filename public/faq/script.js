"use strict";
// Replace the sample contact details before launching this concept website.
const SERVICE_EMAIL = "john@rivervalleyplumbing.example";
const menuToggle = document.getElementById("mobileMenuToggle");
const mobileNav = document.getElementById("mobileNav");
function closeMobileMenu(){mobileNav?.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");menuToggle?.setAttribute("aria-label","Open navigation menu");}
menuToggle?.addEventListener("click",()=>{const open=mobileNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");});
mobileNav?.querySelectorAll("a,button").forEach(link=>link.addEventListener("click",closeMobileMenu));
const servicesDropdown = document.querySelector(".nav-dropdown");
const servicesToggle = document.getElementById("servicesToggle");
servicesToggle?.addEventListener("click",()=>{const open=servicesDropdown.classList.toggle("open");servicesToggle.setAttribute("aria-expanded",String(open));});
document.addEventListener("click",event=>{if(servicesDropdown&&!servicesDropdown.contains(event.target)){servicesDropdown.classList.remove("open");servicesToggle?.setAttribute("aria-expanded","false");}});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMobileMenu();});
// Keep the accordion easy to browse by allowing one open answer in each group.
document.querySelectorAll(".faq-group").forEach(group=>{
 group.querySelectorAll(".faq-item").forEach(item=>item.addEventListener("toggle",()=>{
  if(!item.open)return;
  group.querySelectorAll(".faq-item").forEach(other=>{if(other!==item&&other.open)other.open=false;});
 }));
});
const contactDialog=document.getElementById("contactDialog");
const requestDialog=document.getElementById("requestDialog");
const openDialog=(dialog)=>{if(!dialog?.open)dialog?.showModal();};
document.querySelectorAll("[data-open-contact]").forEach(btn=>btn.addEventListener("click",()=>openDialog(contactDialog)));
document.querySelectorAll("[data-open-request]").forEach(btn=>btn.addEventListener("click",()=>{contactDialog?.close();openDialog(requestDialog);}));
document.querySelectorAll("dialog .dialog-close").forEach(btn=>btn.addEventListener("click",()=>btn.closest("dialog")?.close()));
for(const dialog of [contactDialog,requestDialog])dialog?.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});
const requestForm=document.getElementById("requestForm");
requestForm?.addEventListener("submit",event=>{
 event.preventDefault();if(!requestForm.reportValidity())return;
 const data=Object.fromEntries(new FormData(requestForm).entries());
 const subject=encodeURIComponent("Free Estimate / Plumbing Service Request");
 const body=encodeURIComponent(`River Valley Plumbing — Free Estimate Request\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nCity: ${data.city}\n\nIssue: ${data.message||"Not provided"}`);
 document.getElementById("requestStatus").textContent="Your email application should open with your prepared request. Please send the email to complete the request.";
 window.location.href=`mailto:${SERVICE_EMAIL}?subject=${subject}&body=${body}`;
});
