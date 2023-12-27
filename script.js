function validatePasswords(password, confirmPassword) {
    return password === confirmPassword;
}

const confirmPassword = document.getElementById("confirm_pwd");

confirmPassword.addEventListener("input", () => {
  const password = document.getElementById("pwd").value;
  const isPasswordsValid = validatePasswords(password, confirmPassword.value);

  if (!isPasswordsValid) {
    confirmPassword.setCustomValidity("Passwords do not match.");
  } else {
    confirmPassword.setCustomValidity("");
  }
});