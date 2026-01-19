console.log("Welcome to Rupesh Kumar's Portfolio!");

// moving underline
const menuItems = document.querySelectorAll(".menu > li");
const indicator = document.querySelector(".nav-indicator");

menuItems.forEach(item=>{
    item.addEventListener("mouseenter",e=>{
        const {offsetLeft,offsetWidth}=e.target;
        indicator.style.width=offsetWidth+"px";
        indicator.style.left=offsetLeft+"px";
    });
});

document.querySelector(".menu").addEventListener("mouseleave",()=>{
    indicator.style.width=0;
});

// scroll to section
menuItems.forEach(item=>{
    const sec=item.getAttribute("data-section");
    if(sec){
        item.addEventListener("click",()=>{
            document.getElementById(sec).scrollIntoView({behavior:"smooth"});
        });
    }
});

// mobile menu toggle
document.querySelector(".hamburger").addEventListener("click",()=>{
    const menu=document.querySelector(".menu");
    menu.style.display=menu.style.display==="flex"?"none":"flex";
});
