window.addEventListener("load", () => {
    let team = document.querySelectorAll(".card div");
    let dissables = document.querySelectorAll(".dissable");
    let buttons = document.querySelectorAll(".buttonDissable");
    
    team.forEach((player, index) => {
        let dissable = dissables[index];
        let button = buttons[index];

        player.addEventListener("mouseover", () => {
        dissable.classList.remove("dissable");
        button.classList.add("buttonDissable");
        });

        player.addEventListener("mouseout", () => {
        dissable.classList.add("dissable");
        button.classList.remove("buttonDissable");
        });
    });
});
