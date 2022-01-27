let curPos = 0;
let position = 0;
let like = 0;
const SLIDE_WIDTH = 1200; // 슬라이드 시 넘어갈 화면 크기
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const slides = document.querySelector(".slideShow")
const slidesIndex = document.querySelector(".slideShow li")
const likeBtn = document.querySelector(".like_Btn")
let about = document.querySelector(".screen1_1")


function aboutOpen() {
  about.style.transform = `scale(2)`;
}

function prev() {
  if(curPos > 0) {
    nextBtn.removeAttribute("disabled")
    position += SLIDE_WIDTH;
    slides.style.transform = `translateX(${position}px)`;
    curPos = curPos - 1;
  }
  if(curPos == 0) {
    prevBtn.setAttribute('disabled', 'true')
  }
}
function next() {
  if(curPos < 3) {
    prevBtn.removeAttribute("disabled")
    position -= SLIDE_WIDTH;
    slides.style.transform = `translateX(${position}px)`;
    curPos = curPos + 1;
  }
  if(curPos == 3) {
    nextBtn.setAttribute('disabled', 'true');
  }
}

function like_Btn() {
  const name = document.querySelector("#name");
  if(like == 0) {
    likeBtn.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i> You liked this';
    name.innerText = 'Happy';
    const proPic = document.querySelector("#info_Name");
    proPic.removeAttribute("src");
    proPic.setAttribute("src", "image/liked.png");
    like = 1;
  } else if(like == 1) {
    likeBtn.innerHTML = '<i class="fa fa-heart-broken" aria-hidden="true"></i> You hated this';
    name.innerText = 'Sad'
    const proPic = document.querySelector("#info_Name");
    proPic.removeAttribute("src");
    proPic.setAttribute("src", "image/hated.png");
    like = -1;
  } else if(like == -1){
    likeBtn.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i> You liked this';
    name.innerText = 'Happy'
    const proPic = document.querySelector("#info_Name");
    proPic.removeAttribute("src");
    proPic.setAttribute("src", "image/liked.png");
    like = 1;
  }
} 

function init() {
  prevBtn.setAttribute('disabled', 'true')
  prevBtn.addEventListener("click", prev)
  nextBtn.addEventListener("click", next)
  likeBtn.addEventListener("click", like_Btn)
  about.addEventListener("click", aboutOpen)
}
 
init();