const realScore = 0;
const mechScore = 0;

//part of span tag
const realPlayerScore = document.getElementById("user-score");
const mechPlayerScore = document.getElementById("mech-score");
const scoreKeepDiv = document.querySelector(".score-keep");
const playersScoreDiv = document.querySelector(".players-score")
const rockDiv = document.getElementById("rock-opt");
const paperDiv = document.getElementById("paper-opt");
const scissorsDiv = document.getElementById("scissor-opt");

//mechanical choice
function getMechChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

//real choice
function game(realChoice) {
    const mechChoice = getMechChoice();
    switch (realChoice + mechChoice) {
        case "rockpaper":
        case "paperrock":
        case "scissorpaper":
            console.log("User Wins!");
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            console.log("User Loses!");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            console.log("Draw!");
            break;
    }
}


function mainOptions() {
    rockDiv.addEventListener("click", function() {
        game("rock-opt");
    })

    paperDiv.addEventListener("click", function() {
        game("paper-opt");   
    })

    scissorsDiv.addEventListener("click", function() {
        game("scissor-opt");
    }) 

}