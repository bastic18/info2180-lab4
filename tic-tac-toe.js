let box; 
let alternate = false;
let msgBox;

window.onload= function(){ 
    box = document.querySelector("#board");
    box = box.querySelectorAll("div"); 
    msgBox = document.querySelector("#status");
    
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

        element.addEventListener("mouseover", function(){
            element.classList.add("hover");
        });

        element.addEventListener("mouseleave", function(){ 
            element.classList.remove("hover");

        });
    });
}