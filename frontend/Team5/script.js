function submitProfile() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var income = document.getElementById('income').value;

    // Displaying profile information on webpage
    var displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = `
        <h2>Profile Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Income:</strong> ${income}</p>
    `;

    // Sending profile information to console
    console.log("Profile Information:");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Income:", income);

    // Here you would typically continue with additional features such as risk assessment,
    // portfolio modeling, automated account opening, etc.
}