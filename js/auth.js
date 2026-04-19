let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById("formTitle").innerText =
    isLogin ? "Login" : "Sign Up";
}

function submitForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  alert(isLogin ? "Logged in successfully" : "Account created");
  window.location.href = "index.html";
}
