//creating a function that uses the while loop
function Call_Loop()  { //defining the loop
    var digit = " "; //assigning the the digit variable a value of " " so it isn't set at a number like 0
    var A = 1; //giving the A variable a value of one to increment our counter by 1
    while (A < 11) { //while A(1) is less than 11 digit will be added to A(1) and then A will slowly increment by 1 until the conditon is met
        digit += "<br>" + A;
        A++;
    }
    document.getElementById("loop").innerHTML = digit; //displays the output
}

//using the length property. length returns the value of a string
function length_test() {
    var text = "Return the length of this string ";
    var length = text.length
    document.getElementById("length").innerHTML = length;
}

//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //array of data assigned to the variable "instruments"
var Content = ""; //content is assigned no value 
var Y; //variable Y is declared but not assigned anything yet
function for_loop() { //defining the function 
    for (Y = 0; Y < Instruments.length; Y++) { //Y is given the value 0 then if Y is less than the instrument length then Y will increment up by 1 and go down the list
        Content += Instruments[Y] + "<br>"; //i think the content variable is added to instruments with the addition of Y and it's increment??
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //displays the output
}

//making an array
function array_test() {
    var item = []; //the brackets are where the index of the elements are placed
    item[1] = "first item";
    item[2] = "second item";
    item[3] = "third item";
    item[4] = "fourth item";
    document.getElementById("array").innerHTML = "this is the " + item[4] + " in the array!";
}

//using the let keyword
var H = 82;
document.write(H);
{
    let I = 44; //the let keyword cannot be accessed outside of it's block
    document.write("<br>" + I);
}