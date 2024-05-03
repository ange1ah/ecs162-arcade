let rollButton = document.getElementById("roll-dice-button");
rollButton.addEventListener("click", rollDice)

function rollDice() {
    rollButton.classList.add("shake"); // Shake the button
    let result = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
    document.getElementById("dice-result").textContent = "You rolled: " + result + "! \u2728"; // Display result
    setTimeout(removeShake, 800); // Stop shaking
}

function removeShake() {
    rollButton.classList.remove("shake");
}