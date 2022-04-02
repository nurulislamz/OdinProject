/* 
1)  Create a function where the computer randomly choose rock, paper or scissors
2)  player selects one of three values: paper or scissors
3)  computer selects one of three values based on rock, paper and scissors
4)  calculate if the player or the computer won 
5)  
*/

const data = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "paper",
}

// 1) get user input

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

// function that activates whenever the user inputs a value
const form_submit = document.getElementById("submit");

form_submit.addEventListener("click", function(event) {
    event.preventDefault();
    user_input = document.getElementById("user_choice").value;
    computer_input = computer_selection()
    console.log(user_input);

    if (validateInput(user_input)){
        document.getElementById("user_output").innerText = "You picked: " + user_input;
        document.getElementById("cc_output").innerHTML = "Computer picked: " + computer_input

        if (get_result(user_input, computer_input) == "draw"){
            document.getElementById("result").innerText = "Draw!"
        }
        else if (get_result(user_input, computer_input) == "user wins"){
            document.getElementById("result").innerText = "You win!"
        }
        else {
            document.getElementById("result").innerText = "Computer win!"
        }
    }
    else {
        alert("Invalid input")
    }
} )

// 2) display computer input

function computer_selection(){
    let random_choice = Math.floor(Math.random() * Object.keys(data).length);
    let computer_choice = Object.keys(data)[random_choice];

    console.log(computer_choice);
    return computer_choice
}

// 3) calculate if player or computer won
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

