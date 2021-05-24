console.log("hi")

var totalp = 0;
var totalc = 0;
function playRound(playerSelection, computerSelection) {
    var playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        console.log(playerSelection, computerSelection);

        return 2
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        console.log(playerSelection, computerSelection);
        return 1
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log(playerSelection, computerSelection);
        return 1
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        console.log(playerSelection, computerSelection);

        return 1
    }
    else{
        console.log(playerSelection, computerSelection);

        return 0
    }
}
function computerPlay(){
    var random = Math.floor(Math.random() * 3);

    if (random === 1){
        return "rock"
    }
    else if (random === 2){
        return "paper"
    }
    else{
        return "scissor"
    }
}

function winnerwinner(numret){
    if (numret == 2){
        console.log("tie")
        return
    }
    else if( numret == 1){
        console.log("player")
        totalp += 1
    }
    else{
        console.log("comp")
        totalc += 1
    }
    return
}

const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let comp = computerPlay();
        let num = playRound(button.id, comp)
        winnerwinner(num);
        console.log(totalp);
        console.log(totalc);

        const p1 = document.getElementById("ps");
        const cp = document.getElementById("cs");
        p1.innerHTML = totalp;
        cp.innerHTML = totalc;

        if (totalp == 5){
            alert("player has won");
            totalp = 0;
            totalc = 0;
            const p1 = document.getElementById("ps");
            const cp = document.getElementById("cs");
            p1.innerHTML = totalp;
            cp.innerHTML = totalc;
        }
        else if( totalc == 5){
            alert("computer has won");
            totalp = 0;
            totalc = 0;
            const p1 = document.getElementById("ps");
            const cp = document.getElementById("cs");
            p1.innerHTML = totalp;
            cp.innerHTML = totalc;
        }
    });
});