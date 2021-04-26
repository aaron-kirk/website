function wToH(width) {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var height = Math.ceil(width*w/h);
    return height;
}

const numCircles = Math.ceil(4*Math.random()+1);
let circles = [];
let circleRefs = [];

for(i = 0; i < numCircles; i++) {

    // Generate circles until they work
    loop1: while(true) {
        var passed = true;

        circles[i] = [Math.ceil(70*Math.random()+15), Math.ceil(70*Math.random()+15), Math.ceil(8*Math.pow(Math.random(),2)) + 3];

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

    var circ = document.createElement("div");
    circ.className = "circle";
    circ.id=`c${i}`;
    circ.style.width = `${circles[i][2]}vw`;
    circ.style.height = `${circles[i][2]}vw`;
    circ.style.left = `${circles[i][0]}vw`;
    circ.style.top = `${circles[i][1]}vh`;

    var delay = 2*Math.random();
    circ.style.animation = `bob 1.5s ease-in-out ${delay}s infinite alternate`;

    document.body.appendChild(circ);
}