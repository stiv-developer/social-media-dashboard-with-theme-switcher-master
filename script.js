function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
        card.classList.toggle("dark-mode-card");
    });

    var h2 = document.querySelector("h2");
    h2.classList.toggle("dark-mode-h2");

    var span = document.querySelector(".followers");
    span.classList.toggle("dark-mode-followers");

    var titleDarkMode = document.querySelector(".title-dark-mode");
    titleDarkMode.classList.toggle("dark-mode-titleDarkMode");

    var name_perfil = document.querySelectorAll(".name-perfil");
    name_perfil.forEach(function (name) {
        name.classList.toggle("dark-mode-name-perfil");
    })

    var title_followers = document.querySelectorAll(".title-followers");
    title_followers.forEach(function (title) {
        title.classList.toggle("dark-mode-title-followers");
    })

    var title_overview = document.querySelector(".title-overview");
    title_overview.classList.toggle("dark-mode-title-overview");

    var title_card = document.querySelectorAll(".title-card");
    title_card.forEach(function (card){
        card.classList.toggle("dark-mode-title-card");
    })
}