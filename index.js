const body = document.querySelector('body');

const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const resume = document.querySelector("#resume");
const contact = document.querySelector("#contact");

const liA = document.getElementsByClassName("nav-link");

about.addEventListener("mouseenter", (e) => {
    body.style.backgroundColor = "#216869";
    for (link of liA) {
        link.style.color = "rgba(255, 255, 255, 0.1)";
    }
});
about.addEventListener("mouseleave", (e) => {
    body.style.backgroundColor = "#111111";
    for (let link of liA) {
        link.style.color = "transparent";
    }
});

projects.addEventListener("mouseenter", (e) => {
    body.style.backgroundColor = "#E08E45";
    for (let link of liA) {
        link.style.color = "rgba(255, 255, 255, 0.1)";
    }
});
projects.addEventListener("mouseleave", (e) => {
    body.style.backgroundColor = "#111111";
    for (let link of liA) {
        link.style.color = "transparent";
    }
});

resume.addEventListener("mouseenter", (e) => {
    body.style.backgroundColor = "#253C78";
    for (let link of liA) {
        link.style.color = "rgba(255, 255, 255, 0.1)";
    }
});
resume.addEventListener("mouseleave", (e) => {
    body.style.backgroundColor = "#111111";
    for (let link of liA) {
        link.style.color = "transparent";
    }
});

contact.addEventListener("mouseenter", (e) => {
    body.style.backgroundColor = "#D62246";
    for (let link of liA) {
        link.style.color = "rgba(255, 255, 255, 0.1)";
    }
});
contact.addEventListener("mouseleave", (e) => {
    body.style.backgroundColor = "#111111";
    for (let link of liA) {
        link.style.color = "transparent";
    }
});



const leftPanel = document.querySelector(".left-panel");

const aboutLink = document.querySelector("#about-link");
const projectsLink = document.querySelector("#projects a");
const resumeLink = document.querySelector("#resume a");
const contactLink = document.querySelector("#contact a");
const logo = document.querySelector(".name");

aboutLink.addEventListener("click", (e) => {
    console.log("reee");
    if(hasClicked) return;
    leftPanel.style.top = "-100vh";
});
projectsLink.addEventListener("click", (e) => {
    if(hasClicked) return;
    leftPanel.style.top = "-200vh";
});
resumeLink.addEventListener("click", (e) => {
    if(hasClicked) return;
    leftPanel.style.top = "-300vh";
});
contactLink.addEventListener("click", (e) => {
    if(hasClicked) return;
    leftPanel.style.top = "-400vh";
});
logo.addEventListener("click", (e) => {
    if(hasClicked) return;
    leftPanel.style.top = "0";
});



const resumeBox = document.querySelector(".resume-box");
const resumeDoc = document.querySelector(".resume-box img");
const download = document.querySelector("#download");

const nav = document.querySelector(".nav");

var hasClicked = false;

resumeBox.addEventListener("mousemove", (e) => {
    if(hasClicked) return;

    var imgRect = resumeDoc.getBoundingClientRect();
    let xAxis = (imgRect.right - imgRect.left)/2 + imgRect.left;
    let yAxis = (imgRect.bottom - imgRect.top)/2 + imgRect.top;

    let xPos = e.pageX - xAxis;
    let yPos = e.pageY - yAxis;

    let yRot = xPos/(imgRect.right - imgRect.left);
    let xRot = -yPos/(imgRect.bottom - imgRect.top);

    resumeDoc.style.transition = "0s";
    resumeDoc.style.transform = `rotate3d(${xRot}, ${yRot}, 0, 10deg)`;
});
resumeBox.addEventListener("mouseleave", (e) => {
    if(hasClicked) return;

    resumeDoc.style.transition = ".2s ease";
    resumeDoc.style.transform = `rotate3d(0, 0, 0, 0deg)`;

});

resumeDoc.addEventListener("click", (e) => {
    if(hasClicked) {
        hasClicked = false;

        body.style.overflowY = "scroll";
        nav.style.pointerEvents = "all";

        resumeDoc.style.transform = `rotate3d(0, 0, 0, 0deg)`;
        resumeDoc.style.height = "70vh";

        logo.style.opacity = "100%";
        download.style.transitionDelay = ".4s";
        download.style.opacity = "100%";
        setTimeout(() => {
            download.style.transitionDelay = "0s";    
        }, 400);
    } else {
        hasClicked = true;

        body.style.overflowY = "hidden";
        nav.style.pointerEvents = "none";

        resumeDoc.style.transition = "height 1s ease, transform .2s ease";
        resumeDoc.style.transform = `rotate3d(0, 0, 0, 0deg)`;
        resumeDoc.style.height = "95vh";

        logo.style.opacity = "0";
        download.style.transitionDelay = "0s";
        download.style.opacity = "0";

    }
});

resumeBox.addEventListener("scroll", (e) => {
    console.log("??");
    if(!hasClicked) return;
    console.log("SKREE SCROLLL");
});