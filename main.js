// Element

let screen = document.getElementById("result");
let iconSun = document.getElementById('icon-sun');
let iconMoon = document.getElementById("icon-moon");

//variables
let firstNum = 0;
let secondNum = 0;
let operation = "";
let result = 0;

//functions =>

function numFun(num) {
  // console.log(num);
  if (operation == "") {
    console.log(firstNum);
    firstNum = (firstNum * 10) + num;
    // console.log(firstNum);
  } else {
    secondNum = (secondNum *10) + num;
  }
  screen.innerHTML = operation == "" ? firstNum : secondNum;
}

//plus
function plus() {
  operation = "+";
  screen.innerHTML = operation;
}

//Minus
function minus() {
  operation = "-";
  screen.innerHTML = operation;
}

//Multiply
function multiply() {
  operation = "*";
  screen.innerHTML = operation;
}

//Divide
function divide() {
  operation = "/";
  screen.innerHTML = operation;
}

//Result
function Result() {
  try {
    switch (operation) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "*":
        result = firstNum * secondNum;
        break;
      case "/":
        if (secondNum === 0) {
          throw "Cannot Divide By Zero"
        } else {
          result = firstNum / secondNum;
        }
        break
  }
  screen.innerHTML = result;
  } catch (e) {
    screen.innerHTML = "لايمكن القسمه علي صفر";
  }
}

//Delete
function Delete() {
  firstNum = 0;
  secondNum = 0;
  operation = "";
  screen.innerHTML = 0;
}

// Light Of WebSite
iconMoon.addEventListener("click", () => {
  document.body.style.background = "#223659";
  iconSun.style.display = "block";
  iconMoon.style.display = "none"; 
});

iconSun.addEventListener("click", () => {
  // console.log("Done");
  document.body.style.background = "white";
  iconMoon.style.display = "block";
  iconSun.style.display = "none"; 
});
