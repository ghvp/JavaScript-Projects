function Ride_Function()  {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You're too short":"You're tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Using the ternary operator to check whether or not a user is old enough to vote
function Vote_Function()  {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "Sorry! You're too young":"Congrats! You're old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote";
}

//vehicle 
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()  {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//using the NEW keyword
function cat(Age, Breed, Color) {
    this.cat_Age = Age;
    this.cat_Breed = Breed;
    this.cat_Color = Color;
}
var Pumpkin = new cat(2, "Tabby", "Orange");
var Cole = new cat(4, "Bombay", "Black");
function cat_Function() {
    document.getElementById("New_and_This").innerHTML =
    "Pumpkin is " + Pumpkin.cat_Age + " years old, " + "his breed is " + Pumpkin.cat_Breed + ". And he is " + Pumpkin.cat_Color + " colored.";
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}