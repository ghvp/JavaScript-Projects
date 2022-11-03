//Using typeof operator
document.write(typeof 10);
document.write(typeof "word");

//using the type coercion. This will combine "22" and seven and output 227
document.write("22" + 7);

//Testing out NaN. This should return as NaN since 0/0 is not a number
function nan_Function()  {
    document.getElementById("NaN").innerHTML = 0/0;
    
}

//Boolean
document.write(20 > 5);
document.write(20 < 5); 

//console log
console.log(22 + 8);

//console log and boolean
console.log(30 > 29);

//using double equal sign ==
document.write(1 == 1);
document.write(16 == 27);

//using triple equal sign
//same value and same type so the output with be true
A = 10
B = 10
document.write(A === B);

//different data type and different value so the output is false
C = '11'
D = 12
document.write(C === D);

//return false by writing different data type but the same value 
E = 13
F = '13'
document.write(E === F);

//return false by writing the same data type but different value for both
G = 14
H ='14'
document.write(G === H);

//AND operator that'll display true
document.write(10 > 8 && 2 > 1);

//AND operator to return false
document.write(22 < 1 && 9 < 5);

//OR operator that'll return true
document.write(5 > 10 || 10 < 28);

//OR operator that'll return false
document.write(1 > 55 || 26 < 2);

//NOT operator returns true
function not_Function()  {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

//NOT operator returns false
function not_Function2()  {
    document.getElementById("Not2").innerHTML = !(50 > 4);
}