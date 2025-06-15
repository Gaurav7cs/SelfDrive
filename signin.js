document.getElementById('signinForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Page reload hone se rokna

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Basic email validation
  if (!/\S+@\S+\.\S+/.test(email)) {
    showMessage("Please enter a valid email.");
    return;
  }

  if (password.length < 6) {
    showMessage("Password must be at least 6 characters.");
    return;
  }

  // Yahan pe actual authentication backend se connect hoga (future upgrade)
  showMessage("Sign in successful!", true);
});

function showMessage(msg, success = false) {
  const msgBox = document.getElementById('message');
  msgBox.textContent = msg;
  msgBox.style.color = success ? "green" : "red";
}
