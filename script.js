// Simple JS for password generator - Prince

const passwordInput = document.getElementById('password');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const strengthText = document.getElementById('strength');

// show length value live
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
    const len = lengthSlider.value;
    let charset = "";
    let password = "";

    if (uppercase.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase.checked) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers.checked) charset += "0123456789";
    if (symbols.checked) charset += "@#$!%^&*()_+-=[]{}|;:,.<>?";

    if (charset === "") {
        alert("Please select at least one option!");
        return;
    }

    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordInput.value = password;

    // simple strength check
    if (len < 8) {
        strengthText.textContent = "Strength: Weak 😐";
        strengthText.style.color = "#ef4444";
    } else if (len < 14) {
        strengthText.textContent = "Strength: Medium 🙂";
        strengthText.style.color = "#fbbf24";
    } else {
        strengthText.textContent = "Strength: Strong 🚀💪";
        strengthText.style.color = "#22c55e";
    }
}

generateBtn.addEventListener('click', generatePassword);

// copy function
copyBtn.addEventListener('click', () => {
    if (passwordInput.value === "") {
        alert("Generate a password first!");
        return;
    }
    navigator.clipboard.writeText(passwordInput.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1500);
});

// generate one on load
generatePassword();