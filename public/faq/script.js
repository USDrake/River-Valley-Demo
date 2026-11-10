// Keep the accordion easy to browse by allowing one open answer in each group.
document.querySelectorAll(".faq-group").forEach(group=>{
 group.querySelectorAll(".faq-item").forEach(item=>item.addEventListener("toggle",()=>{
  if(!item.open)return;
  group.querySelectorAll(".faq-item").forEach(other=>{if(other!==item&&other.open)other.open=false;});
 }));
});
