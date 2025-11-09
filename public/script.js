const API_URL = "http://localhost:4000/api/users";

async function fetchUsers() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";
  data.forEach(user => {
    const row = `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td></tr>`;
    tbody.innerHTML += row;
  });
}

async function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  fetchUsers();
}

fetchUsers();
