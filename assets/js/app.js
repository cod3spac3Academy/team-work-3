const gameDivs = document.querySelectorAll("section.games .newGames");

for (let i = 0; i < gameDivs.length; i++) {
  gameDivs[i].addEventListener("click", function () {
    window.location.href = gameDivs[i].dataset.link;
  });
}
