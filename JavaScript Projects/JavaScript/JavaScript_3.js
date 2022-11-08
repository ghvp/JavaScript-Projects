//data html attribute
function data_test(test) {
    var testType = test.getAttribute("data-test");
    alert(testType + " is the " + test.innerHTML + " in the list!");
}