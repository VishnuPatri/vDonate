const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toogle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value !== "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");

  const textSlider = document.querySelector(".textgroup");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
