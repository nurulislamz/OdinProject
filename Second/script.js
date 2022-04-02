/* 
1)  Create a function where the computer randomly choose rock, paper or scissors
2)  player selects one of three values: paper or scissors
3)  computer selects one of three values based on rock, paper and scissors
4)  calculate if the player or the computer won 
5)  
*/
let user_wins = 0;
let computer_wins = 0;

const data = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "paper",
};

// test if input is valid
function validateInput(input){
    while (true){
        if (Object.keys(data).includes(input.toLowerCase())){
            return true
        }
        else{
            return false
        }
    }
}

// display computer input

function computer_selection(){
    let random_choice = Math.floor(Math.random() * Object.keys(data).length);
    let computer_choice = Object.keys(data)[random_choice];

    console.log(computer_choice);
    return computer_choice
}


// calculate if player or computer won
function get_result(user_input, computer_input){
    if(user_input == computer_input){
        return "draw";
    }
    if(data[user_input] == computer_input){
        return "user wins";
    }
    else {
        return "computer wins";
    }
}


// function that activates whenever the user inputs a value
const form_submit = document.getElementById("submit");

form_submit.addEventListener("click", function(event) {
    // gets user and player inputs
    event.preventDefault();
    user_input = document.getElementById("user_choice").value;
    computer_input = computer_selection();
    console.log(user_input);

    // if the input is valid, updates html to show inputs
    if (validateInput(user_input)){
        document.getElementById("user_output").innerText = "You picked: " + user_input;
        document.getElementById("cc_output").innerHTML = "Computer picked: " + computer_input;

        // displays who wons and increments score counter 
        if (get_result(user_input, computer_input) == "draw"){
            document.getElementById("result").innerText = "Draw!";
        }
        else if (get_result(user_input, computer_input) == "user wins"){
            document.getElementById("result").innerText = "You win!";
            user_wins += 1;
            document.getElementById("user_wins").innerText = "User wins: " + user_wins
        }
        else {
            document.getElementById("result").innerText = "Computer win!";
            computer_wins += 1;
            document.getElementById("computer_wins").innerText = "Computer wins: " + computer_wins
        }
    }
    else {
        alert("Invalid input")
    }
} )