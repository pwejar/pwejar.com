var mycount = 1;
var theSlide = document.getElementById("theHolder");
repeat(3000);
function repeat(milsec) {
    setTimeout(function () {
        functionSlide();
    }, milsec);
}
function functionSlide() {
    var percent;
    switch (mycount) {
        case 1:
            percent = 10;
            break;
        case 2:
            percent = 28;
            break;
        case 3:
            percent = 45;
            break;
        case 4:
            percent = 60;
            break;
    }
    theSlide.style.transition = "transform 0.4s ease-in-out";
    theSlide.style.transform = "translateX(-" + percent + "%)";
    if (mycount === 4) {
        repeat(450);
    }
    else {
        repeat(3000);
    }
    mycount++;
    if (mycount > 5) {
        theSlide.style.transition = "none";
        mycount = 1;
        theSlide.style.transform = "translateX(-" + 10 + "%)";
    }
}
window.addEventListener("scroll", function ($event) {
    var dissss = document.querySelector('.background');
    dissss.style.transform = "translate3d(0px," + window.pageYOffset * 0.5 + "px, 0px)";
    var screenPosition = window.innerHeight;
    var disspia = document.querySelector(".landing");
    console.log(window.pageYOffset);
    var introPosition = disspia.getBoundingClientRect().top;
    if (introPosition < -(screenPosition * 0.01)) {
        //disspia.style.opacity = 0;
        disspia.style.transform = "rotate(180)";
        disspia.style.transition = "0.5s all ease-in-out";
    }
    else {
        disspia.style.opacity = 1;
        disspia.style.transform = "translateY(0)";
    }
});
