/**
 * Changes the style of the text on the page.
 * @param {number} fontSize - The size of the font.
 * @param {string} fontWeight - The weight of the font.
 * @param {string} textTransform - The transformation to apply to the text.
 * @param {string} backgroundColor - The background color of the page.
 * @param {string} color - The color of the text.
 * @returns {function} - A function that changes the style of the text on the page.
 */
function changeMode(fontSize, fontWeight, textTransform, backgroundColor, color) {
    return function() {
        document.body.style.fontSize = `${fontSize}px`;
        document.body.style.fontWeight = fontWeight;
        document.body.style.textTransform = textTransform;
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.color = color;
    };
}

/**
 * Creates buttons to change the style of the text on the page.
 */
function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const p = document.createElement("p");
    p.innerText = "Welcome Holberton!";
    document.body.appendChild(p);

    const spookyButton = document.createElement("button");
    spookyButton.innerText = "Spooky";
    spookyButton.onclick = spooky;
    document.body.appendChild(spookyButton);

    const darkButton = document.createElement("button");
    darkButton.innerText = "Dark mode";
    darkButton.onclick = darkMode;
    document.body.appendChild(darkButton);

    const screamButton = document.createElement("button");
    screamButton.innerText = "Scream mode";
    screamButton.onclick = screamMode;
    document.body.appendChild(screamButton);
}

main();