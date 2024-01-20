const imagesElem = document.querySelectorAll(".slider_img");
const sliderLineElem = document.querySelector(".slider_line");
const circlesElem = document.querySelectorAll(".circle");
const btnPrevElem = document.querySelector(".btn_prev");
const btnNextElem = document.querySelector(".btn_next");

let sliderIndex = 0;
let sliderWidth = document.querySelector(".slider").offsetWidth;
console.log(sliderWidth);

btnPrevElem.addEventListener("click", previousSlider);
btnNextElem.addEventListener("click", nextSlider);

circlesElem.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    sliderIndex = index;
    rollSlider();
    activeCircle(sliderIndex);
  });
});

function nextSlider() {
  sliderIndex++;
  if (sliderIndex >= imagesElem.length) sliderIndex = 0;
  rollSlider();
  activeCircle(sliderIndex);
}

function previousSlider() {
  sliderIndex--;
  if (sliderIndex < 0) sliderIndex = imagesElem.length - 1;
  rollSlider();
  activeCircle(sliderIndex);
}

function rollSlider() {
  sliderLineElem.style.transform = `translateX(${
    -sliderIndex * sliderWidth
  }px)`;
}

function activeCircle(index) {
  circlesElem.forEach((item) => item.classList.remove("active_circle"));
  circlesElem[index].classList.add("active_circle");
}
