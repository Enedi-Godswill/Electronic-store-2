
const navbarPage = () => {
    let navbar = document.querySelector(".navbar");
    navbar.innerHTML = `
        <div class="nav-title">
                <h1>Ijim Store</h1>
        </div> 
        <div class="nav-content">
            <div class="nav-menu">
                <div class="search-box">
                    <button class="search-btn">
                        <img src="./icons/search.svg" alt="">
                    </button>
                    <input type="text" placeholder="Search electronic products">
                </div>
                <div class="nav-cards">
                    <a href="index.html">products</a>
                    <a href="./product.html">Cart</a>
                    <a href="./signup.html">Sign up</a>
                    <a href="./login.html">Login</a>
                </div>
            </div>
            <button class="menu-btn">
                <img class="open-btn" src="./icons/menu.svg" alt="">
                <img class="close-btn" src="./icons/close.svg" alt="">
            </button>
        </div>
    `;
}

navbarPage();

// Menu Btn
const menuBtn = document.querySelector(".menu-btn");
const navCards = document.querySelector(".nav-cards");

function toggleBtn(){
    menuBtn.classList.toggle("active");
    navCards.classList.toggle("active");
}
menuBtn.addEventListener("click", toggleBtn);

// Search box
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");

function showSearchBar(){
    searchBox.classList.toggle("active");
}
searchBtn.addEventListener("click", showSearchBar);
