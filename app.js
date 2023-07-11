const getTriviaButton = document.querySelector(".newCharacters");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll("p");
const p1 = document.querySelectorAll("p1");
const p2 = document.querySelectorAll("p2");
const p3 = document.querySelectorAll("p3");
const p4 = document.querySelectorAll("p4");
const img = document.querySelectorAll("img")
const a = document.querySelectorAll(".wikiLink")
let answerButton = document.querySelectorAll(".hidden");
getTriviaButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://akabab.github.io/starwars-api/api/all.json")
    .then((response) => response.json())
    .then((json) => {
      const results = json;
      console.log(json)
      let shuffleResult = results.sort(()=> Math.floor(Math.random()- 0.5))
      let i = 0;
      for (let result of shuffleResult) {
        if (i < h2.length) {
          h2[i].textContent = result.name;
          a[i].setAttribute("href", `${result.wiki}`) 
          p[i].textContent = result.mass;
          p1[i].textContent = result.species.charAt(0).toUpperCase() + result.species.slice(1);
          p2[i].textContent = result.born;
          p3[i].textContent = result.gender.charAt(0).toUpperCase() + result.gender.slice(1);;
          p4[i].textContent = result.died;
          const imageUrl = result.image || "https://www.clipartmax.com/png/middle/28-289126_profile-clipart-mystery-person-clerk-icon.png"
          const placeHolderImage = 'https://www.clipartmax.com/png/middle/28-289126_profile-clipart-mystery-person-clerk-icon.png'
          img[i].setAttribute("src",`${imageUrl}`)
          img[i].addEventListener("error", () => {
            img[i].setAttribute("src", `${placeHolderImage}`)
          });
          i++;
        }
      }
    });
});
