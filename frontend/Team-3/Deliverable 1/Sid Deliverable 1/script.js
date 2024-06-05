function displayInput() {
    var inputText = document.getElementById("inputText").value;
    var displayArea = document.getElementById("displayArea");

    // Clear previous entries
    displayArea.innerHTML = "";

    // Display input on the webpage
    var displayText = document.createElement("p");
    displayText.innerText = "You entered: " + inputText;
    displayArea.appendChild(displayText);

    // Log the input to console
    console.log("Input: " + inputText);
}
