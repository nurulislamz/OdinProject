/* 
1)  Create a function where the computer randomly choose rock, paper or scissors
2)  player selects one of three values: paper or scissors
3)  computer selects one of three values based on rock, paper and scissors
4)  calculate if the player or the computer won 
5)  
*/
const choices = ["rock", "paper", "scissors"];

// 1) get user input
let form_submit = document.getElementById("submit");
let user_input =  document.getElementById("user_choice").value;


// test if input is valid
function validateInput(input){
    while (true){
        if (choices.includes(input.toLowerCase())){
            return true
        }
        else{
            return false
        }
    }
}

// 2) display computer input

function computer_selection(){
    let random_choice = Math.floor(Math.random() * choices.length);
    let computer_choice = choices[random_choice];

    console.log(computer_choice);

    document.getElementById("cc_output").innerHTML = "Computer picked: " + computer_choice
}

// 3) calculate if player or computer won

// 4) main function
form_submit.addEventListener("click", function(event) {
    event.preventDefault();
    user_input = document.getElementById("user_choice").value;
    console.log(user_input);

    if (validateInput(user_input)){
        document.getElementById("user_output").innerText = "You picked: " + user_input;
        return user_input
    }
    else {
        alert("Invalid input")
    }
} )


