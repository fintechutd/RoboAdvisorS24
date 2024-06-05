
function displayInput() {
    var input = document.getElementById('inputField').value; //getes the value from inputField and assigns it to var input
    document.getElementById('displayArea').innerHTML = input; //assigns inner text of displayArea to input
    console.log(input); //for debugging
}