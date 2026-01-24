document.querySelectorAll(".nav-links li").forEach(item=>{
    item.onclick=()=>{
        document.getElementById(item.getAttribute("data-section"))
        .scrollIntoView({behavior:"smooth"});
    };
});

function downloadResume(){
    window.open("resume.pdf","_blank");
}

function downloadCert(file){
    const a=document.createElement("a");
    a.href=file;
    a.download=file;
    a.click();
}

function sendWhatsApp(){
    const phone="917250663074";
    const mobile=`whatsapp://send?phone=${phone}`;
    const web=`https://wa.me/${phone}`;
    if(/Android|iPhone|iPad|iOS/i.test(navigator.userAgent)){
        window.location.href=mobile;
    } else {
        window.open(web,"_blank");
    }
}

function sendEmail(){
    window.location.href=`mailto:rupeshkumar79459@gmail.com`;
}

const roles=["💻 Web Developer","🛡 Cyber Security","🎓 BCA Student"];
let i=0;
const banner=document.querySelector(".banner-text");

function rotate(){
    banner.style.opacity=0;
    setTimeout(()=>{
        banner.textContent=roles[i];
        banner.style.opacity=1;
        i=(i+1)%roles.length;
    },300);
}
rotate();
setInterval(rotate,2500);
