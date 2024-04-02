function btn(value) {
    var inputField = document.getElementById("input");
    inputField.value += value;
}
function answer() {
    var inputField = document.getElementById("input");
    var output = inputField.value;
    inputField.value = eval(output);
}
function clearInput(){
    var inputField = document.getElementById("input");
    inputField.value = "";
}