const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting) {
        entry.target.classList.add('active');
    } else{
            entry.target.classList.remove('active');
        }
    
    });
});


const hiddenElements = document.querySelectorAll('.hidder');
hiddenElements.forEach((el) => observer.observe(el));


// class="hidder"
// .hidder{
//     opacity: 0;
//     transition:  2s;
//     transform: translateX(-20px);
// }
// .show{
//     opacity: 1;
// }
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

var link =document.querySelectorAll(".activ")
var sec =document.querySelectorAll("section")

function activemenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 <sec[len].offsetTop){}
    link.forEach(ltx => ltx.classList.remove("active"));
    link[len].classList.add("active");

}
activemenu();
window.addEventListener("scroll", activemenu);



window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  