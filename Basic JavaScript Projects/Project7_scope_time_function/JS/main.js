//creating a globa and local variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

//local variable
function Add_numbers_3(){
    var A = 10;
    document.write(52 + A + "<br>");
}
function Add_Numbers_4() {
    console.log(A + 100);
}
Add_numbers_3();
Add_Numbers_4();

//if statements
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//my own if statement code
function test_2() {
    if (new Date().getHours() < 22) {
        document.getElementById("message").innerHTML = "test message";
    }
}   

//trying out else statments
function rental_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Rent = "You are old enough to rent a car!"
    }
    else {
        Rent = "You aren't old enough to rent a car"
    }
    document.getElementById("What_is_your_age").innerHTML = Rent;
}

//else if statement code
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon"
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}