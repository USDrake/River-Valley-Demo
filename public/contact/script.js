(() => {
const CONTACT_EMAIL = 'john@rivervalleyplumbing.example';
const form=document.getElementById('service-form');const status=document.getElementById('form-status');
form?.addEventListener('submit',e=>{
 e.preventDefault();if(!form.reportValidity())return;
 const data=Object.fromEntries(new FormData(form).entries());
 const subject=encodeURIComponent('Service Request — '+data.service);
 const body=encodeURIComponent(`River Valley Plumbing service request\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nCity: ${data.city}\nService: ${data.service}\n\nMessage: ${data.message||'None provided.'}`);
 status.textContent='Your email application will open with the request. Please send the email to complete your request.';
 window.location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

})();

if(new URLSearchParams(location.search).get("service")==="drain-cleaning"){const choice=document.querySelector("#service-form select[name=service]");if(choice)choice.value="Drain Cleaning";}

if(new URLSearchParams(location.search).get("service")==="leak-detection"){const choice=document.querySelector("#service-form select[name=service]");if(choice)choice.value="Leak Detection";}

if(new URLSearchParams(location.search).get("service")==="water-heaters"){const choice=document.querySelector("#service-form select[name=service]");if(choice)choice.value="Water Heater Repair or Replacement";}
