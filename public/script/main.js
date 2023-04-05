const nameInput = document.querySelector("#input-name");
const emailInput = document.querySelector("#input-email");
const avatarInput = document.querySelector("#input-avatar-url");
const submitBtn = document.querySelector("#submitBtn");
const tableBody = document.querySelector("#table-body");

usersData = [
  {
    id: 2,
    avatar_url: "https://api.dicebear.com/6.x/adventurer/svg?seed=Midnight",
    name: "John Doe",
    email: "johndoe@example.com",
  },
  {
    id: 3,
    avatar_url: "https://api.dicebear.com/6.x/adventurer/svg?seed=Midnight",
    name: "John Doe",
    email: "johndoe@example.com",
  },
];

fetch("/users")
  .then((res) => res.json())
  .then((usersData) => {
    tableBody.textContent = "";
    usersData.forEach((user) => {
      tableBody.innerHTML += `<tr>
    <td>${user.id}</td>
    <td>
      <img
        src="${user.avatar_url}"
        class="avatar"
      />
    </td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td class="actions">
      <span class="edit" onclick="editUser(${user.id})">Edit </span>
      |
      <span class="delete" onclick="deleteUser(${user.id})"> Delete</span>
      |
      <span class="delete" onclick="addBlog(${user.id})"> Add blog</span>
    </td>
  </tr>`;
    });
  });

submitBtn.addEventListener("click", () => {
  fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput.value,
      emailInput: emailInput.value,
      avatarInput: avatarInput.value,
    }),
  })
    .then((res) => res.json())
    .then((usersData) => {
      usersData.forEach((user) => {
        tableBody.innerHTML += `<tr>
      <td>${user.id}</td>
      <td>
        <img
          src="${user.avatar_url}"
          class="avatar"
        />
      </td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td class="actions">
        <span class="edit" onclick="editUser(${user.id})">Edit </span>
        |
        <span class="delete" onclick="deleteUser(${user.id})"> Delete</span>
        |
        <span class="delete" onclick="addBlog(${user.id})"> Add blog</span>
      </td>
    </tr>`;
      });
    });
});
