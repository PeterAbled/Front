let curPos = 0;
let position = 0;
let like = 0;
const SLIDE_WIDTH = 1450; // 슬라이드 시 넘어갈 화면 크기
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const slides = document.querySelector(".slideShow")
const likeBtn = document.querySelector(".like_Btn")

function prev() {
  if(curPos > 0) {
    // nextBtn.removeAttribute("disabled")
    curPos = curPos - 1;
    position += SLIDE_WIDTH;
    slides.style.transform = `translateX(${position}px)`;
  }
  if(curPos <= -1) {
    // prevBtn.setAttribute('disabled', 'true')
    curPos = curPos + 5;
    position -= SLIDE_WIDTH * 5;
    slides.style.transform = `translateX(${position}px)`;
  }
}
function next() {
  if(curPos < 5) {
    // prevBtn.removeAttribute("disabled")
    curPos = curPos + 1;
    position -= SLIDE_WIDTH;
    slides.style.transform = `translateX(${position}px)`;
  }
  if(curPos == 5) {
    // nextBtn.setAttribute('disabled', 'true');
    curPos = 0;
    position = 0;
    slides.style.transform = `translateX(${position}px)`;
  }
}

function like_Btn() {
  const name = document.querySelector("#name");
  if(like == 0) {
    likeBtn.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i> You liked this';
    // name.innerText = 'Happy';
    const proPic = document.querySelector("#info_Name");
    proPic.removeAttribute("src");
    proPic.setAttribute("src", "image/liked.png");
    like = 1;
  } else if(like == 1) {
    likeBtn.innerHTML = '<i class="fa fa-heart-broken" aria-hidden="true"></i> You hated this';
    // name.innerText = 'Sad'
    const proPic = document.querySelector("#info_Name");
    proPic.removeAttribute("src");
    proPic.setAttribute("src", "image/hated.png");
    like = -1;
  } else if(like == -1){
    likeBtn.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i> You liked this';
    // name.innerText = 'Happy'
    const proPic = document.querySelector("#info_Name");
    proPic.removeAttribute("src");
    proPic.setAttribute("src", "image/liked.png");
    like = 1;
  }
}

function init() {
  // prevBtn.setAttribute('disabled', 'true')
  prevBtn.addEventListener("click", prev)
  nextBtn.addEventListener("click", next)
  likeBtn.addEventListener("click", like_Btn)
}
 
init();

