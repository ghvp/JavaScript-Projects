function validateForm() {
    let x = document.forms[myform][fname].value;
    if (x == " ") {
        alert("First name must be filled out");
        return false;
    }
}

//validating last name
function validateForm() {
    let x = document.forms[myform][lname].value;
    if (x == " ") {
        alert("Last name must be filled out");
        return false;
    }
}