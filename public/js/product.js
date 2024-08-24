
// const increment = document.querySelector(".increment");
// const decrement = document.querySelector(".decrement");
// const reset = document.querySelector(".reset");

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);
// console.log(value);


btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if(styles.classList.contains("decrease")){
            count--;
        }
        else if(styles.classList.contains("increase")){
            count++;
        }
        else if(styles.classList.contains("reset")){
            count = 0;
        }
        value.innerHTML = count;
    })
})




