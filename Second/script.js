/* 
1)  Create a function where the computer randomly choose rock, paper or scissors
2)  player selects one of three values: paper or scissors
3)  computer selects one of three values based on rock, paper and scissors
4)  calculate if the player or the computer won 
5)  
*/
const choices = ["rock", "paper", "scissors"];

// 1) get user input
let form_submit = document.getElementById("submit")

form_submit.addEventListener("click", function(event) {
    event.preventDefault();
    user_input = document.getElementById("user_choice").value;
    console.log(user_input);

    if (choices.includes(user_input.toLowerCase())){
        document.getElementById("user_output").innerText = "You picked: " + user_input;
    }
    else {
        alert("Invalid input")
    }
    return true

} )

// 2) display computer input

let random_choice = Math.floor(Math.random() * choices.length);
computer_choice = choices[random_choice];

console.log(computer_choice);

document.getElementById("cc_output").innerHTML = "Computer picked: " + computer_choice

// 3) player selects


// 3) computer selects



// // 4) calculate if player or computer won