
const color_red = document.querySelector(".color_red");
color_red.style.color = `#5e0202`;

const item1 = document.querySelector("#progress_item1");
const item2 = document.querySelector("#progress_item2");
const item3 = document.querySelector("#progress_item3");
const item4 = document.querySelector("#progress_item4");
const item5 = document.querySelector("#progress_item5");
const item6 = document.querySelector("#progress_item6")

function HTML5() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 92){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item1.style.width = PROG_WIDTH + `%`;
            item1.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
function CSS3() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 86){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item2.style.width = PROG_WIDTH + `%`;
            item2.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
function JAVASCRIPT() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 71){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item3.style.width = PROG_WIDTH + `%`;
            item3.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
function PYTHON() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 42);
    function gages() {
        if(PROG_WIDTH >= 40){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item4.style.width = PROG_WIDTH+ `%`;
            item4.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
function OFFICE() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 76){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item5.style.width = PROG_WIDTH + `%`;
            item5.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
function PHOTOSHOP() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 67){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item6.style.width = PROG_WIDTH + `%`;
            item6.innerHTML = PROG_WIDTH + `%`;
        }
    }
}

const nav = document.querySelector(".nav")

window.onscroll = function() {
    scrollF();}

function scrollF() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        nav.style.transition = `.5s`;
        nav.style.transform = `translateY(40px)`;
    } else {
        nav.style.transition = `.5s`;
        nav.style.transform = `translateY(0px)`;
    }
}