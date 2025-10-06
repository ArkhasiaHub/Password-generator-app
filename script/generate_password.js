import { randomPassword } from "secure-random-password";
import { getPasswordLength } from "./utils.js";
import { updatePasswordUi } from "./rating_password.js"

const generate_password_button = document.getElementById('generate-button');

function getPasswordCharactersOption() {
    const upperCheck = document.getElementById('uppercase-checkbox');
    const lowerCheck = document.getElementById('lowercase-checkbox');
    const numberCheck = document.getElementById('numbers-checkbox');
    const symbolsCheck = document.getElementById('symbols-checkbox');

    const characters = [];
    if (upperCheck.checked) characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (lowerCheck.checked) characters.push('abcdefghijklmnopqrstuvwxyz');
    if (numberCheck.checked) characters.push('0123456789');
    if (symbolsCheck.checked) characters.push('!@#$%^&*()-_=+[]{};:,.<>/?`~|\\');
    return characters;
}

function genPassword() {
    const length = getPasswordLength();
    const characters = getPasswordCharactersOption();

    if (characters.length === 0) {
        alert(' Please select at least one character type !');
        return ;
    }

    const pass = randomPassword({
        length: length,
        characters: characters
    });
    return pass;
}

function generate() {
    const new_password = genPassword();
    updatePasswordUi(new_password);
}

generate_password_button.addEventListener('click', generate);
generate();
