window.onload= function(){

    var children= document.getElementById("board").children;
    for (var i=0; i<= children.length-1; i++){
        children[i].classList.add("square");
    }


}