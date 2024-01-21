var typed = new Typed(".typing",{
    strings:["  Branding Services","Website Services"],
    typeSpeed:30,
    backSpeed:60,
    loop:true
})
var typed = new Typed(".typingg",{
    strings:["Why us ? We Dont jusst Build Websites,We Develop sales machine for your brand!" ],
    typeSpeed:60,
    backSpeed:10,
    loop:false
})


const handleOnMouseMove = e => {
    const {
        currentTarget: target}
        = e;
        const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }
    for(const card of document.querySelectorAll(".container, .service-card")){
        card.onmousemove = e => handleOnMouseMove(e);
    }  
    
    
    const faqs = document.querySelectorAll(".action");
    
    faqs.forEach((action) =>{
        action.addEventListener("click", () =>{
            action.classList.toggle("active")
        })
        
    })



const nav = document.querySelector(".nav"),
navlist = document.querySelectorAll("li"),
totalNavlist = navlist.length;
var allsection =document.querySelectorAll(".section"),
totalsection = allsection.length
for(let i=0; i<totalNavlist; i++){
   const a = navlist[i].querySelector("a")
  a.addEventListener("click", function(){
   removebacksection();
    for(let j=0; j<totalNavlist; j++){
        if(navlist[j].querySelector("a").classList.contains("active")){
          addbacksection(j);
            // allsection[j].classList.add("back-section");
        }
        navlist[j].querySelector("a").classList.remove("active")
    }
    this.classList.add("active")
    showSection(this);
    if(window.innerWidth<1200){
        bbb();
    }
  })
}
function removebacksection()
{
    for( let i=0; i<totalsection; i++){
        allsection[i].classList.remove("back-section")
    }
}
function addbacksection(num)
{
    allsection[num].classList.add("back-section");
}
function showSection(element){
    for( let i=0; i<totalsection; i++){
        allsection[i].classList.remove("active")
    }
    const target =element.getAttribute("href").split("#")[1];
  document.querySelector("#" +target).classList.add("active");

  
}
function updateNav(element){
    for(let i=0; i<totalNavlist; i++){
        navlist[i].querySelector("a").classList.remove("active")
        const target =  element.getAttribute("href").split("#")[1];
        if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navlist[i].querySelector("a").classList.add("active")
        }
    }
}

const navbtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside"),
blurr = document.querySelector(".blur"),
styleswitch = document.querySelector(".style-switcher")
navbtn.addEventListener("click", ()=>{
    bbb();
    
})
blurr.addEventListener("click", ()=>{
    bbb();
    faf.querySelector("i").classList.toggle("fa-bars");
    faf.querySelector("i").classList.toggle("fa-times");
})
function bbb(){
    aside.classList.toggle("open");
    navbtn.classList.toggle("open");
    blurr.classList.toggle("open");
    styleswitch.classList.toggle("open");
   
    
}


// const TagCloud = require('TagCloud');

//                                     const container = '.tagcloud';
//                                     const texts = [
//                                         '3D', 'TagCloud', 'JavaScript',
//                                         'CSS3', 'Animation', 'Interactive',
//                                         'Mouse', 'Rolling', 'Sphere',
//                                         '6KB', 'v2.x',
//                                     ];
//                                     const options = {};
                                    
//                                     TagCloud(container, texts, options);

function handlePreloader() {
    if($('.loader-wrap').length){
        $('.loader-wrap').delay(1000).fadeOut(500);
    }
    TweenMax.to($(".loader-wrap .overlay"), 1.2, {
        force3D: true,
        left: "100%",
        ease: Expo.easeInOut,
    });
}

if ($(".preloader-close").length) {
    $(".preloader-close").on("click", function(){
        $('.loader-wrap').delay(200).fadeOut(500);
    })
}

$(window).on('load', function() {
    handlePreloader();
    enableMasonry();
});






