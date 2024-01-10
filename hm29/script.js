const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
function validateEmail(email, pattern) {
    return pattern.test(email);
}

const userEmail = prompt("input email:");

const isValidEmail = validateEmail(userEmail, emailPattern);
console.log(`email (${userEmail}): ${isValidEmail}`);
