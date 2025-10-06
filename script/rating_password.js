import { getPasswordLength } from "./utils.js";

const lengthSlider = document.getElementById('length-slider');

function ratePassword() {
    const length = getPasswordLength();
    const checkboxOptions = document.querySelectorAll('.password-options input');
    
    var passOpts = 0;
    checkboxOptions.forEach((input) => {
        if (input.checked) passOpts++;
    });

    if (length < 6 || passOpts < 2) {
        return {resultStr: "Low", nbBars: 1};
    } else if (length < 10 || passOpts < 3) {
        return {resultStr: "Medium", nbBars: 2};
    } else {
        return {resultStr: "High", nbBars: 4};
    }
}

function uncheckedAllBar() {
    const bars = document.querySelectorAll('.rating-bar');
    bars.forEach((bar) => {
        bar.classList.remove('checked');
    });
}

function checkedAllBar(number_rating_bar) {
    const bars = document.querySelectorAll('.rating-bar');
    for (let i = 0; i < number_rating_bar; i++) {
        bars[i].classList.add('checked');
    }
}

function updatePasswordRating() {
    const {resultStr, nbBars} = ratePassword();
    const passwordRate = document.getElementById('password-rate');
    passwordRate.textContent = resultStr;

    uncheckedAllBar();
    checkedAllBar(nbBars);
}

export function updatePasswordUi(new_password) {
    const password = document.getElementById('password');
    password.textContent = new_password;

    const passwordLength = document.getElementById('password-lenght');
    const length_slider = document.getElementById('length-slider');
    passwordLength.value = length_slider.value;
    updatePasswordRating();
}

function updateUiPasswordLength() {
    const passwordLength = document.getElementById('password-lenght');
    passwordLength.textContent = lengthSlider.value;
}

lengthSlider.addEventListener('input', updateUiPasswordLength);
