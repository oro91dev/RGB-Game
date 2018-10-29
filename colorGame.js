let colors = [];
let pickedColor;
let numSquares = 9;
let colorDisplay = document.getElementById("colorDisplay");
let squares = document.querySelectorAll(".square");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                numSquares = 3;
            }
            else if(this.textContent === "medium") {
                numSquares = 6;   
            }
            else {
                numSquares = 9;
            }
            reset();
    
        });
    }
}

function setUpSquares() {
    for(let i = 0; i < squares.length; i++){
    
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!"
            }
        });
    }
}




function reset() {
    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    this.textContent = "New Colors";

    for(let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "#9b59b6";
}

/*easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
});*/

resetButton.addEventListener("click", function() {
 reset();
})



function changeColors(color) {
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function generateRandomColors(num){
    var arr = [];

    for(var i= 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function newGenerateRandomColors(num){
    var arr = [];

    for(var i= 0; i < num; i++){
        arr.push(newRandomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

/*function newRandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var o = Math.random() * 1;
    return "rgb(" + r + ", " + g + ", " + b + ", " + o +")";
}*/