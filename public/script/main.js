const nameInput = document.querySelector("#input-name");
const emailInput = document.querySelector("#input-email");
const avatarInput = document.querySelector("#input-avatar-url");
const submitBtn = document.querySelector("#submitBtn");
const tableBody = document.querySelector("#table-body");

function createUserRow(user) {
  const tr = document.createElement("tr");

  const idTd = document.createElement("td");
  idTd.textContent = user.id;
  tr.appendChild(idTd);

  const avatarTd = document.createElement("td");
  const avatarImg = document.createElement("img");
  avatarImg.src = user.img_url;
  avatarImg.classList.add("avatar");
  avatarTd.appendChild(avatarImg);
  tr.appendChild(avatarTd);

  const nameTd = document.createElement("td");
  nameTd.textContent = user.name;
  tr.appendChild(nameTd);

  const emailTd = document.createElement("td");
  emailTd.textContent = user.email;
  tr.appendChild(emailTd);

  const actionsTd = document.createElement("td");
  actionsTd.classList.add("actions");
  const editSpan = document.createElement("span");
  editSpan.classList.add("edit");
  editSpan.textContent = "Edit";
  editSpan.onclick = function () {
    editUser(user.id);
  };
  actionsTd.appendChild(editSpan);

  const separator = document.createTextNode(" | ");
  actionsTd.appendChild(separator);

  const deleteSpan = document.createElement("span");
  deleteSpan.classList.add("delete");
  deleteSpan.textContent = "Delete";
  deleteSpan.onclick = function () {
    fetch(`/users/?id=${user.id}`, {
      method: "DELETE",
    });
  };
  actionsTd.appendChild(deleteSpan);

  const separator2 = document.createTextNode(" | ");
  actionsTd.appendChild(separator2);

  const addBlogSpan = document.createElement("span");
  addBlogSpan.classList.add("add-blog");
  addBlogSpan.textContent = "Add blog";
  addBlogSpan.onclick = function () {
    addBlog(user.id);
  };
  actionsTd.appendChild(addBlogSpan);

  tr.appendChild(actionsTd);

  return tr;
}

fetch("/hh")
  .then((res) => res.json())
  .then((usersData) => {
    tableBody.textContent = "";
    usersData.forEach((user) => {
      tableBody.append(createUserRow(user));
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
      console.log(usersData);
      usersData.forEach((user) => {
        tableBody.append(createUserRow(user));
      });
    });
});
