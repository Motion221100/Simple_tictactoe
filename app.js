const boxes = Array.from(document.querySelectorAll(".boxes"));
const msgDet = document.getElementById("msg-determine");
const restart = document.getElementById("restart");
const gameBoard = document.getElementById("playboard");
let playerOne = "X";
let playerTwo = "O";
let ifPlayerOne = true;
let multiplier = 0;

const checkDraw = () => {
    if (multiplier === 9) {
        msgDet.classList.remove("d-none");
        msgDet.textContent = "DRAW!"
    }
}

const checkPlayerWin = (arr) => {
    switch(arr[0].textContent + arr[1].textContent + arr[2].textContent) {
        case "XXX":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent = "PlayerOne Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;

            break;
        case "OOO":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent ="PlayerTwo Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;
            break;
    }
    switch(arr[3].textContent + arr[4].textContent + arr[5].textContent) {
        case "XXX":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent = "PlayerOne Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;

            break;
        case "OOO":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent ="PlayerTwo Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;
            break;
    }
    switch(arr[6].textContent + arr[7].textContent + arr[8].textContent) {
        case "XXX":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent = "PlayerOne Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;

            break;
        case "OOO":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent ="PlayerTwo Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;
            break;
    }
    switch(arr[0].textContent + arr[3].textContent + arr[6].textContent) {
        case "XXX":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent = "PlayerOne Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;

            break;
        case "OOO":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent ="PlayerTwo Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;
            break;
    }
    switch(arr[1].textContent + arr[4].textContent + arr[7].textContent) {
        case "XXX":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent = "PlayerOne Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;

            break;
        case "OOO":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent ="PlayerTwo Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;
            break;
    }
    switch(arr[2].textContent + arr[5].textContent + arr[8].textContent) {
        case "XXX":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent = "PlayerOne Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;

            break;
        case "OOO":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent ="PlayerTwo Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;
            break;
    }
    switch(arr[0].textContent + arr[4].textContent + arr[8].textContent) {
        case "XXX":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent = "PlayerOne Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;

            break;
        case "OOO":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent ="PlayerTwo Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;
            break;
    }
    switch(arr[2].textContent + arr[4].textContent + arr[6].textContent) {
        case "XXX":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent = "PlayerOne Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;

            break;
        case "OOO":
            msgDet.classList.remove("d-none");
            restart.classList.remove("d-none");
            msgDet.textContent ="PlayerTwo Wins!";
            playerOne = undefined;
            playerTwo = undefined;
            multiplier = undefined;
            break;
    }
}


for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        if (ifPlayerOne) {
            boxes[i].textContent = playerOne;
            ifPlayerOne = false;
            multiplier++;
        }else {
            boxes[i].textContent = playerTwo;
            ifPlayerOne = true;
            multiplier++;
        }
        checkDraw();
        checkPlayerWin(boxes);
    }, {once:true});
}
