////////////////////////////////////////////////////////////////////////////////////////////////////
// For modal show up and close[pending,
//its is getting closed(modal) by window, not by close]

var btnRules = document.getElementsByClassName("rules")[0];
var modal = document.getElementById("modal");
var cross = document.getElementsByClassName("cross")[0];
var close = document.getElementsByClassName("cross-img")[0];

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
