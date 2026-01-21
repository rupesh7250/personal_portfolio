function downloadResume(){
    window.open("resume.pdf", "_blank");
}

document.querySelectorAll(".nav-links li").forEach(item =>{
    item.addEventListener("click",()=>{
        const sec = item.getAttribute("data-section");
        document.getElementById(sec).scrollIntoView({behavior:"smooth"});
    });
});

function sendWhatsApp(){
    window.open("https://wa.me/917250663074","_blank");
}

function sendEmail(){
    window.location.href = "mailto:rupeshkumar79459@gmail.com";
}
