function checkPassword() {
  const password = document.getElementById("password").value;
  const bar = document.getElementById("bar");
  const feedback = document.getElementById("feedback");

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

  const weakPasswords = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "abc123",
  ];
  if (weakPasswords.includes(password.toLowerCase())) {
    score = 1;
    feedback.textContent = "⚠️ Too common!";
    feedback.style.color = "red";
  }

  let strength = "";
  let color = "";
  let emoji = "";

  switch (score) {
    case 0:
    case 1:
      strength = "Very Weak";
      color = "red";
      emoji = "😞";
      break;
    case 2:
      strength = "Weak";
      color = "orangered";
      emoji = "😟";
      break;
    case 3:
      strength = "Moderate";
      color = "orange";
      emoji = "🙂";
      break;
    case 4:
      strength = "Strong";
      color = "#99cc00";
      emoji = "💪";
      break;
    
    case 5:
      strength = "Very Strong";
      color = "#00ff99";
      emoji = "🔥";
      break;
    case 6:
      strength = "ULTRA STRONG";
      color = "green";
      emoji = "🌟";
      break;
  }

  const percentage = (score / 6) * 100;
  bar.style.width = percentage + "%";
  bar.style.backgroundColor = color;
  feedback.textContent = `${strength} ${emoji}`;
  feedback.style.color = color;
}

function togglePassword() {
  const input = document.getElementById("password");
  const toggle = document.getElementById("toggle");

  if (input.type === "password") {
    input.type = "text";
    toggle.textContent = "🙈 Hide";
  } else {
    input.type = "password";
    toggle.textContent = "👁️ Show";
  }
}

function copyPassword() {
  const password = document.getElementById("password").value;
  if (!password) {
    alert("No password to copy!");
    return;
  }
  navigator.clipboard.writeText(password);
  alert("📋 Password copied to clipboard!");
}

function generatePassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/~`-=";
  let password = "";
  for (let i = 0; i < 14; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("password").value = password;
  checkPassword();
}