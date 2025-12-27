let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let winnerText = document.querySelector("#winner");
let newgamebtn = document.querySelector("#newgamebtn");
let declare = document.querySelector(".declare");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// Reset Game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    declare.classList.add("hide");
};

// Box click logic
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Show Winner
const showWinner = (player) => {
    winnerText.innerText = `Congratulations! Winner is ${player}`;
    declare.classList.remove("hide");
    disableBoxes();
     if (player === "O") {
        saveScore("tic-tac-toe", 1); // user win
    } else {
        saveScore("tic-tac-toe", 0); // user loss
    }
};


// Disable boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Enable boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// Check Winner
const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return;
            }
        }
    }
};
async function saveScore(gameName, scoreValue) {
  const { data: { session } } = await supabaseClient.auth.getSession();

  if (!session) {
    alert("Not logged in");
    return;
  }

  const { error } = await supabaseClient.from("scores").insert([
  {
    user_id: session.user.id,
    game: gameName,
    score: scoreValue
  }
])

  if (error) {
    console.error("insert error",error);
  } else {
    console.log("Score saved!");
  }
}

// Button events
resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);
