const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  // window.location = "index.html";
  // Get form values
  // const name = document.getElementById("name").value;
  // const email = document.getElementById("email").value;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const result = document.createElement("p");
  result.textContent = `Submitted Name: ${name}, Email: ${email}`;
  document.body.appendChild(result);

  // if (name === "" || email === "") {
  //     alert("All fields are required!");
  //     return;
  // }

  // if (!email.includes("@")) {
  //     alert("Invalid email address!");
  //     return;
  // }

  // console.log(`Name: ${name}, Email: ${email}`);
  // alert(`Form submitted! Name: ${name}, Email: ${email}`);
});
