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
    const choices = ["rock-opt", "paper-opt", "scissor-opt"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
    // console.log(Math.floor(Math.random() * 3));
}

//real choice
function game(realChoice) {

    // console.log("optionChoice" + realChoice);
}

function mainOptions() {
    rockDiv.addEventListener("click", function() {
        game("rock-opt");
        // console.log("You clicked: Rock!");
    })

    paperDiv.addEventListener("click", function() {
        game("paper-opt");
        // console.log("You clicked: Paper!");
    })

    scissorsDiv.addEventListener("click", function() {
        game("scissor-opt");
        // console.log("You clicked: Scissors!");
    }) 

}