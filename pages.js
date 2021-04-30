var b0 = document.querySelector("#b0");
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");

function getElementCenter(element) {
    var rect = element.getBoundingClientRect();
    var x = (rect.right + rect.left)/2;
    var y = (rect.bottom + rect.top)/2;
    return [x,y];
}

function dist(p1, p2) {
    return Math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2);
}

function zoomPosition(leaving, clicked) {
    var lPos = getElementCenter(leaving);
    var cPos = getElementCenter(clicked);

    var dx = lPos[0] - cPos[0];
    var dy = lPos[1] - cPos[1];
    var dp = [dx, dy]

    windowDist = dist([0,0], [window.innerWidth, window.innerHeight]);
    pDist = dist([0,0], dp);

    var scale = Math.abs(windowDist / pDist);
    dx *= scale;
    dy *= scale;

    finalX = lPos[0] + dx;
    finalY = lPos[0] + dy;

    return [finalX, finalY];
}


b0.addEventListener("click", (e) => {
    for(j = 1; j < 4; j++) {
        bj = document.querySelector(`#b${j}`);
        bj.style.transition = "top 3s ease, left 3s ease, transform 5s ease";

        var bjPos = zoomPosition(bj, b0);
        bj.style.left = `${bjPos[0]}px`;
        bj.style.top = `${bjPos[1]}px`;
        bj.style.transform = "scale(0)";
    }

    b0.style.transition = "transform 5s ease, left 3s ease, top 3s ease";
    b0.style.top = "50vh";
    b0.style.left = "50vw";
    b0.style.transform = "translate(-50%, -50%) scale(30)";

    var panel = document.querySelector(`#b0 .info-panel`);
    var selector = document.querySelector(`#b0 .selector`);
    var label = document.querySelector(`#b0 .label`);
    var circ = document.querySelector("#c0");
    
    circ.style.animation = "none";
    panel.style.transition = "opacity .5s ease";
    panel.style.opacity = "0";
    selector.style.transition = "opacity .5s ease";
    selector.style.opacity = "0";
    label.style.transition = "opacity .5s ease";
    label.style.opacity = "0";

    setTimeout(() => {
        document.body.style.overflowY = "scroll";
        var about = document.querySelector(".about");
        about.style.zIndex= "10";
        about.style.opacity = "100%";
    }, 2000);
});

b1.addEventListener("click", (e) => {
    for(j = 0; j < 4; j++) {
        if(j == 1) continue;

        bj = document.querySelector(`#b${j}`);
        bj.style.transition = "top 5s ease, left 5s ease, transform 5s ease";

        var bjPos = zoomPosition(bj, b1);
        bj.style.left = `${bjPos[0]}px`;
        bj.style.top = `${bjPos[1]}px`;
        bj.style.transform = "scale(0)";
    }

    b1.style.transition = "transform 3s ease, left 3s ease, top 3s ease";
    b1.style.top = "50vh";
    b1.style.left = "50vw";
    b1.style.transform = "translate(-50%, -50%) scale(5)";
    b1.style.animation = "none";

    var panel = document.querySelector(`#b1 .info-panel`);
    var selector = document.querySelector(`#b1 .selector`);
    var label = document.querySelector(`#b1 .label`);
    var p1 = document.querySelector("#p1");
    var p2 = document.querySelector("#p2");

    p1.style.animation = "none";
    p2.style.animation = "none";
    panel.style.transition = "opacity .5s ease";
    panel.style.opacity = "0";
    selector.style.transition = "opacity .5s ease";
    selector.style.opacity = "0";
    label.style.transition = "opacity .5s ease";
    label.style.opacity = "0";
});

b2.addEventListener("click", (e) => {
    for(j = 0; j < 4; j++) {
        if(j == 2) continue;

        bj = document.querySelector(`#b${j}`);
        bj.style.transition = "top 3s ease, left 3s ease, transform 5s ease";

        var bjPos = zoomPosition(bj, b2);
        bj.style.left = `${bjPos[0]}px`;
        bj.style.top = `${bjPos[1]}px`;
        bj.style.transform = "scale(0)";
    }

    b2.style.transition = "transform 5s ease, left 3s ease, top 3s ease";
    b2.style.top = "50vh";
    b2.style.left = "50vw";
    b2.style.transform = "translate(-50%, -50%) scale(30)";
    b2.style.animation = "none";

    var panel = document.querySelector(`#b2 .info-panel`);
    var selector = document.querySelector(`#b2 .selector`);
    var label = document.querySelector(`#b2 .label`);
    var circ = document.querySelector("#c2");

    circ.style.animation = "none";
    panel.style.transition = "opacity .5s ease";
    panel.style.opacity = "0";
    selector.style.transition = "opacity .5s ease";
    selector.style.opacity = "0";
    label.style.transition = "opacity .5s ease";
    label.style.opacity = "0";
});

b3.addEventListener("click", (e) => {
    for(j = 0; j < 4; j++) {
        if(j == 3) continue;

        bj = document.querySelector(`#b${j}`);
        bj.style.transition = "top 3s ease, left 3s ease, transform 5s ease";

        var bjPos = zoomPosition(bj, b3);
        bj.style.left = `${bjPos[0]}px`;
        bj.style.top = `${bjPos[1]}px`;
        bj.style.transform = "scale(0)";
    }

    b3.style.transition = "transform 5s ease, left 3s ease, top 3s ease";
    b3.style.top = "50vh";
    b3.style.left = "50vw";
    b3.style.transform = "translate(-50%, -50%) scale(30)";

    var panel = document.querySelector(`#b3 .info-panel`);
    var selector = document.querySelector(`#b3 .selector`);
    var label = document.querySelector(`#b3 .label`);
    var circ = document.querySelector("#c3");

    circ.style.animation = "none";
    panel.style.transition = "opacity .5s ease";
    panel.style.opacity = "0";
    selector.style.transition = "opacity .5s ease";
    selector.style.opacity = "0";
    label.style.transition = "opacity .5s ease";
    label.style.opacity = "0";
});