function grid () {
    const container = document.getElementById("container");
    let squares = document.getElementById("squares");
    console.log(squares)
    // creates 16 grid rows of size 1fr
    container.style.gridTemplateRows = 'repeat(16, 1fr)';
    // creates 16 grid columns of size 1fr
    container.style.gridTemplateColumns = 'repeat(16, 1fr)';

    for (let i=0; i<=256; i++){
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "blue";
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
        })
        container.insertAdjacentElement("beforeend", newDiv)    
    }
}

grid()