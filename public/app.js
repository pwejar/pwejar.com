var mycount = 1;
var click = false;
var datas = [
    {
        pict: "/assets/mikoko.svg",
        title: "Mikoko Uhai",
        category: "Graphic Design: logo",
        about: "Campaign Theme logo for magroove conservation awareness",
        git: "https://github.com/pwejar/logos/tree/master/mikoko_uhai"
    },
    {
        pict: "/assets/pwejar.png",
        title: "leanonme.co.ke",
        category: "Software Dev: web",
        about: "Simple landing page including parallax effect with minimalistic design. All effect achieved by pure vanila javascript and images high quality compressed reducing the client loading time",
        git: "https://github.com/pwejar/leanonme.co.ke"
    },
    {
        pict: "/assets/leanOnMe.png",
        title: "pwejar.web.app",
        category: "Software Dev: web",
        about: "Bringing site to life using svg animation without costing loading time. Includes Firebase anynomous login with nodemailer response",
        git: "https://github.com/pwejar/pwejar.com"
    },
    {
        pict: "/assets/ceriops.svg",
        title: "Ceriops",
        category: "Graphic Design: logo",
        about: "Using minimalistic design but still communicating through the logo",
        git: "https://github.com/pwejar/logos/tree/master/ceriops"
    },
];
var leaders = [
    {
        name: "Daniel Kimaiga",
        title: "Founder & CEO",
        image: "/assets/face.jpg",
        jobs: [
            "Fullstack Developer",
            "Graphic Designer",
            "GIS"
        ]
    },
    {
        name: "Wesley Kirui",
        title: "Data Scientist",
        image: "/assets/0.jpg",
        jobs: [
            "Fullstack Developer",
            "Graphic Designer",
            "GIS"
        ]
    },
    {
        name: "Eddy Mbanga",
        title: "CCNA , MCSA , Linux +",
        image: "/assets/a4.jfif",
        jobs: [
            "Fullstack Developer",
            "Graphic Designer",
            "GIS"
        ]
    },
    {
        name: "Moses Mrima",
        title: "Head Cybersecurtiy Ops",
        image: "/assets/mose.jpg",
        jobs: [
            "Fullstack Developer",
            "Graphic Designer",
            "GIS"
        ]
    },
    {
        name: "Kelly Jambo",
        title: "Head Sales",
        image: "/assets/face2.jpg",
        jobs: [
            "Fullstack Developer",
            "Graphic Designer",
            "GIS"
        ]
    },
    {
        name: "Ephy Maina",
        title: "Head Visual Graphics",
        image: "/assets/face3.jpg",
        jobs: [
            "Fullstack Developer",
            "Graphic Designer",
            "GIS"
        ]
    },
];
var theSlide = document.getElementById("theHolder");
loadData(datas);
repeat(3000);
function repeat(milsec) {
    setTimeout(function () {
        functionSlide();
    }, milsec);
}
function loadData(anArray) {
    var mother = document.getElementById("content2");
    var value = '';
    anArray.forEach(function (post) {
        value += "<div class=\"card appear\">\n    <div class=\"picture\" style=\"background-image: url('" + post.pict + "');\">\n      \n    </div>\n    <div class=\"texts\">\n        <h4>" + post.title + "</h4>\n        <h5><i>" + post.category + "</i></h5>\n        <p>" + post.about + "</p>\n        <a onclick=\"openLink('" + post.git + "')\">More-:</a>                      \n    </div>\n</div>";
    });
    if (mother) {
        mother.innerHTML = value;
    }
    var mother2 = document.getElementById("theLeaders");
    var value2 = '';
    leaders.forEach(function (post) {
        var inside = '';
        for (var cy = 0; cy < post.jobs.length; cy++) {
            inside += "<p>" + post.jobs[cy] + "</p>";
        }
        value2 += "<div class=\"cardi appear\">\n    <div class=\"avata\">\n        <img src=\"" + post.image + "\" alt=\"\">\n    </div>\n    <div class=\"textss\">\n        <h4>" + post.name + "</h4>\n        <h5><i>" + post.title + "</i></h5>\n        \n    </div>\n</div>";
    });
    if (mother2) {
        mother2.innerHTML = value2;
    }
}
function functionSlide() {
    if (!theSlide) {
        return;
    }
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
function openLink(link) {
    window.open(link, '_blank');
}
function checked() {
    var line1 = document.getElementById('lineOne');
    var line2 = document.getElementById('lineTwo');
    var line3 = document.getElementById('lineThree');
    var stick = document.getElementById('stickOut');
    if (line1 && line2 && line3 && stick) {
        if (!click) {
            line1.style.transform = 'rotate(45deg) translateY(250%)';
            line3.style.transform = 'rotate(-45deg) translateY(-250%)';
            line2.style.transform = 'translate(-100%)';
            line1.style.fill = 'red';
            line3.style.fill = 'red';
            line2.style.fill = 'red';
            line2.style.opacity = '0';
            click = true;
            stick.style.transform = "none";
            stick.style.opacity = "1";
        }
        else {
            line1.style.transform = 'rotate(0)';
            line3.style.transform = 'rotate(0)';
            line2.style.transform = 'rotate(0)';
            line2.style.opacity = '1';
            line1.style.fill = '#373435';
            line3.style.fill = '#373435';
            line2.style.fill = '#373435';
            click = false;
            stick.style.transform = "translateX(-50%)";
            stick.style.opacity = "0";
        }
    }
}
window.addEventListener("scroll", function ($event) {
    if (click) {
        checked();
    }
    var dissss = document.querySelector('.background');
    var disspia = document.querySelector(".landing");
    var topmenu = document.querySelector(".menu");
    if (dissss) {
        dissss.style.transform = "translate3d(0px," + window.pageYOffset * 0.5 + "px, 0px)";
    }
    var screenPosition = window.innerHeight;
    var screenWidth = window.innerWidth;
    var introPosition = window.pageYOffset;
    if (introPosition < (screenPosition * 0.2)) {
        if (screenWidth > 768) {
            if (disspia) {
                disspia.style.marginTop = (window.pageYOffset * 0.5 + screenPosition * 0.1) + "px";
            }
        }
        else {
            if (disspia) {
                disspia.style.marginTop = (window.pageYOffset * 0.5 + screenPosition * 0.03) + "px";
            }
        }
        if (disspia)
            disspia.classList.add('cover');
        if (disspia)
            disspia.classList.remove('coverBack');
        if (topmenu)
            topmenu.style.transform = "translateY(-100%)";
    }
    else {
        if (disspia)
            disspia.classList.remove('cover');
        if (disspia)
            disspia.classList.add('coverBack');
        if (topmenu)
            topmenu.style.transform = "translateY(0%)";
    }
    // make elements appear in style
    var introText = document.querySelectorAll('.appear');
    var the2X = 0;
    for (var _i = 0; _i < introText.length; _i++) {
        var tex = introText[_i];
        var introPositon = tex.getBoundingClientRect().top;
        if (introPositon < (screenPosition * 0.9) && introPositon > -(screenPosition * 0.1)) {
            tex.style.opacity = 1;
            tex.style.transform = "translateY(0%)";
            tex.style.transition = "0.3s all " + the2X * 0.05 + "s ease-in-out";
        }
        else {
            tex.style.opacity = 0;
            tex.style.transform = "translateY(10%)";
        }
        the2X++;
    }
    // make element dissapear before reaching top
    var dissp = document.querySelectorAll('.dissapeas');
    var theX = 0;
    for (var _a = 0; _a < dissp.length; _a++) {
        var tex = dissp[_a];
        var introPositon = tex.getBoundingClientRect().top;
        if (introPositon < -(screenPosition * 0.1)) {
            tex.style.opacity = 0;
            tex.style.transform = "translateY(-40%)";
            tex.style.transition = "0.3s all " + theX * 0.07 + "s ease-in-out";
        }
        else {
            tex.style.opacity = 1;
            tex.style.transform = "translateY(0)";
        }
        theX++;
    }
});
function smoothScroll(target, duration) {
    var theTarget = document.querySelector(target);
    var targetPosition = 0;
    if (theTarget != null) {
        targetPosition = theTarget.offsetTop;
    }
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    function animation(currentTime) {
        if (startTime === null)
            startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration)
            requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1)
            return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}
