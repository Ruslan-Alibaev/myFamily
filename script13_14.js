const cards = Array.from(document.querySelectorAll(".photo_galery13_14"));
const slider13_14 = document.querySelector(".slider13_14");
const sliderContainer = document.querySelector(".slider_container");
const picture = Array.from(document.querySelectorAll(".photo_galery13_14"));
const buttonLeft = document.querySelector(".slider_btn_left");
const buttonRight = document.querySelector(".slider_btn_right");
const buttonClose = document.querySelector(".slider_close");

let cardIndex = -1;
let pictureFull;

for (const card of cards) {
    card.addEventListener("click", (event) => {
        cardIndex = cards.indexOf(card);
        pictureFull = picture[cardIndex].cloneNode();
        pictureFull.style.objectFit = "contain";
        sliderContainer.append(pictureFull);
        slider13_14.classList.add("active");
    });
}

buttonLeft.addEventListener("click", (event) => {
    event.preventDefault();
    changePicture("left");
})

buttonRight.addEventListener("click", (event) => {
    event.preventDefault();
    changePicture("right");
})

function changePicture(dir) {
    if (dir === "left") {
        if (cardIndex > 0) {
            cardIndex--;
        } else {
            cardIndex = cards.length - 1;
        }
    } else if (dir === "right") {
        if (cardIndex < cards.length - 1) {
            cardIndex++;
        } else {
            cardIndex = 0;
        }
    }
    console.log(cardIndex);
}

console.log(cards); 