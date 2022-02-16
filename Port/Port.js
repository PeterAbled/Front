
const color_red = document.querySelector(".color_red");
color_red.style.color = `red`;const picture_scaled = document.querySelector(".profile_picture");

let proscale = 0;
function picture_scale() {
    if(proscale == 0) {
        picture_scaled.style.borderRadius = `0%`;
        picture_scaled.style.transition = `1.2s`;
        picture_scaled.style.transform = `scale(2)`;
        proscale = 1;
    } else if(proscale == 1) {
        picture_scaled.style.borderRadius = `100%`;
        picture_scaled.style.transition = `1.2s`;
        picture_scaled.style.transform = `scale(1)`;
        proscale = 0;
    }
}

const item1 = document.querySelector("#progress_item1");
const item2 = document.querySelector("#progress_item2");
const item3 = document.querySelector("#progress_item3");
const item4 = document.querySelector("#progress_item4");
const item5 = document.querySelector("#progress_item5");

function HTML5() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 85){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item1.style.width = PROG_WIDTH - 5 + `%`;
            item1.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
function CSS3() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 75){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item2.style.width = PROG_WIDTH - 5 + `%`;
            item2.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
function JAVASCRIPT() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 60){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item3.style.width = PROG_WIDTH - 5 + `%`;
            item3.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
function PYTHON() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 35){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item4.style.width = PROG_WIDTH - 5 + `%`;
            item4.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
function PHOTOSHOP() {
    let PROG_WIDTH = 5;
    let gage = setInterval(gages, 45);
    function gages() {
        if(PROG_WIDTH >= 65){
            clearInterval(gage);
        } else {
            PROG_WIDTH++;
            item5.style.width = PROG_WIDTH - 5 + `%`;
            item5.innerHTML = PROG_WIDTH + `%`;
        }
    }
}
