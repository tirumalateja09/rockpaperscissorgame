////////////////////////////////////////////////////////////////////////////////////////////////////
// For modal show up and close[pending,
//its is getting closed(modal) by window, not by close]

let btnRules = document.getElementsByClassName("rules")[0];
let modal = document.getElementById("modal");
let cross = document.getElementsByClassName("cross")[0];
let close = document.getElementsByClassName("cross-img")[0];

btnRules.addEventListener("click", () => {
  modal.style.display = "block";
  cross.style.display = "block";
});

// cross.addEventListener('click',() => {
//     modal.style.display = "none";
// })

// close.onclick = function () {
//     modal.style.display = "none";
//     cross.style.display = "none";
// };

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    cross.style.display = "none";
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////
