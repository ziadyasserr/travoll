let countDownDate = new Date("Nov 20, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

if (dateDiff < 0) {
    clearInterval(counter);
}
}, 1000);







let up = document.querySelector(".up");

// window.onscroll = function () {
  

// }

up.onclick = function() {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}




let section = document.querySelector(".reach-num");
let nums = document.querySelectorAll(".num");

console.log(nums);

let started = false;

window.onscroll = function () {
  // console.log(this.scrollY);
  scrollY >= 220 ? up.classList.add("showw") : up.classList.remove("showw")
  if (window.scrollY >= section.offsetTop - 580) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal );
}




var swiperPopular = new Swiper(".slide-container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredslides: true,
  slidesPerview: "auto", //3
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});













AOS.init();