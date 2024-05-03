document.addEventListener("DOMContentLoaded", () => {
    const userOptions = document.querySelectorAll("#rps-user-options .rps-option-button");
    const opponentOptions = document.querySelectorAll("#rps-opponent-options .rps-option-button");
    const resultDisplay = document.getElementById("rps-result");
    const startOverButton = document.getElementById("rps-start-over");

    userOptions.forEach((button, index) => {
        button.addEventListener("click", () => {
            deselect(userOptions);
            button.classList.add("selected");
            const opponentChoice = Math.floor(Math.random() * 3); // random choice
            deselect(opponentOptions);
            opponentOptions[opponentChoice].classList.add("selected");
            const result = compareChoices(index, opponentChoice);
            resultDisplay.textContent = result;
        });
    });

    startOverButton.addEventListener("click", () => {
        deselect(userOptions);
        deselect(opponentOptions);
        resultDisplay.textContent = ""; // don't display result
    });
});

function compareChoices(playerChoice, opponentChoice) {
    if ((playerChoice === 2 && opponentChoice === 1) || 
    (playerChoice === 1 && opponentChoice === 0) || 
    (playerChoice === 0 && opponentChoice === 2)) {
        return "You WON! Amazing job! \u{1F3C6}";
    } else if (playerChoice === opponentChoice) {
        return "It's a draw!";
    } else {
        return "You lost! Try again! \u{1F622}";
    }
}

function deselect(options) {
    options.forEach(option => {
        option.classList.remove("selected");
    });
}