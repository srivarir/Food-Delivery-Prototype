// js/login.js
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginBtn.onclick = () => {
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
};

signupBtn.onclick = () => {
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
};

loginForm.onsubmit = e => {
  e.preventDefault();
  alert("Login successful (dummy)");
};

signupForm.onsubmit = e => {
  e.preventDefault();
  alert("Signup successful (dummy)");
};
