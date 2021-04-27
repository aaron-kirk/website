const website = document.querySelector("#website");
const uweast = document.querySelector("#uweast");
const websiteImg = document.querySelector("#website img");
const uweastImg = document.querySelector("#uweast img");
const button = document.querySelector(".button");
const btnImg = document.querySelector(".button img");

const projs = [website, uweast];
const projImg = [websiteImg, uweastImg];
var currentProj = 0;
var clicked = false;

button.addEventListener("click", (e) => {
    if(hasClicked) return;
    if(clicked) return;

    var nextProj = (currentProj + 1)%projs.length;
    console.log(nextProj);

    projs[currentProj].style.zIndex= "1";
    projs[nextProj].style.zIndex= "2";
    projs[currentProj].style.transition = "transform 1.5s ease";
    projs[nextProj].style.transition = "transform 1.5s ease";
    projs[currentProj].style.transform = `translate(-50%, -50%) rotate3D(0, 1, 0, 90deg)`;
    projs[nextProj].style.transform = `translate(-50%, -50%) rotate3D(0, 1, 0, 0deg)`;
    clicked = true;

    setTimeout(() => {

        projs[currentProj].style.transition = "transform 0s ease";
        projs[currentProj].style.transform = "translate(-50%, -50%) rotate3D(0,1,0,-90deg)";
        currentProj = nextProj;
        clicked = false;
    }, 1500);
});

projImg.forEach((im) => {
    im.addEventListener("click", (e) => {
        if(hasClicked) {
            hasClicked = false;

            e.target.style.transform = `scale(1)`;

        } else {
            hasClicked = true;
            e.target.style.transform = `scale(2)`;
        }
    });
});