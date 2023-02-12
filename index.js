const inp = document.querySelectorAll("input");

inp.forEach((ele) => {
  ele.addEventListener("click", mark);
});

const win1 = new Set(["1", "2", "3"]);
const win2 = new Set(["4", "5", "6"]);
const win3 = new Set(["7", "8", "9"]);
const win4 = new Set(["1", "4", "7"]);
const win5 = new Set(["2", "5", "8"]);
const win6 = new Set(["3", "6", "9"]);
const win7 = new Set(["1", "5", "9"]);
const win8 = new Set(["7", "5", "3"]);

let player1 = [];
let player2 = [];

let counter = 0;

function winchecker(arrofsets, arr) {
  let flag = false;
  arrofsets.forEach((set) => {
    let wincounter = 0;
    arr.forEach((ele) => {
      if (set.has(ele)) wincounter++;
    });
    if (wincounter == 3) {
      flag = true;
    }
  });
  if (flag) return "won";
}

function searchforwin(boxnumber, playerarr) {
  switch (boxnumber) {
    case "1":
      if (winchecker([win1, win4, win7], playerarr) == "won") {
        return true;
      }
      break;
    case "2":
      if (winchecker([win1, win5], playerarr) == "won") return true;
      break;
    case "3":
      if (winchecker([win1, win6, win8], playerarr) == "won") return true;
      break;
    case "4":
      if (winchecker([win2, win4], playerarr) == "won") return true;
      break;
    case "5":
      if (winchecker([win1, win8, win5, win7], playerarr) == "won") return true;
      break;
    case "6":
      if (winchecker([win2, win6], playerarr) == "won") return true;
      break;
    case "7":
      if (winchecker([win3, win4, win8], playerarr) == "won") return true;
      break;
    case "8":
      if (winchecker([win3, win5], playerarr) == "won") return true;
      break;
    case "9":
      if (winchecker([win3, win6, win7], playerarr) == "won") return true;
      break;
  }
}

let winner = document.getElementById("win");
function mark(e) {
  counter++;
  if (counter % 2 == 1) {
    e.target.value = "X";
    player1.push(e.target.id);
    console.log(searchforwin(e.target.id, player1));
    if (searchforwin(e.target.id, player1)) {
      inp.forEach((ele) => {
        ele.disabled = "true";
      });
      console.log("playerone");
      winner.innerText = "Player1 WINS ";
    }
  } else {
    e.target.value = "O";
    player2.push(e.target.id);
    if (searchforwin(e.target.id, player2)) {
      inp.forEach((ele) => {
        ele.disabled = "true";
      });

      winner.innerText = "Player2 WINS ";
    }
  }
  e.target.disabled = "true";
}
