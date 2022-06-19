let calcNum = document.querySelectorAll(".number");
let calcOperator = document.querySelectorAll(".operator");
let calcDisplay1 = document.getElementById("display1");
let calcDisplay2 = document.getElementById("display2");
let calcClearBtn = document.getElementById("clear");
let calcBackBtn = document.getElementById("back");
let calcEquals = document.getElementById("eq");
let calcErase = document.getElementById("back")
//console.log('Operatin  :   ',operate('*',30,10));

calcDisplay1.textContent = "";
calcDisplay2.textContent = "";
clearDisplay = true;
let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let result = "";
calcDisplay1.textContent = 0;

function clearAll(){
  storedNumber = "";
  clickedOperator = "";
  firstNumber = "";
  result = "";
  calcDisplay2.textContent = '';
  calcDisplay1.textContent = "";
}
//clear the display
calcClearBtn.addEventListener("click", function () {
  clearAll();
});

//get all the action event from number keys
calcNum.forEach((key) => {
  key.addEventListener("click", () => {
    //check if the result have empty or not, to refresh number key from start after equals is clicked
    if(!clearDisplay){
      //clearAll();
      calcDisplay2.textContent = '';
      storedNumber='';
      clearDisplay=true;
    }
    storedNumber += key.innerHTML;
    calcDisplay1.textContent = storedNumber;
    
  });
});

//get the action event from operator keys
calcOperator.forEach((key) => {
  key.addEventListener("click", () => {
    //for multiple answer in the operation
    if (firstNumber && storedNumber) {
      calculate();
    }
    //clear the result display
    calcDisplay2.textContent = "";
    // save the first number
    firstNumber = storedNumber;

    // get the operator that was clicked
    clickedOperator = key.textContent;
    calcDisplay1.textContent = storedNumber + clickedOperator;
    storedNumber = "";    
  });
});

const calculate = () => {
    console.log("FirstNumber: " + firstNumber + "  Stored: " + storedNumber);
    console.log("ooooperator: ", clickedOperator);
    const result = operate(
        clickedOperator,
        parseFloat(firstNumber),
        parseFloat(storedNumber)
    );

  console.log("Result :  ",result);
  //when operator is clicked it will take the result in the display
  storedNumber = result;
  calcDisplay2.textContent = result;
};

calcEquals.addEventListener("click", function(){
    calculate();
    firstNumber=0;
    clearDisplay=false;//flag to initiate number operation after calculation
});

//do the calculation involving opeerators
function operate(operator,num1, num2) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "x":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
    }
  };
function add(x, y) {
  return x + y;
}

function subtract(num, num1) {
  return num - num1;
}

function divide(num, num1) {
  if (num1 == 0) {
    calcDisplay2.textContent = '';
    calcDisplay1.textContent =0;
    alert('Syntax Error')
  } else {
    return num / num1;
  }
}

function multiply(x, y) {
  return x * y;
}

calcErase.addEventListener('click', function(){
  let num = storedNumber.toString().split('').slice(0, -1).join('');
  storedNumber = Number(num);
  console.log('this is it : ',storedNumber)
  calcDisplay1.textContent = storedNumber;
});