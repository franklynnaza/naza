



const alternatestyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternatestyle.forEach((style) => {
        if(color === style.getAttribute("title"))

        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}



var daynight = document.querySelector(".day-night")
var day = document.querySelector("#font")
var allsection = document.querySelectorAll(".section")
var faf = document.querySelector(".nav-toggler")   
var  famm = document.querySelector(".style-switcher-toggler")
function ghgg(){
    day.querySelector("i").classList.remove("fa-times")
    day.querySelector("i").classList.add("fa-bars")

}
 
      



daynight.addEventListener("click", ()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

faf.addEventListener("click", ()=>{
    faf.querySelector("i").classList.toggle("fa-bars");
    faf.querySelector("i").classList.toggle("fa-times");

})


window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("fa-sun")
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon")
    }
})
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"));
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
   
   
})

   




var wratogle = document.querySelectorAll(".wrappper");
function rotte(){
    wratogle.style.display = "none"
}

