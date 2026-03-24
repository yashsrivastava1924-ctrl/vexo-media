async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      alert("Login successful 🚀");
      window.location.href = "home.html";
    } else {
      alert("Invalid credentials ❌");
    }

  } catch (error) {
    alert("Server error ❌");
  }
}
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://127.0.0.1:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      alert("Signup successful 🎉");
    } else {
      alert(data.message);
    }

  } catch (error) {
    alert("Server error ❌");
  }
}