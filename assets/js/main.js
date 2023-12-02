const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector("ul");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})

function toggleAside() {
    var aside = document.getElementById('aside');

    if (aside.classList.contains('mostrar')) {
        aside.classList.remove('mostrar');
        aside.classList.add('esconder');
    } else {
        aside.classList.remove('esconder');
        aside.classList.add('mostrar');
    }
}
