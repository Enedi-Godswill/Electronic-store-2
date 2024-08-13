
const footBar = () => {
    let footer = document.querySelector("footer");
    footer.innerHTML = `
        <div class="footer-title">
            <h1>Ijim Electronics</h1>
        </div>
        <div class="footer-contents">
            <div class="footer-social-container">
                <div class="footer-links">
                    <a href="#" class="social-links">terms and services</a>
                    <a href="#" class="social-links">privacy page</a>
                </div>
                <div class="footer-social-links">
                    <a href="#" class="social-links">Instagram</a>
                    <a href="#" class="social-links">Facebook</a>
                    <a href="#" class="social-links">twitter</a>
                </div>
            </div>
            <p class="footer-credit">Property of Ijim Electronics</p>
        </div>
    `;
}

footBar();
