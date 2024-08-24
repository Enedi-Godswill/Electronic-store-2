
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

const ProductCards = document.querySelector('[data-product-cards]')
ProductCards.classList.add('cards')
const carts = [];

const initApp = () => {
    fetch("./json/db.json")
        .then(res => res.json())
        .then(data => {
            data.forEach((value) => {
                // console.log(value);
                const productCard = document.createElement('div')
                // productCard.classList.add = 'product-cards'

                productCard.innerHTML = `
                        <a href="#" class="product-img">
                            <img src="${value.image}" alt="">
                            <p class="discount">${value.discount}</p>
                        </a>
                        <div class="product-text">
                            <h1>${value.brand}</h1>
                            <p>${value.info}</p>
                            <div class="p-slide">
                                <p class="first">${value.first}</p>
                                <p>${value.second}</p>
                            </div>
                        </div>
                    `
                ProductCards.append(productCard)

                productCard.addEventListener("click", () => {
                    const cartData = {
                        image: value.image,
                        discount: value.discount,
                        brand: value.brand,
                        info: value.info,
                        first: value.first,
                        second: value.second
                    }
                    carts.push(cartData)
                    console.log(carts);

                    localStorage.setItem('items', JSON.stringify(carts))
                })
                
            })
        })
        .catch(err => console.log(err));
}
initApp();

