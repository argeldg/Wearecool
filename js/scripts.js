function moveImageRandomly(element) {
  const maxX = window.innerWidth - element.width;
  const maxY = window.innerHeight - element.height;

  const newLeft = Math.random() * maxX;
  const newTop = Math.random() * maxY;

  element.style.left = `${newLeft}px`;
  element.style.top = `${newTop}px`;
}
function mouseListener(elementName) {
  const element = document.getElementById(elementName);

  element.addEventListener("mouseover", function (event) {
    moveImageRandomly(element);
  });
  element.addEventListener("mousemove", function (event) {
    moveImageRandomly(element);
  });
}
// mouseListener("bubble1");
// mouseListener("bubble2");

//Hello//
const hello_options = [
  "Hello",
  "Hola",
  "こんにちは",
  "Привет",
  "你好",
  "Bonjour",
  "مرحبا",
];
const textElement = document.getElementById("displayText");
let index = 0;

setInterval(function () {
  textElement.classList.add("animate__fadeIn");
  textElement.textContent = hello_options[index];
  index = (index + 1) % hello_options.length;
  setTimeout(function () {
    textElement.classList.remove("animate__fadeIn");
  }, 900);
}, 3000);

const scrollElements = ScrollReveal({ reset: false });
scrollElements.reveal(".js-indice-scroll", {
  distance: "150%",
  origin: "bottom",
  opacity: 0.5,
});

const primaryBlue = getComputedStyle(document.documentElement)
  .getPropertyValue("--primary-blue")
  .trim();
