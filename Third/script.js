function grid () {
    squares = prompt("What size do you want ?x?", 16)
    while (squares > 100){
        squares = prompt("Value is too high. Must be below 100.", 16)
    }
    console.log(squares)
    const container = document.getElementById("container");
    container.replaceChildren();
    // creates 16 grid rows of size 1fr
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    // creates 16 grid columns of size 1fr
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

    for (let i=0; i<=squares*squares; i++){
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "blue";
        container.insertAdjacentElement("beforeend", newDiv)    
    }
    const count = 0;

    while (count < squares*squares){
        red = (Math.random() + count)*255
        green = (Math.random() + count)*255
        blue = (Math.random() + count)*255
        if (count <= 1) {
            count += 0.1
        }
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = `rgb(${red},${green},${blue})`;
        }
    )}
}
