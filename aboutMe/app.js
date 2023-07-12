
const form = document.getElementById("user_input");
let ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let li = document.createElement("li");
  let name = form.querySelector("#name").value;
  let price = form.querySelector("#price").value;
  let inStockCheckbox = form.querySelector("#check-box");
//   let inStock = inStockCheckbox.checked();
  let image = form.querySelector("#img").value;
  let shirtColor = form.querySelector("#shirt-color").value;

  li.innerHTML = 
    `<img src="${image}" alt="image" />
    <h3>Name:</h3><p>${name}</p>
    <h3>Price:</h3><p>${price}</p>
    
    <h3>Color:</h3><p>${shirtColor}</p>
    <br/>
    <button class="removeBtn">Remove</button>`;

  ul.append(li);

  const deleteButton = li.querySelector(".removeBtn");
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  form.reset();
});

let removeBtns = document.querySelectorAll(".removeBtn");

removeBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("this is working");
    const li = e.target.closest("li");
    li.remove();
  });
});

let removeExistingCheckboxes = document.querySelectorAll(".check-box");
removeExistingCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
           if (document.querySelector('.check-box').checked) {
          checkbox.setAttribute('checked', 'checked');
        } else {
          checkbox.removeAttribute('checked');
        }
  });
});
