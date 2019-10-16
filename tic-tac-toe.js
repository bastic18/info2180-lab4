let box; 
let alternate = false;
let msgBox;

window.onload= function(){ 
    box = document.querySelector("#board");
    box = box.querySelectorAll("div"); 
    msgBox = document.querySelector("#status");
    let button = document.querySelector ("button");
    
    box.forEach(element => {
        element.classList.add("square");
    });


    box.forEach(element => {
        element.addEventListener("click", function(){
            if (!(element.getAttribute("class").includes("X") || element.getAttribute("class").includes("O"))) {
                if (alternate === false) {
                    element.className="square X";
                    element.innerHTML = "X";
                    alternate = true;
                } else if (alternate === true) {
                    element.className="square O";
                    element.innerHTML = "O";
                    alternate = false;
                }
            }
          
        });
    
    button.addEventListener("click", function(){ 
        box.forEach(element => {
            element.className= "square";
            element.innerHTML = "";
        });

        msgBox.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        msgBox.classList.remove("you-won");
    });
        element.addEventListener("mouseover", function(){
            element.classList.add("hover");
        });

        element.addEventListener("mouseleave", function(){ 
            element.classList.remove("hover");

        });





    });
}