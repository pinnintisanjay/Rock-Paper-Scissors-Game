let userscore = 0;
let compscore = 0;

const result = document.querySelector("#result");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#computer-score");
const options = document.querySelectorAll(".option");
options.forEach(option => {
  option.addEventListener("click", () => {
    const userchoice = option.getAttribute("id");
    gameplay(userchoice);

  })
});
const comchoice = () => {
  const allopt = ["rock", "paper", "scissors"];
  const rdmidx = Math.floor(Math.random() * 3);
  return allopt[rdmidx];
}

const gameplay = (userchoice) => {
  const genchoice = comchoice();
  console.log(userchoice);
  console.log(genchoice);
  let isuserwin = true;
  if (userchoice === genchoice) {
    draw();
    return;
  }
  else {
    if (userchoice === "rock") {
      isuserwin = genchoice === "paper" ? false : true;
    }
    else if (userchoice === "paper") {
      isuserwin = genchoice === "scissors" ? false : true;
    } else {
      isuserwin = genchoice === "rock" ? false : true;
    }
    console.log("is user win:", isuserwin);
  }

  showwinner(isuserwin);
}
const draw = () => {
  console.log("game was draw");
  result.innerText = "Game Was Draw! Try Again..";
  result.style.backgroundColor = "black";

}
const showwinner = (isuserwin) => {
  if (isuserwin == true) {
    userscore++;
    user_score.innerText = userscore;
    result.innerText = "You Won!";
    result.style.backgroundColor = "green";
  } else {
    compscore++;
    comp_score.innerText = compscore;
    result.innerText = "You Lost..";
    result.style.backgroundColor = "red";
  }
}

