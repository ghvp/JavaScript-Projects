//this function assigns 2 variables and prints them both when 
//the button is clicked
var A = "This is function text1.", B = " This is function text 2.";
function My_First_Function() {
    str = A + B;
    //document.write(A,B); Keeping this code here because It was my first approach
    document.getElementById("Test_Text").innerHTML = str;
}

//Operator assignment. Concatenating a string and displaying
// it once the paragraph element with the correct ID is clicked
function test_Function() {
    var sentence = "First test sentence.";
    sentence += " Second test sentence.";
    document.getElementById("Concatenate").innerHTML = sentence;
}