//Creating a dictionary
function first_Dictionary()  {
    var Vegatable = {
        Type: "Carrot",
        Color: "Orange",
        Seeds: "No"
    };
    //using the delete operator to delete Type: "Carrot"
    delete Vegatable.Type
    document.getElementById("Dictionary").innerHTML = Vegatable.Type;
}


