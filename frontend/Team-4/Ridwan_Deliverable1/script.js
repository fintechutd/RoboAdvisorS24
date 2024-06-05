function displayInput() {
    const input = document.getElementById('userInput').value;
    // Display in console
    console.log(input);
    // Display on webpage
    document.getElementById('displayArea').innerText = input;
}
