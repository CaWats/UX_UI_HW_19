const accordionTab = document.getElementsByClassName('accordion-tab');

for (let i=0; i<accordionTab.length;i++) {
    accordionTab[i].addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("active")});
}
