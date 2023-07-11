const getTriviaButton = document.querySelector(".questions");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll("p");

let answerButton = document.querySelectorAll(".hidden");
getTriviaButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((json) => {
      const results = json.results;
      let i = 0;
      for (let result of results) {
        if (i < h2.length) {
          h2[i].textContent = result.name;
          p[i].textContent = result.question;
          i++;
        }
        answerButton.forEach((answerButton, index) => {
          answerButton.addEventListener("click", (e) => {
            e.preventDefault();
          });
          
        });
      }
    });
});
