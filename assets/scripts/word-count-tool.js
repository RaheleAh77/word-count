let countBtn = document.querySelector(".count-btn");
let inputCount = document.querySelector("#input-word");

countBtn.addEventListener("click", function () {
    let inputCountValue = inputCount.value; 
    let counterShow = document.querySelector(".counter");
    counterShow.style.display = "block";
    counterShow.style.textAlign = "center";
    counterShow.innerHTML = inputCountValue.length;
});