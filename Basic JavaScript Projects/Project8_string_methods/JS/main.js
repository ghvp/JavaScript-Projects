//using the concat method to connect variables A, B, and C
function connect_Function() {
    var A = "Hello!";
    var B = " this should";
    var C = " make a full senetnce.";
    var entire_sentence = A.concat(B, C);
    document.getElementById("Connect").innerHTML = entire_sentence;
}

//using the slice method
function slice_test() {
    var First_part = "This sentence will be sliced";
    var Cut = First_part.slice(20,29);
    document.getElementById("slice").innerHTML = Cut;
}

//using the uppercase method
function upper_test() {
    var Up = "Hello world";
    var result = Up.toUpperCase();
    document.getElementById("upper_test1").innerHTML = result;
}

//using the search method
function search_test() {
    var D = "one, two, three";
    var look = D.search(/two/);
    document.getElementById("search").innerHTML = look;
}

//number method
function string_test() {
    var E = 19;
    document.getElementById("num_to_string").innerHTML = E.toString();
}

//precision method
function precision_test() {
    var F = 1.2873846389
    document.getElementById("precision").innerHTML = F.toPrecision(3);
}

//tofixed method
function fixed_test() {
    var G = 6.89898
    var H = G.toFixed(4)
    document.getElementById("fixed").innerHTML = H;
}