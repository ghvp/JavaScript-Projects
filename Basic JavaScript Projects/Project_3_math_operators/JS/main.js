//creating a function that returns the result of an addition operation
function addition_Function()  {
    var addition = 10 + 25;
    document.getElementById("Math").innerHTML = "10 + 25 = " + addition;
}

//for subtraction
function subtraction_Function()  {
    var Subtraction = 20 - 8;
    document.getElementById("subtraction_Operator").innerHTML = "20 - 8 = " + Subtraction;
}

//multiplication
function multiplication_Function() {
    var multiply = 6 * 3;
    document.getElementById("multiplication_Operator").innerHTML = "6 * 3 = " + multiply;
}

//division
function division_Function()  {
    var divide = 60 / 5;
    document.getElementById("division_Operator").innerHTML = "60 / 5 = " + divide;
} 

//For multiple operations
function more_Math()  {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("multiple_Operations").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

//modulus(remainder) operator 
function remainder_Function()  {
    var remainder = 25 % 6 ;
    document.getElementById("remainder_Operator").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

//Negation operator
function negation_Function()  {
    var A = 25;
    document.getElementById("negation_Operator").innerHTML = -A;
}

//increment operator counts one step up
var B = 25;
B++;
document.write(B);

//decrement operator counts one step down
var C = 9;
C--;
document.write(C);

//random number from 0 to 100
window.alert(Math.random() * 100);

//random number from 0 to 1
window.alert(Math.random());

//Math object methods
document.write(Math.round(4.6));