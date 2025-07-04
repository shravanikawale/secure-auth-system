// Register Handler
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.text();
  alert(data);
  if (data.includes("success")) window.location.href = "index.html";
});

// Login Handler
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (data.token) {
    localStorage.setItem("authToken", data.token);
    window.location.href = "success.html";
  } else {
    alert("Invalid credentials");
  }
});
