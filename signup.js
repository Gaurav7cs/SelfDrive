document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (username.length < 3) {
    showMessage("Username kam se kam 3 characters ka hona chahiye.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    showMessage("Valid email daaliye.");
    return;
  }

  if (password.length < 6) {
    showMessage("Password kam se kam 6 characters ka hona chahiye.");
    return;
  }

  showMessage("Signup successful!", true);
});

function showMessage(msg, success = false) {
  const msgBox = document.getElementById('message');
  msgBox.textContent = msg;
  msgBox.style.color = success ? "green" : "red";
}
