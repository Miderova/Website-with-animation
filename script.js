const imgOne = document.getElementById("parallax-one");
const imgTwo = document.getElementById("parallax-two");
const imgThree = document.getElementById("parallax-three");
const imgFour = document.getElementById("parallax-four");
const imgFive = document.getElementById("parallax-five");
const info = document.querySelector(".info-container");


document.addEventListener("scroll", () => {
    let value = window.scrollY;
    imgTwo.style.left = value + "px";
    imgThree.style.bottom = -0.4 * value + "px";
    imgFour.style.bottom = -0.8 * value + "px";
    info.style.bottom = 350 + value + "px";
})