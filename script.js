// ======================
// SMOOTH NAV SECTION SCROLL
// ======================
document.querySelectorAll(".nav-links li").forEach(item =>{
    item.addEventListener("click",()=>{
        const sec = item.getAttribute("data-section");
        document.getElementById(sec).scrollIntoView({behavior:"smooth"});
    });
});

// ======================
// DOWNLOAD RESUME
// ======================
function downloadResume(){
    window.open("resume.pdf", "_blank");
}

// ======================
// CONTACT FORM SUBMIT
// ======================
function sendMail(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
}

// ======================
// THEME (LIGHT / DARK) FUTURE SUPPORT
// ======================
document.querySelector(".theme-btn").addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");
});

// ======================
// SCROLL REVEAL ANIMATIONS
// ======================
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {threshold:0.25});

document.querySelectorAll(".section, .hero").forEach(el=>{
    observer.observe(el);
});

// ======================
// 3D CARD HOVER (MOUSE TILT)
// ======================
document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mousemove", e=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", ()=>{
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});
