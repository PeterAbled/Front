let like = 0;
const likeBtn = document.querySelector(".like_Btn")
const slideList = document.querySelector('.slideShow'); // Slide parent dom
const slideContents = document.querySelectorAll('.slide_item'); // each slide dom
const slideBtnNext = document.querySelector('.next'); // next button
const slideBtnPrev = document.querySelector('.prev'); // prev button
const slideLen = slideContents.length; // slide length
const slideWidth = 1450; // slide width
const slideSpeed = 1000; // slide speed
const startNum = 0; // initial slide index (0 ~ 4)

slideList.style.width = slideWidth * (slideLen + 2) + "px";

// Copy first and last slide
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

// Add copied Slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);
slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";
let curIndex = startNum; // current slide index (except copied slide)
let curSlide = slideContents[curIndex]; // current slide dom
curSlide.classList.add('slide_active');

/** Next Button Event */
slideBtnNext.addEventListener('click', function() {
  if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
  }

if (curIndex === slideLen - 1) {
    setTimeout(function() {
      slideList.style.transition = "0ms";
      slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = -1;
  }
  curSlide.classList.remove('slide_active');
  curSlide = slideContents[++curIndex];
  curSlide.classList.add('slide_active');
});

/** Prev Button Event */
slideBtnPrev.addEventListener('click', function() {
  if (curIndex >= 0) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
  }

  if (curIndex === 0) {
    setTimeout(function() {
      slideList.style.transition = "0ms";
      slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = slideLen;
  }

  curSlide.classList.remove('slide_active');
  curSlide = slideContents[--curIndex];
  curSlide.classList.add('slide_active');
});

function like_Btn() {
  if(like == 0) {
    likeBtn.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i> You liked this';
    const proPic = document.querySelector("#info_Name");
    proPic.removeAttribute("src");
    proPic.setAttribute("src", "image/liked.png");
    like = 1;
  } else if(like == 1) {
    likeBtn.innerHTML = '<i class="fa fa-heart-broken" aria-hidden="true"></i> You hated this';
    const proPic = document.querySelector("#info_Name");
    proPic.removeAttribute("src");
    proPic.setAttribute("src", "image/hated.png");
    like = -1;
  } else if(like == -1){
    likeBtn.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i> You liked this';
    const proPic = document.querySelector("#info_Name");
    proPic.removeAttribute("src");
    proPic.setAttribute("src", "image/liked.png");
    like = 1;
  }
}

function init() {
  likeBtn.addEventListener("click", like_Btn);
}

setInterval(function() {
  if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
  }

if (curIndex === slideLen - 1) {
    setTimeout(function() {
      slideList.style.transition = "0ms";
      slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = -1;
  }
  curSlide.classList.remove('slide_active');
  curSlide = slideContents[++curIndex];
  curSlide.classList.add('slide_active');
}, 5000);

init();
