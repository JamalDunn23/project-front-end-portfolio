
const form = document.getElementById("user_input");
let ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let li = document.createElement("li");
  let firstName= form.querySelector("#first_name").value;
  let lastName= form.querySelector("#last_name").value;
  let planets= form.querySelector("#planets").value;
  let species = form.querySelector("#species").value;
  let transportation = form.querySelector("#transportation").value;
  

  li.innerHTML = 
    `<h3>First Name:</h3<p>${firstName}</p>
    <h3>Last Name:</h3><p>${lastName}</p>
    <h3>Planets:</h3><p>${planets}</p>
    <h3>Species:</h3><p>${species}</p>
    <h3>Transportation:</h3><p>${transportation}</p>`
    

  ul.append(li);

 

  form.reset();
});


