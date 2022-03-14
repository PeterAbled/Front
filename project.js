
const slide_img = document.querySelector(".slide_index")

let slideIndex = 0;

function next() {
    if(slideIndex == 0) {
        slide_img.style.transition = `all 1s ease-in-out`;
        slide_img.style.transform = `translateX(-100vw)`;
        slideIndex = slideIndex + 1;
    } else if(slideIndex == 1) {
        slide_img.style.transform = `translateX(-200vw)`;
        slideIndex = slideIndex + 1;
    } else if(slideIndex == 2) {
        slide_img.style.transform = `translateX(-300vw)`;
        slideIndex = slideIndex + 1;
    } else if(slideIndex == 3) {
        slide_img.style.transform = `translateX(-400vw)`;
        setTimeout(function() {
            slide_img.style.transition = `all 0s ease-in-out`;
            slide_img.style.transform = `translateX(0)`;
            slideIndex = 0;
        }, 1000)
    }
}

setInterval(next, 3000);

const items_1 = document.querySelector(".items-first")
const items_2 = document.querySelector(".items-second")

window.onscroll = function() {
    scrollIMG1();
    scrollIMG2();
    hawsun();}
function scrollIMG1() {
    if(document.querySelector('html').scrollTop > document.querySelector(".items-first").offsetTop - document.querySelector(".items-first").offsetHeight) {
        items_1.style.transition = `2s`;
        items_1.style.transform = `translateY(0px)`;
        items_1.style.opacity = `1`;
    } else {
        items_1.style.transition = `2s`;
        items_1.style.transform = `translateY(200px)`;
        items_1.style.opacity = `0`;
    }}
function scrollIMG2() {
    if(document.querySelector('html').scrollTop > document.querySelector(".items-second").offsetTop - document.querySelector(".items-second").offsetHeight) {
        items_2.style.transition = `2s`;
        items_2.style.transform = `translateY(0px)`;
        items_2.style.opacity = `1`;
    } else {
        items_2.style.transition = `2s`;
        items_2.style.transform = `translateY(200px)`;
        items_2.style.opacity = `0`;
    }}
const line = document.querySelector(".line")
function hawsun() {
    const hawsun = document.querySelector(".hawsun");
    if(document.querySelector('html').scrollTop > document.querySelector(".hawsun").offsetTop - document.querySelector(".hawsun").offsetHeight) {
        line.style.opacity = `1`;
        line.style.transform = `translateY(50px)`;
        hawsun.style.transition = `3s`;
        hawsun.style.opacity = `1`;
        hawsun.style.transform = `translateY(50px)`;
    } else {
        line.style.opacity = `0`;
        line.style.transform = `translateY(0px)`;
        hawsun.style.transition = `3s`;
        hawsun.style.opacity = `0`;
        hawsun.style.transform = `translateY(0px)`;
    }}

const button = function() {
    const burger = document.querySelector(".burger");
    const side = document.querySelector(".side");
    let side_set = 0;
    burger.addEventListener("click", function() {
        if(side_set == 0) {
            burger.classList.toggle("toggle");
            side.style.transition = `1s`;
            side.style.transform = `translateX(0)`;
            side_set = side_set + 1;
        } else if(side_set == 1) {
            burger.classList.toggle("toggle");
            side.style.transition = `1s`;
            side.style.transform = `translateX(-300px)`;
            side_set = side_set - 1;
        }    });}

button();

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
            
const product_img = document.getElementById("prod-img");
const product_name = document.getElementById("product_name");
const product_price = document.getElementById("product_price");
const check_box = document.querySelector("input_checkbox box");

function getProd_1() {
    product_img.src = `image/product1.jpg`;
    product_name.innerHTML = `구절초 수분진정 악산성 토너`;
    product_price.innerHTML = `22,500`;
}
function getProd_2() {
    product_img.src = `image/product2.jpg`;
    product_name.innerHTML = `구절초 수분진정 앰플진정`;
    product_price.innerHTML = `35,100`;
}
function getProd_3() {
    product_img.src = `image/product3.jpg`;
    product_name.innerHTML = `구절초 수분진정 에센스`;
    product_price.innerHTML = `37,800`;
}
function getProd_4() {
    product_img.src = `image/product4.jpg`;
    product_name.innerHTML = `구절초 수분진정 클렌징바`;
    product_price.innerHTML = `17,100`;
}
function getProd_5() {
    product_img.src = `image/product5.jpg`;
    product_name.innerHTML = `구절초 수분진정 3종 세트`;
    product_price.innerHTML = `90.000`;
}
function getProd_6() {
    product_img.src = `image/product6.png`;
    product_name.innerHTML = `친환경 에코백`;
    product_price.innerHTML = `9,900`;
}