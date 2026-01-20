console.log("Portfolio Loaded");

// nav underline
const items = document.querySelectorAll(".menu > li");
const indicator = document.querySelector(".nav-indicator");

items.forEach(item=>{
    item.addEventListener("mouseenter",e=>{
        const {offsetLeft,offsetWidth}=e.target;
        indicator.style.width=offsetWidth+"px";
        indicator.style.left=offsetLeft+"px";
    });
});

document.querySelector(".menu").addEventListener("mouseleave",()=>{
    indicator.style.width=0;
});

// scroll sections
items.forEach(item=>{
    const sec=item.getAttribute("data-section");
    if(sec){
        item.addEventListener("click",()=>{
            document.getElementById(sec).scrollIntoView({behavior:"smooth"});
        });
    }
});

// mobile toggle
document.querySelector(".hamburger").addEventListener("click",()=>{
    const menu=document.querySelector(".menu");
    menu.style.display=menu.style.display==="flex"?"none":"flex";
});

// certificates modal
function openCert(src){
    document.getElementById("certModal").style.display="flex";
    document.getElementById("certPreview").src=src;
}

document.getElementById("certModal").addEventListener("click",()=>{
    document.getElementById("certModal").style.display="none";
});

// dark mode switch
const toggle=document.getElementById("themeToggle");
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});

// resume download
function downloadResume(){
    window.open("resume.pdf","_blank");
}

// contact form submit
function sendMail(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
}
