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

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    cross.style.display = "none";
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////

function who_wins(user,computer){
  if (user === "paper" && computer === "stone") return 1;
  else if (user === "paper" && computer === "paper") return 0;
  else if (user === "stone" && computer === "scissor") return 1;
  else if (user === "stone" && computer === "stone") return 0;
  else if (user === "scissor" && computer === "paper") return 1;
  else if (user === "scissor" && computer === "scissor") return 0;
  else return -1;
}

function add_ripple_effect_user_wins(){
  let ripple = document.createElement("div");
  ripple.classList.add("ripple-img");
  ripple.innerHTML = `
  <img src="../assets/Ellipse 3.png" alt="" class="i3">
  <img src="../assets/Ellipse 5.png" alt="" class="i1">
  <img src="../assets/Ellipse 4.png" alt="" class="i2">
  `;
  document.getElementsByClassName("lower-half")[0].appendChild(ripple);
  document.getElementsByClassName("ripple-img")[0].style.cssText = `
  position: relative;
  `;
  document.getElementsByClassName("i3")[0].style.cssText = `
  position: absolute;
  left: 304px;
  top: 342px;
  z-index: -1;
  `;

  document.getElementsByClassName("i1")[0].style.cssText = `
  position: absolute;
  left: 328px;
  top: 368px;
  z-index: -2;
  `;

  document.getElementsByClassName("i2")[0].style.cssText = `
  position: absolute;
  left: 218px;
  top: 257px;
  z-index: -3;
  `;
}

function add_ripple_effect_cs_wins(){
  let ripple = document.createElement("div");
  ripple.classList.add("ripple-img");
  ripple.innerHTML = `
  <img src="../assets/Ellipse 3.png" alt="" class="i3">
  <img src="../assets/Ellipse 5.png" alt="" class="i1">
  <img src="../assets/Ellipse 4.png" alt="" class="i2">
  `;
  document.getElementsByClassName("lower-half")[0].appendChild(ripple);
  document.getElementsByClassName("ripple-img")[0].style.cssText = `
  position: relative;
  `;
  document.getElementsByClassName("i3")[0].style.cssText = `
  position: absolute;
  left: 874px;
  top: 342px;
  z-index: -1;
  `;

  document.getElementsByClassName("i1")[0].style.cssText = `
  position: absolute;
  left: 898px;
  top: 368px;
  z-index: -2;
  `;

  document.getElementsByClassName("i2")[0].style.cssText = `
  position: absolute;
  left: 787px;
  top: 257px;
  z-index: -3;
  `;
}

function add_specs(wins){
  let picked = document.createElement("div");
  picked.classList.add("picked-title");
  picked.innerHTML = `
  <p class="y-picked">YOU PICKED</p>
  <p class="cs-picked">PC PICKED</p>
  `;
  document.getElementsByClassName("lower-half")[0].appendChild(picked);
  document.getElementsByClassName("y-picked")[0].style.cssText = `
  position: absolute;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  left: 400px;
  top: 331px;
  `;
  document.getElementsByClassName("cs-picked")[0].style.cssText = `
  position: absolute;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.1em;
  color: #FFFFFF;
  left: 976px;
  top: 331px;
  `;

  let msg; let x;
  if (wins === 1){
    msg = "WIN";
    x = 700;
  }
  else if (wins === -1){
    msg = "LOST";
    x = 612;
  }

  let status = document.createElement("div");
  status.classList.add("game-status");

  if (wins === 1 || wins === -1){
    status.innerHTML = `
    <h1 class="win-msg">YOU ${msg}</h1>
    <h2 class="against-pc">AGAINST PC</h2>
    <div class="btn">
    <a href="../index.html" style="text-decoration: none; color: #6B6B6B;"><p class="btn-content">PLAY AGAIN</p></a>
    </div>
    `;

    document.getElementsByClassName("lower-half")[0].appendChild(status);
    document.getElementsByClassName("btn")[0].style.cssText = `
    cursor: pointer;
    position: absolute;
    width: 174px;
    height: 44px;
    left: ${x}px;
    top: 600px;
    background: #FFFFFF;
    border-radius: 9px;
    color: #6B6B6B;
    justify-content: center;
    display: flex;
    align-items: center;
    `;
  }

  if (wins === 1){ 
    let next_btn = document.createElement("div");
    next_btn.classList.add("next-btn");
    next_btn.innerHTML = `
    <a href="../congratulations page/congrats.html" style="text-decoration: none; color: white;">
    <h1 class="title-next">NEXT</h1>
    </a>
    `;
    document.getElementsByClassName("lower-half")[0].appendChild(next_btn);
    document.getElementsByClassName("title-next")[0].style.cssText = `
    position: absolute;
    width: 119px;
    height: 40px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    color: #FFFFFF;
    text-align: center;
    float:right;
    top: 640px;
    right: 0px;
    cursor: pointer;
    `; 

    document.getElementsByClassName("title-rules")[0].style.cssText = `
    right: 145px;
    `;

    document.getElementsByClassName("win-msg")[0].style.cssText = `
    font-weight: 800;
    font-size: 39px;
    line-height: 46px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    position: absolute;
    left: 689px;
    top: 450px;
    `;

    document.getElementsByClassName("against-pc")[0].style.cssText = `
    font-weight: 800;
    font-size: 25px;
    line-height: 29px;text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    position: absolute;
    left: 697px;
    top: 513px;
    `;
  }

  if (wins === -1){  
    document.getElementsByClassName("win-msg")[0].style.cssText = `
    font-weight: 800;
    font-size: 39px;
    line-height: 46px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    position: absolute;
    left: 596px;
    top: 450px;
    `;

    document.getElementsByClassName("against-pc")[0].style.cssText = `
    font-weight: 800;
    font-size: 25px;
    line-height: 29px;text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    position: absolute;
    left: 617px;
    top: 513px;
    `;
  }
  else if (wins === 0){
    status.innerHTML = `
    <h1 class="tie-msg">TIE UP</h1>
    <div class="btn">
    <a href="../index.html" style="text-decoration: none; color: #6B6B6B;"><p class="btn-content">PLAY AGAIN</p></a>
    </div>
    `;
    document.getElementsByClassName("lower-half")[0].appendChild(status);
    document.getElementsByClassName("btn")[0].style.cssText = `
    cursor: pointer;
    position: absolute;
    width: 174px;
    height: 44px;
    left: 651px;
    top: 565px;
    background: #FFFFFF;
    border-radius: 9px;
    color: #6B6B6B;
    justify-content: center;
    display: flex;
    align-items: center;
    `;
    
    document.getElementsByClassName("tie-msg")[0].style.cssText = `
    font-weight: 800;
    font-size: 39px;
    line-height: 46px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    position: absolute;
    left: 666px;
    top: 450px;
    `;
  }
}

function update_score_user(){
  let ans = Number(localStorage.getItem('user_points'));
  ans = ans + 1;
  localStorage.setItem("user_points",ans);
  return ans;
}

function update_score_cs(){
  let ans = Number(localStorage.getItem('cs_points'));
  ans = ans + 1;
  localStorage.setItem("cs_points",ans);
  return ans;
}

// local storage init for user
if (!localStorage.getItem('user_points')){
  localStorage.setItem("user_points",0);
  document.getElementsByClassName("y-score")[0].innerHTML = `&nbsp;&nbsp;${localStorage.getItem('user_points')}`;
}

// local storage init for cs
if (!localStorage.getItem('cs_points')){
  localStorage.setItem("cs_points",0);
  document.getElementsByClassName("cs-score")[0].innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${localStorage.getItem('cs_points')}`;
}

if (Number(localStorage.getItem('user_points')) <= 9){
document.getElementsByClassName("y-score")[0].innerHTML = `&nbsp;&nbsp;${localStorage.getItem('user_points')}`;
}

if (Number(localStorage.getItem('cs_points')) <= 9){
document.getElementsByClassName("cs-score")[0].innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${localStorage.getItem('cs_points')}`;
}

if (Number(localStorage.getItem('user_points')) >= 10){
  document.getElementsByClassName("y-score")[0].innerHTML = `&nbsp${localStorage.getItem('user_points')}`;
}

if (Number(localStorage.getItem('cs_points')) >= 10){
  document.getElementsByClassName("cs-score")[0].innerHTML = `&nbsp;&nbsp;&nbsp;${localStorage.getItem('cs_points')}`;
}

// document.getElementsByClassName("y-score")[0].innerHTML = `&nbsp;&nbsp;${localStorage.getItem('user_points')}`;
// document.getElementsByClassName("cs-score")[0].innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${localStorage.getItem('cs_points')}`;

let lower_half = document.getElementById("lower-half");

let stone = document.getElementsByClassName("stone")[0];
let scissor = document.getElementsByClassName("scissor")[0];
let paper = document.getElementsByClassName("paper")[0];
let lines = document.getElementsByClassName("lines")[0];

stone.addEventListener("click",()=>{
  let cs_selection = Math.floor(1 + Math.random() * 3);
  let image; let x; let y; let user_color; let cs_color;
  let cs_score = document.getElementsByClassName("cs-score")[0];
  let y_score = document.getElementsByClassName("y-score")[0];
  if (cs_selection === 1){
    image = 'paper';
    x = 25; y = 25;
  }
  else if (cs_selection === 2){
    image = 'scissor';
    x = 85; y = 45;
  }
  else{
    image = 'stone';
    x = 20; y = 35;
  }
  let wins = who_wins('stone',image);
  console.log(wins);

  if (wins === 1){
    user_color = 'BD00FF';
    cs_color = 'FFA943';
    // y_score.innerHTML = `&nbsp;&nbsp;${update_score_user()}`;
    if (Number(localStorage.getItem('user_points')) <= 9){
      y_score.innerHTML = `&nbsp;&nbsp;${update_score_user()}`;
    }
    else{
      y_score.innerHTML = `&nbsp;${update_score_user()}`;
    }
  }
  else if (wins === -1){
    user_color = 'FFA943';
    cs_color = 'BD00FF';
    // cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${update_score_cs()}`;
    if (Number(localStorage.getItem('cs_points')) <= 9){
      cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${update_score_cs()}`;
    }
    else{
      cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;${update_score_cs()}`;
    }
  }
  else {
    user_color = '0074B6';
    cs_color = user_color;
  }

  scissor.style.display = "none";
  paper.style.display = "none";
  lines.style.display = "none";

  let stone_icon = document.getElementsByClassName("stone-icon")[0];
  stone.style.cssText = `
  position: absolute;
  transform: translate(-180%, 190%);
  border: 16px solid #${user_color};
  `;

  let computer_answer = document.createElement("div");
  computer_answer.classList.add("computer-answer");
  computer_answer.innerHTML = `<img src="../assets/${image}.png" alt="" class="cs-scissor-icon">`;
  computer_answer.style.cssText = `
    cursor: pointer;
    width: 110px;
    height: 110px;
    background-color: #ffffff;
    filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));
    border-radius: 50%;
    border: 16px solid #${cs_color};
    transform: translate(220%, 190%);
  `;
  document.getElementsByClassName("gestures-icons")[0].appendChild(computer_answer);
  document.getElementsByClassName("cs-scissor-icon")[0].style.cssText = `
    position: absolute;
    transform: translate(${x}%, ${y}%);
  `;

  if (wins == 1){
    add_ripple_effect_user_wins();
  }
  else if (wins == -1){
    add_ripple_effect_cs_wins();
  }

  add_specs(wins);
})

scissor.addEventListener("click",()=>{
  let cs_selection = Math.floor(1 + Math.random() * 3);
  let image; let x; let y; let user_color; let cs_color;
  let cs_score = document.getElementsByClassName("cs-score")[0];
  let y_score = document.getElementsByClassName("y-score")[0];
  if (cs_selection === 1){
    image = 'paper';
    x = 25; y = 25;
  }
  else if (cs_selection === 2){
    image = 'scissor';
    x = 85; y = 45;
  }
  else{
    image = 'stone';
    x = 20; y = 35;
  }
  let wins = who_wins('scissor',image);
  console.log(wins);

  if (wins === 1){
    user_color = 'BD00FF';
    cs_color = 'FFA943';
    // y_score.innerHTML = `&nbsp;&nbsp;${update_score_user()}`;
    if (Number(localStorage.getItem('user_points')) <= 9){
      y_score.innerHTML = `&nbsp;&nbsp;${update_score_user()}`;
    }
    else{
      y_score.innerHTML = `&nbsp;${update_score_user()}`;
    }
  }
  else if (wins === -1){
    user_color = 'FFA943';
    cs_color = 'BD00FF';
    // cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${update_score_cs()}`;
    if (Number(localStorage.getItem('cs_points')) <= 9){
      cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${update_score_cs()}`;
    }
    else{
      cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;${update_score_cs()}`;
    }
  }
  else {
    user_color = '0074B6';
    cs_color = user_color;
  }
  stone.style.display = "none";
  paper.style.display = "none";
  lines.style.display = "none";
  let scissor_icon = document.getElementsByClassName("scissor-icon")[0];
  scissor.style.cssText = `
  position: absolute;
  transform: translate(-180%, 190%);
  border: 16px solid #${user_color};
  `;

  var computer_answer = document.createElement("div");
  computer_answer.classList.add("computer-answer");
  computer_answer.innerHTML = `<img src="../assets/${image}.png" alt="" class="cs-scissor-icon">`;
  computer_answer.style.cssText = `
    cursor: pointer;
    width: 110px;
    height: 110px;
    background-color: #ffffff;
    filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));
    border-radius: 50%;
    border: 16px solid #${cs_color};
    transform: translate(220%, 190%);
  `;
  document.getElementsByClassName("gestures-icons")[0].appendChild(computer_answer);
  document.getElementsByClassName("cs-scissor-icon")[0].style.cssText = `
    position: absolute;
    transform: translate(${x}%, ${y}%);
  `;

  if (wins == 1){
    add_ripple_effect_user_wins();
  }
  else if (wins == -1){
    add_ripple_effect_cs_wins();
  }

  add_specs(wins);

})

paper.addEventListener("click",()=>{
  let cs_selection = Math.floor(1 + Math.random() * 3);
  let image; let x; let y; let user_color; let cs_color;
  let cs_score = document.getElementsByClassName("cs-score")[0];
  let y_score = document.getElementsByClassName("y-score")[0];
  if (cs_selection === 1){
    image = 'paper';
    x = 25; y = 25;
  }
  else if (cs_selection === 2){
    image = 'scissor';
    x = 85; y = 45;
  }
  else{
    image = 'stone';
    x = 20; y = 35;
  }
  //who wins
  let wins = who_wins('paper',image);
  console.log(wins);

  if (wins === 1){
    user_color = 'BD00FF';
    cs_color = 'FFA943';
    // y_score.innerHTML = `&nbsp;&nbsp;${update_score_user()}`;
    if (Number(localStorage.getItem('user_points')) <= 9){
      y_score.innerHTML = `&nbsp;&nbsp;${update_score_user()}`;
    }
    else{
      y_score.innerHTML = `&nbsp;${update_score_user()}`;
    }
  }
  else if (wins === -1){
    user_color = 'FFA943';
    cs_color = 'BD00FF';
    // cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${update_score_cs()}`;
    if (Number(localStorage.getItem('cs_points')) <= 9){
      cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${update_score_cs()}`;
    }
    else{
      cs_score.innerHTML = `&nbsp;&nbsp;&nbsp;${update_score_cs()}`;
    }
  }
  else {
    user_color = '0074B6';
    cs_color = user_color;
  }

  scissor.style.display = "none";
  stone.style.display = "none";
  lines.style.display = "none";
  let paper_icon = document.getElementsByClassName("paper-icon")[0];
  paper.style.cssText = `
  position: absolute;
  transform: translate(-286%, 153%);
  border: 16px solid #${user_color};
  `;

  var computer_answer = document.createElement("div");
  computer_answer.classList.add("computer-answer");
  computer_answer.innerHTML = `<img src="../assets/${image}.png" alt="" class="cs-scissor-icon">`;
  computer_answer.style.cssText = `
    cursor: pointer;
    width: 110px;
    height: 110px;
    background-color: #ffffff;
    filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));
    border-radius: 50%;
    border: 16px solid #${cs_color};
    transform: translate(220%, 190%);
  `;
  document.getElementsByClassName("gestures-icons")[0].appendChild(computer_answer);
  document.getElementsByClassName("cs-scissor-icon")[0].style.cssText = `
    position: absolute;
    transform: translate(${x}%, ${y}%);
  `;
  if (wins == 1){
    add_ripple_effect_user_wins();
  }
  else if (wins == -1){
    add_ripple_effect_cs_wins();
  }

  add_specs(wins);

})