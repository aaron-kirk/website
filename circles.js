function wToH(width) {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var height = Math.ceil(width*w/h);
    return height;
}

function wToP(width) {
    var w = window.innerWidth;
    var pixels = Math.ceil(width*w/100);
    return pixels;
}

const numCircles = 4;
const edge = 11;
let circles = [];
let circleRefs = [];

for(i = 0; i < numCircles; i++) {

    // Generate circles until they work
    loop1: while(true) {
        var passed = true;

        circles[i] = [Math.ceil((100 - 2*edge)*Math.random()+edge), Math.ceil((100 - 2.2*wToH(edge + 2))*Math.random()+wToH(edge)), Math.ceil(6*Math.pow(Math.random(),3)) + 5];

        // Check other circle for intersection; regenerate if failed
        loop2: for(j = 0; j < i; j++) {

            let distX = Math.abs(circles[j][0] - circles[i][0]);
            let distY = Math.abs(circles[j][1] - circles[i][1]);

            let size = circles[i][2];
            let otherSize = circles[j][2];

            let buffer = 0;

            // Too close together
            if((distX - size - otherSize - buffer <= 0) && (distY - wToH(size) - wToH(otherSize) - wToH(buffer) <= 0)) {
                console.log("too close together");
                passed = false;
                break loop2;
            }
        }

        if(passed) break loop1;
    }

    var box = document.querySelector(`#b${i}`);
    var circ = document.querySelector(`#c${i}`);
    box.style.width = `${circles[i][2]}vw`;
    box.style.height = `${circles[i][2]}vw`;
    box.style.left = `${circles[i][0]}vw`;
    box.style.top = `${circles[i][1]}vh`;

    circ.style.width = `${circles[i][2]}vw`;
    circ.style.height = `${circles[i][2]}vw`;

    if(wToP(circles[i][0]) < 500) {
        var panel = document.querySelector(`#c${i} .info-panel`);
        panel.style.left = "auto";
        panel.style.right = "-40px";
        panel.style.transform = "translateX(100%)";
    }

    var delay = -1.5*Math.random();
    circ.style.animation = `bob 1.5s ease-in-out ${delay}s infinite alternate`;
    
    if(i == 1) {
        var p1 = document.querySelector("#p1");
        var p2 = document.querySelector("#p2");
        p1.style.animation = `bobTrans 1.5s ease-in-out ${delay}s infinite alternate`;
        p2.style.animation = `bobTrans 1.5s ease-in-out ${delay}s infinite alternate`;
    }
}