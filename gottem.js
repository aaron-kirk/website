const gottem = document.querySelector("#gottem");
const me = document.querySelector("#me");

var toggledContact = false;

me.addEventListener("click", (e) => {
    if(toggledContact) return;
    toggledContact = true;

    me.style.transform = "rotateY(90deg)";

    setTimeout(() => {
        gottem.style.transform = "rotateY(0deg)";
    }, 300);
});

gottem.addEventListener("click", (e) => {
    if(!toggledContact) return;
    toggledContact = false;

    gottem.style.transform = "rotateY(90deg)";

    setTimeout(() => {
        me.style.transform = "rotateY(0deg)";
    }, 300);
})