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
                if (alternate === true) {
                    element.className="square O";
                    element.innerHTML = "O";
                    alternate = false;
                } else if (alternate === false) {
                    element.className="square X";
                    element.innerHTML = "X";
                    alternate = true;
                } }
            Check(box, msgBox);
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


    const Check = function(tile, boxnum){
        if (tile[0].innerHTML === tile[1].innerHTML && tile[1].innerHTML === tile[2].innerHTML && tile[0].innerHTML === tile[2].innerHTML && tile[2].innerHTML !== "") {   
            boxnum.classList.add("you-won");
            boxnum.innerHTML = ` Congratulations! ${tile[0].innerHTML} is the Winner`;
        } else if (tile[3].innerHTML === tile[4].innerHTML && tile[4].innerHTML === tile[5].innerHTML && tile[3].innerHTML === tile[5].innerHTML && tile[5].innerHTML !== "") { 
            boxnum.classList.add("you-won");
            boxnum.innerHTML = ` Congratulations!  ${tile[3].innerHTML} is the Winner`;
        } else if (tile[6].innerHTML === tile[7].innerHTML && tile[7].innerHTML === tile[8].innerHTML && tile[6].innerHTML === tile[8].innerHTML && tile[8].innerHTML !== "") { 
            boxnum.classList.add("you-won");
            boxnum.innerHTML = ` Congratulations!  ${tile[6].innerHTML} is the Winner`;
        } else if (tile[0].innerHTML === tile[3].innerHTML && tile[3].innerHTML === tile[6].innerHTML && tile[0].innerHTML === tile[6].innerHTML && tile[6].innerHTML !== "") { 
            boxnum.classList.add("you-won");
            boxnum.innerHTML = ` Congratulation!  ${tile[0].innerHTML} is the Winner`;
        } else if (tile[1].innerHTML === tile[4].innerHTML && tile[4].innerHTML === tile[7].innerHTML && tile[1].innerHTML === tile[7].innerHTML && tile[7].innerHTML !== "") { 
            boxnum.classList.add("you-won");
            boxnum.innerHTML = ` Congratulations ! ${tile[1].innerHTML} isthe Winner`;
        } else if (tile[2].innerHTML === tile[5].innerHTML && tile[5].innerHTML === tile[8].innerHTML && tile[2].innerHTML === tile[8].innerHTML && tile[8].innerHTML !== "") { 
            boxnum.classList.add("you-won");
            boxnum.innerHTML = `Congratulation! ${tile[2].innerHTML} is the Winner`;
        } else if (tile[0].innerHTML === tile[4].innerHTML && tile[4].innerHTML === tile[8].innerHTML && tile[0].innerHTML === tile[8].innerHTML && tile[8].innerHTML !== "") { 
            boxnum.classList.add("you-won");
            boxnum.innerHTML = ` Congratulations! ${tile[0].innerHTML} is the Winner`;
        } else if (tile[2].innerHTML === tile[4].innerHTML && tile[4].innerHTML === tile[6].innerHTML && tile[2].innerHTML === tile[6].innerHTML && tile[6].innerHTML !== "") {    
            boxnum.classList.add("you-won");
            boxnum.innerHTML = ` Congratulations! ${tile[2].innerHTML} is the Winner`;
        }
    };
}


