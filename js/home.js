
const productContainers = document.querySelectorAll(".product-container");
const leftBtn = document.querySelectorAll(".left");
const rightBtn = document.querySelectorAll(".right");

productContainers.forEach((item, i) => {
    leftBtn[i].addEventListener("click", () => {
        item.scrollLeft -= 200;
    })
    rightBtn[i].addEventListener("click", () => {
        item.scrollLeft += 200;
    })
});

