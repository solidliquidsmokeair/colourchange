const button = document.getElementById("clickMe")

// Manual color change test
// var array = ['blue', 'red', 'orange', 'yellow', 'gray', 'green']
// var color = 0

var randomColor = 


button.addEventListener("click", function(){ 

randomColor = Math.floor(Math.random()*16777215).toString(16);

    // if(color == 5){
    // color = -1}

    // color++

    document.body.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
})