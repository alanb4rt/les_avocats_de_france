// Nav mobile

const navMobile = document.querySelector("#nav-mobile");
navMobile.style.display = "none";
const menu = document.querySelector("#menu");
const listItems = document.querySelectorAll(".list-mobile li");

let menuIsOpen = false
const toggleMenu = () => {
    menuIsOpen = !menuIsOpen;

    if (navMobile.style.display = menuIsOpen) {
        navMobile.style.display = "block";
        menuImage.src = "./images/menu-close.png";
    } else {
        navMobile.style.display = "none";
        menuImage.src = "./images/menu.png";
    }
};

menu.addEventListener("click", toggleMenu);
listItems.forEach(listItem => listItem.addEventListener("click", toggleMenu));


// Carousel

let currentSlide = 1;

const columns = document.querySelectorAll(".column");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const gridCarrousel = document.querySelector(".carousel");

const getMaxVisibleColumns = () => {
    let screenWidth = window.innerWidth;
    switch (true) {
        case (screenWidth <= 500):
            return 1;
        case (screenWidth <= 800):
            return 2;
        default:
            return 3;
    }
}

let maxVisibleColumns = getMaxVisibleColumns();

window.addEventListener("resize", () => {
    maxVisibleColumns = getMaxVisibleColumns();
});


const slide = (direction) => {
    if (currentSlide > 1) {
        if (direction === "left") currentSlide--;
    }

    if (currentSlide <= columns.length - maxVisibleColumns) {
        if (direction === "right") currentSlide++;
    }

    gridCarrousel.scrollTo({ left: columns[currentSlide - 1].offsetLeft, behavior: "smooth" });
}

arrowLeft.addEventListener("click", () => slide("left"));
arrowRight.addEventListener("click", () => slide("right"));
